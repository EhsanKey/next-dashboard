'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { ZodError } from 'zod';
import styles from './authPage.module.scss';
import Button from '@/ui/components/Button/button';
import Input from '@/ui/components/Input/input';
import { loginSchema } from './schema';
import { getUserData } from '@/api/user';
import useUser from '@/hooks/useUser';
import { useRouter } from 'next/navigation';

const AuthPage = () => {
  const router = useRouter();

  const [error, setError] = useState<string | null>(null);
  const { setUserData, setToken } = useUser();

  const { mutate, isPending } = useMutation({
    mutationFn: getUserData,
    onSuccess: async (userData) => {
      setUserData(userData);
      await setToken('some-token');
      router.push('/dashboard');
    },
    onError: () => {
      setError('An unexpected error occurred');
    },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const phoneNumber = formData.get('phoneNumber') as string;

    try {
      loginSchema.parse({ phoneNumber });
      mutate();
    } catch (err) {
      if (err instanceof ZodError) {
        setError(err.issues[0].message);
      } else {
        setError('Validation failed');
      }
    }
  };

  return (
    <div className={styles['login-page']}>
      <h1>Login</h1>
      <form onSubmit={onSubmit} className={styles['login-page__form']}>
        <Input
          label="Phone Number"
          type="text"
          name="phoneNumber"
          placeholder="09XXXXXXXXX"
          required
          autoFocus
          title="Phone number must be a valid Iranian mobile number"
          error={error}
        />

        <Button type="submit" disabled={isPending}>
          {isPending ? 'Loading...' : 'Submit'}
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;
