import Head from 'next/head';
import Home from 'src/features/home.component';
import { UserProvider } from 'src/hooks/useUser';

const HomePage = () => {
  return (
    <UserProvider>
      <Head>
        <title>Sobabase | Home</title>
      </Head>
      <Home />
    </UserProvider>
  );
};

export default HomePage;
