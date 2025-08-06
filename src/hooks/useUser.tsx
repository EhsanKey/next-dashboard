import { getCookie, setCookie } from '@/actions/cookies';
import { User } from '@/models/User';
import { useEffect, useState } from 'react';

const useUser = () => {
  const [userData, setUserDataState] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) {
      setUserDataState(JSON.parse(stored));
    }
  }, []);

  const setUserData = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
    setUserDataState(user);
  };

  const setToken = async (token: string) => {
    await setCookie('token', token);
  };

  const isLoggedIn = async (): Promise<boolean> => {
    const token = await getCookie('token');
    return !!token && !!userData;
  };

  return {
    userData,
    setUserData,
    setToken,
    isLoggedIn,
  };
};

export default useUser;
