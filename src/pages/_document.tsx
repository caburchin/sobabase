import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html data-theme="dark">
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />
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
