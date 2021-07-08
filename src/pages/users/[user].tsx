import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Loader } from '../../components/Loader';
import { UserContext } from '../../contexts/UserContext';

export default function User() {
  const { query: { user }} = useRouter();
  const { isLoading, getUserData, userData } = useContext(UserContext)

  useEffect(() => {
    getUserData(String(user))
  }, [getUserData, user]);

  return (
    <div>
      {isLoading ? <Loader /> : <h1>{userData.name}</h1>}
    </div>
  )
}
