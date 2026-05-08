import Script from 'next/script';

const GA_ID = 'G-Y1E3CBJH2T';
const AW_ID = 'AW-16761561025';

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        id="gtag-script"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
            gtag('config', '${AW_ID}');
          `,
        }}
      />
    </>
  );
}
