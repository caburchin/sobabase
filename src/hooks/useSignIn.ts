import { useRouter } from 'next/router';
import { ComponentProps, useState } from 'react';
import { supabase } from '../supabase';

export const useSignIn = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin: ComponentProps<'button'>['onClick'] = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      router.replace('/home');
    } catch (error: unknown) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    setLoading,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  };
};
