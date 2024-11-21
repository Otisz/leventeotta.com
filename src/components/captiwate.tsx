"use client";

import Script from "next/script";

export default function Captiwate() {
  return (
    <>
      <Script
        id="captiwate"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,i) { w._captiwateSettings={site:i};
        var h=d.getElementsByTagName('head')[0];
        var s=d.createElement('script');
        s.async=1; s.type='module';
        s.src='https://widget.captiwate.com/widget.js';
        h.appendChild(s);
    }) (window, document, '13b426ab-54ed-4f44-a969-c9e12f574e12');`,
        }}
      />
    </>
  );
}
