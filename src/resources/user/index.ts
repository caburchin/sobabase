'use server';
import { supabase } from 'src/supabase';

export const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};
