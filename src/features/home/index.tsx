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
            <dl className="grid" style={{ gridTemplateColumns: 'auto 1fr' }}>
              <dt>Name</dt>
              <dd>{prof.name}</dd>
              <dt>Birth day</dt>
              <dd>{prof.birthDay}</dd>
              <dt>Job</dt>
              <dd>{prof.job}</dd>
              <dt>Favorite</dt>
              <dd>{prof.favoriteIn}</dd>
            </dl>
          </article>
        ))}
      </section>
    </>
  );
};

export default Home;
