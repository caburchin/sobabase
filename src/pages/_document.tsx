import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html data-theme="dark">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9G211QMFKT"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-9G211QMFKT');`,
          }}
        ></script>
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="http://sobabase.vercel.app/image.jpg" />
        <meta name="twitter:title" content="Sobabase" />
        <meta name="twitter:description" content="My Supabase Sandbox" />
        <meta property="og:image" content="https://sobabase.vercel.app/favicon.ico" />
        <meta property="og:title" content="Sobabase" />
        <meta property="og:description" content="My Supabase Sandbox" />
      </Head>
      <body className="container">
        <main>
          <Main />
        </main>
        <NextScript />
        <footer>
          <small>
            Built with <a href="https://picocss.com">Pico</a> •{' '}
            <a href="https://github.com/caburchin/sobabase">Source code</a>
          </small>
        </footer>
      </body>
    </Html>
  );
}
