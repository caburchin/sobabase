import { useForm } from 'react-hook-form';
import Head from 'next/head';
import { Questionnaire } from './types';
import { useUser } from 'src/hooks/useUser';
import { usePostQuestionnaire } from './usePostQuestionnaire';

const defaultValues: Questionnaire = {
  name: '',
  birthDay: '',
  job: '',
  favoriteIn: '',
  uid: '',
};

export const QuestionnaireForm = () => {
  const user = useUser();
  const { register, handleSubmit } = useForm({
    defaultValues: { ...defaultValues, uid: user?.id },
  });
  const { postQuestionnaire, isLoading, isSuccess, isError, error } = usePostQuestionnaire();
  const onSubmit = (data: Questionnaire) => {
    postQuestionnaire(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register('name')} />
        <label>Birth Day</label>
        <input type="date" {...register('birthDay')} />
        <label>Job</label>
        <input {...register('job')} />
        <label>Favorite</label>
        <input {...register('favoriteIn')} />
        <input
          disabled={isLoading}
          type="submit"
          value={isSuccess ? 'Success' : isLoading ? 'Loading...' : 'Submit'}
        />
      </form>
    </div>
  );
};
