/**
 * Asset URL helper to resolve paths correctly across environments:
 * - Local development: http://localhost:3000/portfolio/
 * - GitHub Pages: https://nathandrake16.github.io/portfolio/
 * - Custom domain or Vercel: /
 */
export const asset = (path: string): string => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const clean = path.replace(/^\/+/, '');
  return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
};
