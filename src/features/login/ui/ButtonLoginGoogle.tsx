import React from 'react';
import { signIn, useSession } from 'next-auth/react';
import Button from '@mui/joy/Button';

const ButtonLoginGoogle = () => {
  const { data: session } = useSession();
  console.log('session', session);
  return (
    <>
      <Button color='success'
        onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/' })
        }
      >
        Sign in with Google
      </Button>
    </>
  );
};

export default ButtonLoginGoogle;
