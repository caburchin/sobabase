'use client';
import { useForm } from 'react-hook-form';
import { Questionnaire } from './types';
import { usePostQuestionnaire } from './usePostQuestionnaire';
import { User } from '@supabase/supabase-js';

const defaultValues: Questionnaire = {
  name: '',
  birthDay: '',
  job: '',
  favoriteIn: '',
  uid: '',
};

type Props = {
  user: User;
};

export const QuestionnaireForm = ({ user }: Props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { ...defaultValues, uid: user?.id },
  });
  const { postQuestionnaire, isLoading, isSuccess, isError, error } =
    usePostQuestionnaire();
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
