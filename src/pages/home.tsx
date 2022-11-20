import Home from 'src/components/pages/home.component';
import { UserProvider } from 'src/hooks/useUser';

const HomePage = () => {
  return (
    <main className="container">
      <UserProvider>
        <Home />
      </UserProvider>
    </main>
  );
};

export default HomePage;
