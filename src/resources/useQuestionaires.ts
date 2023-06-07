import { QuestionnaireSchema } from 'src/features/questonnaire/types';
import { supabase } from 'src/supabase';
import z from 'zod';
import ck from 'camelcase-keys';

export const getQuestionnaires = async (uid?: string) => {
  if (!uid) return [];
  const { data, error } = await supabase.from('questionnaires').select().eq('uid', uid);
  if (error) throw error;
  const result = z.array(QuestionnaireSchema).safeParse(ck(data, { deep: true }));
  if (!result.success) throw result.error;
  return result.data;
};
