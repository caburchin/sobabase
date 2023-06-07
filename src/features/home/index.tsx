'use server';
import { redirect } from 'next/navigation';
import { getQuestionnaires } from 'src/resources/useQuestionaires';
import { getUser } from 'src/resources/user';

export default async function Home() {
  const user = await getUser();
  const profiles = await getQuestionnaires(user?.id);

  if (!user) {
    redirect('/');
  }

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
}
