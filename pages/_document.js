import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="zh-Hant">
      <Head>
        {/*<!-- Primary Meta Tags -->*/}
        <meta name="title" content="NGOM" />
        <meta
          name="description"
          content="Mingdao High School Students Learning Platform"
        />

        {/*<!-- Open Graph / Facebook -->*/}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mdsrl.mingdao.edu.tw/" />
        <meta property="og:title" content="NGOM" />
        <meta
          property="og:description"
          content="Mingdao High School Students Learning Platform"
        />
        <meta property="og:image" content="/banner.png" />

        {/*<!-- Twitter -->*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mdsrl.mingdao.edu.tw/" />
        <meta property="twitter:title" content="NGOM" />
        <meta
          property="twitter:description"
          content="Mingdao High School Students Learning Platform"
        />
        <meta property="twitter:image" content="/banner.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
