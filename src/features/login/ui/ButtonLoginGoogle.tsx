import React from 'react';
import { signIn, useSession } from 'next-auth/react';

const ButtonLoginGoogle = () => {
  const { data: session } = useSession();
  console.log('session', session);
  return (
    <div>
      <button
        onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/' })
        }
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default ButtonLoginGoogle;
