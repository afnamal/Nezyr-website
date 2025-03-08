'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from '../providers';

export default function NavigationEvents() {
  const pathname = usePathname();
  const { setLoading } = useLoading();

  useEffect(() => {
    const startLoading = () => {
      setLoading(true);
    };

    const stopLoading = () => {
      setLoading(false);
    };

    // Add loading indicator when navigation starts
    startLoading();

    // Remove loading indicator when navigation completes
    const timeoutId = setTimeout(stopLoading, 500);

    return () => {
      clearTimeout(timeoutId);
      stopLoading();
    };
  }, [pathname, setLoading]);

  return null;
}
