import { useUser } from 'src/hooks/useUser';

const Home = () => {
  const user = useUser();
  return (
    <main className="container">
      <h1>Hello {user.user_metadata.name}</h1>
    </main>
  );
};

export default Home;
