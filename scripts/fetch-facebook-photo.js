/**
 * Facebook Post Photo Fetcher
 * Usage:
 *   node scripts/fetch-facebook-photo.js <facebook_post_url> [output_relative_path]
 * Example:
 *   node scripts/fetch-facebook-photo.js "https://www.facebook.com/nisorgo.foundation/posts/..." "community/nisorgo-foundation.jpg"
 */

import fs from 'fs';
import path from 'path';

const postUrl = process.argv[2];
const outputName = process.argv[3] || 'community/fb-photo.jpg';

if (!postUrl) {
  console.log('❌ Error: Please provide a Facebook post URL.');
  console.log('Usage: node scripts/fetch-facebook-photo.js <facebook_post_url> [subfolder/filename.jpg]');
  process.exit(1);
}

async function fetchFacebookPhoto() {
  console.log(`🔍 Fetching metadata for: ${postUrl}`);
  
  try {
    const res = await fetch(postUrl, {
      headers: {
        'User-Agent': 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.html)'
      }
    });

    if (!res.ok) {
      throw new Error(`Facebook responded with status: ${res.status}`);
    }

    const html = await res.text();
    const ogImageMatch =
      html.match(/property="og:image"\s+content="([^"]+)"/i) ||
      html.match(/content="([^"]+)"\s+property="og:image"/i);

    if (!ogImageMatch || !ogImageMatch[1]) {
      console.log('⚠️ Could not extract og:image. The post might be private or require Facebook login.');
      console.log('💡 Quick Alternative: Open the Facebook post, right-click the photo, select "Copy Image Address", and download or paste the link directly into src/data/portfolioData.ts!');
      process.exit(1);
    }

    const rawImageUrl = ogImageMatch[1].replace(/&amp;/g, '&');
    console.log(`✅ Found Facebook CDN Image URL!`);

    console.log(`⬇️ Downloading photo...`);
    const imgRes = await fetch(rawImageUrl);
    const arrayBuffer = await imgRes.arrayBuffer();

    const targetPath = path.join(process.cwd(), 'public', 'images', outputName);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.writeFileSync(targetPath, Buffer.from(arrayBuffer));

    console.log(`🎉 Success! Saved image to: public/images/${outputName}`);
    console.log(`📝 To use it in portfolioData.ts, set:`);
    console.log(`   image: '/images/${outputName}'`);
  } catch (err) {
    console.error('❌ Error fetching Facebook photo:', err.message);
  }
}

fetchFacebookPhoto();
