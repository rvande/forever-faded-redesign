'use client';

import { useEffect } from 'react';

const AW_ID = 'AW-16761561025';

export default function GoogleTag() {
  useEffect(() => {
    if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${AW_ID}"]`)) {
      return;
    }

    const asyncScript = document.createElement('script');
    asyncScript.async = true;
    asyncScript.src = `https://www.googletagmanager.com/gtag/js?id=${AW_ID}`;

    const inlineScript = document.createElement('script');
    inlineScript.id = 'google-tag-init';
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${AW_ID}');
    `;

    document.head.insertBefore(inlineScript, document.head.firstChild);
    document.head.insertBefore(asyncScript, document.head.firstChild);
  }, []);

  return null;
}
