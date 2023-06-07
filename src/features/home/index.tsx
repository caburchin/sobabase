import { useUser } from 'src/hooks/useUser';
import { useQuestionnaires } from 'src/resources/useQuestionaires';

const Home = () => {
  const user = useUser();
  const profiles = useQuestionnaires(user?.id);
  return (
    <>
      <h1>Hello {user.user_metadata.name}</h1>
      <section className="container">
        <h2>Profile</h2>
        {profiles.map((prof) => (
          <article key={prof.id}>
            <p>{prof.name}</p>
            <p>{prof.birthDay}</p>
            <p>{prof.job}</p>
            <p>{prof.favoriteIn}</p>
          </article>
        ))}
      </section>
    </>
  );
};

export default Home;
