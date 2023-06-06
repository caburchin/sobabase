import { QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import { QuestionnaireForm } from 'src/features/questonnaire';
import { UserProvider } from 'src/hooks/useUser';

const QuestionnairePage = () => {
  return (
    <UserProvider>
      <Head>
        <title>Sobabase | Questionnaire</title>
      </Head>
      <div className="container">
        <h1>Questionnaire</h1>
        <QuestionnaireForm />
      </div>
    </UserProvider>
  );
};

export default QuestionnairePage;
