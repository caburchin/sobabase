import { redirect } from 'next/navigation';
import Head from 'next/head';
import { QuestionnaireForm } from 'src/features/questonnaire';
import { getUser } from 'src/resources/user';

const QuestionnairePage = async () => {
  const user = await getUser();

  if (!user) {
    redirect('/');
  }

  return (
    <>
      <Head>
        <title>Sobabase | Questionnaire</title>
      </Head>
      <div className="container">
        <h1>Questionnaire</h1>
        <QuestionnaireForm user={user} />
      </div>
    </>
  );
};

export default QuestionnairePage;
