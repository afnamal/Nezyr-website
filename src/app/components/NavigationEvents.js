'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '../providers';

export default function NavigationEvents() {
  const pathname = usePathname();
  const { setLoading } = useLoading();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };

    const handleStop = () => {
      setLoading(false);
    };

    // Listen for route changes
    document.addEventListener('routeChangeStart', handleStart);
    document.addEventListener('routeChangeComplete', handleStop);
    document.addEventListener('routeChangeError', handleStop);

    return () => {
      document.removeEventListener('routeChangeStart', handleStart);
      document.removeEventListener('routeChangeComplete', handleStop);
      document.removeEventListener('routeChangeError', handleStop);
    };
  }, [setLoading]);

  // Reset loading state when pathname changes
  useEffect(() => {
    setLoading(false);
  }, [pathname, setLoading]);

  return null;
}
