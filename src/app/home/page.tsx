'use server';
import Head from 'next/head';
import Home from 'src/features/home';

export default async function HomePage() {
  return (
    <>
      <Head>
        <title>Sobabase | Home</title>
      </Head>
      <Home />
    </>
  );
}
