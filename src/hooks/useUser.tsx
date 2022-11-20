import React, { Suspense, useContext } from 'react';
import { createContext, PropsWithChildren } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '../supabase';
import { useSuspense } from './useSuspense';
import { useRouter } from 'next/router';

const ref = {};

const Context = createContext<User>({} as never);

const _UserProvider = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const {
    data: { user },
  } = useSuspense(() => supabase.auth.getUser(), ref);

  if (!user) {
    router.replace('/');
    return null;
  }

  console.log(user);

  return <Context.Provider value={user as User}>{children}</Context.Provider>;
};

export const UserProvider = ({ children }: PropsWithChildren) => (
  <Suspense fallback={<div className="container" aria-busy />}>
    <_UserProvider>{children}</_UserProvider>
  </Suspense>
);

export const useUser = () => useContext(Context) as User;
