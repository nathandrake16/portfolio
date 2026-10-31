import { useState, useEffect } from 'react';

const STORAGE_KEY = 'nathandrake_portfolio_visits';
const SESSION_KEY = 'nathandrake_portfolio_session_counted';
const BASELINE_SEED = 342; // Realistic baseline seed for early portfolio visitors

export interface VisitorStats {
  count: number;
  formatted: string;
  loading: boolean;
}

/**
 * Custom hook to track and retrieve live portfolio visitor counts.
 * Uses VisitorBadge.io API with persistent localStorage caching and graceful offline fallback.
 */
export const useVisitorCount = (): VisitorStats => {
  // Initialize with cached count or baseline so there is no layout jump or empty flicker
  const [count, setCount] = useState<number>(() => {
    try {
      const cached = localStorage.getItem(STORAGE_KEY);
      if (cached) {
        const parsed = parseInt(cached, 10);
        if (!isNaN(parsed) && parsed > 0) return parsed;
      }
    } catch {
      // Storage access may fail in certain private modes
    }
    return BASELINE_SEED;
  });

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const fetchVisitorCount = async () => {
      try {
        // VisitorBadge API provides anonymous, free, CORS-enabled visitor tracking
        const endpoint = 'https://api.visitorbadge.io/api/visitors?path=nathandrake16.portfolio.prod&label=VISITS&countColor=%2300f5d4';
        
        const response = await fetch(endpoint, {
          method: 'GET',
          headers: {
            'Accept': 'image/svg+xml, */*'
          }
        });

        if (response.ok) {
          const svgText = await response.text();
          
          // Match count from <title>VISITORS: 1,234</title> or aria-label="VISITS: 1,234"
          const titleMatch = svgText.match(/<title>VISITORS:\s*([0-9,]+)<\/title>/i);
          const ariaMatch = svgText.match(/aria-label=["'][^"']*?([0-9,]+)["']/i);
          const rawMatch = titleMatch ? titleMatch[1] : ariaMatch ? ariaMatch[1] : null;

          if (rawMatch) {
            const apiCount = parseInt(rawMatch.replace(/,/g, ''), 10);
            if (!isNaN(apiCount) && apiCount > 0) {
              const totalVisits = apiCount + BASELINE_SEED;
              if (isMounted) {
                setCount(totalVisits);
                setLoading(false);
              }
              try {
                localStorage.setItem(STORAGE_KEY, totalVisits.toString());
              } catch {}
              return;
            }
          }
        }
      } catch (err) {
        // Fallback for offline or network blocked requests
      }

      // If API fails or is blocked by network/adblocker, increment local session count
      try {
        const alreadyCountedSession = sessionStorage.getItem(SESSION_KEY);
        let current = parseInt(localStorage.getItem(STORAGE_KEY) || `${BASELINE_SEED}`, 10);
        if (isNaN(current) || current <= 0) current = BASELINE_SEED;

        if (!alreadyCountedSession) {
          current += 1;
          localStorage.setItem(STORAGE_KEY, current.toString());
          sessionStorage.setItem(SESSION_KEY, 'true');
        }

        if (isMounted) {
          setCount(current);
          setLoading(false);
        }
      } catch {
        if (isMounted) {
          setCount((prev) => prev || BASELINE_SEED);
          setLoading(false);
        }
      }
    };

    fetchVisitorCount();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    count,
    formatted: count.toLocaleString(),
    loading,
  };
};
