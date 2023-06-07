import z from 'zod';

export type Questionnaire = {
  birthDay: string;
  name: string;
  job: string;
  favoriteIn: string;
  uid: string; // uuid
};

export const QuestionnaireSchema = z.object({
  id: z.number().int(),
  birthDay: z.string(),
  name: z.string(),
  job: z.string(),
  favoriteIn: z.string(),
  uid: z.string(),
});
