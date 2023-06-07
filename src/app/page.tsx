import Head from 'next/head';
import { SignInPage } from 'src/features/signin.component';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Sobabase | Sign In</title>
      </Head>
      <SignInPage />
      <div className="container flex-end">
        <p>
          <em>Not invited yet？</em>Contact me.
        </p>
        <p>
          Twitter:
          <a
            href="https://twitter.com/holywebdev"
            target="_blank"
            rel="noreferrer noopener"
          >
            @holywebdev
          </a>
        </p>
      </div>
    </>
  );
};

export default IndexPage;
