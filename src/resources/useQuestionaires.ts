import { QuestionnaireSchema } from 'src/features/questonnaire/types';
import { useSuspense } from 'src/hooks/useSuspense';
import { supabase } from 'src/supabase';
import z from 'zod';
import ck from 'camelcase-keys';

const ref = {};

export const useQuestionnaires = (uid?: string) => {
  return useSuspense(async () => {
    if (!uid) return [];
    const { data, error } = await supabase.from('questionnaires').select().eq('uid', uid);
    if (error) throw error;
    const result = z.array(QuestionnaireSchema).safeParse(ck(data, { deep: true }));
    if (!result.success) throw result.error;
    return result.data;
  }, ref);
};
