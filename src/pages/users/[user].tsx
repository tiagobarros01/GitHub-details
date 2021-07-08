/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import dark from '../../styles/themes/dark';
import { useToast } from '../../utils/useToast';
import { Loader } from '../../components/Loader';
import { UserContext } from '../../contexts/UserContext';

export default function User() {
  const { query: { user }} = useRouter();
  const { isLoading, getUserData } = useContext(UserContext)

  useEffect(() => {
    getUserData(String(user))
  }, [getUserData, user]);

  return <div>{isLoading ? <Loader /> : <h1>{user}</h1>}</div>;
}
