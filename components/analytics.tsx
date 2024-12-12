"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';

export {};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
          page_path: pathname + searchParams.toString(),
        });
      }
    };

    handleRouteChange(); // Initial call
    window.addEventListener('popstate', handleRouteChange); // Handle back/forward navigation

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [pathname, searchParams]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `,
        }}
      />
    </>
  );
}