import { useMutation } from '@tanstack/react-query';

import { supabase } from 'src/supabase';
import { Questionnaire } from './types';

export const usePostQuestionnaire = () => {
  const { mutate: postQuestionnaire, ...rest } = useMutation({
    mutationFn: async (questionnaire: Questionnaire) => {
      const { error } = await supabase.from('questionnaires').insert({
        birth_day: questionnaire.birthDay,
        name: questionnaire.name,
        job: questionnaire.job,
        favorite_in: questionnaire.favoriteIn,
        uid: questionnaire.uid,
      });

      return error;
    },
  });

  return { postQuestionnaire, ...rest };
};
