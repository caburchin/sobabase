import { useUser } from 'src/hooks/useUser';

const Home = () => {
  const user = useUser();
  return <h1>Hello {user.user_metadata.name}</h1>;
};

export default Home;
