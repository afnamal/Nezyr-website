'use client';
import { useEffect, useState } from 'react';
import { useLoading } from '../providers';

export default function LoadingBar() {
  const { loading } = useLoading();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let intervalId;

    if (loading) {
      setProgress(0);
      intervalId = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 90) {
            clearInterval(intervalId);
            return 90;
          }
          return prevProgress + 10;
        });
      }, 100);
    } else {
      setProgress(100);
      const timeoutId = setTimeout(() => setProgress(0), 200);
      return () => clearTimeout(timeoutId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [loading]);

  if (!loading && progress === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        backgroundColor: '#f0f0f0',
        zIndex: 9999,
      }}
    >
      <div
        style={{
          height: '100%',
          backgroundColor: '#2196f3',
          width: `${progress}%`,
          transition: 'width 0.2s ease-in-out',
        }}
      />
    </div>
  );
}
