import Script from 'next/script';

const GA_ID = 'G-Y1E3CBJH2T';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        id="gtag-bootstrap"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
        }}
      />
      <Script
        id="gtag-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="beforeInteractive"
      />
    </>
  );
}
