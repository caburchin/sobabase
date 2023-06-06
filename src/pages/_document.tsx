import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html data-theme="dark">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />
        <meta
          name="og:image"
          content="https://sobabase-n7q9ptvoy-holywebdev.vercel.app/favicon.ico"
        />
        <meta name="og:title" content="Sobabase" />
        <meta name="og:description" content="My Supabase Sandbox" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="https://sobabase.vercel.app/favicon.ico" />
        <meta name="twitter:title" content="Sobabase" />
        <meta name="twitter:description" content="My Supabase Sandbox" />
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
