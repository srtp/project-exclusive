import {
  getSession, signOut, useSession,
} from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Home = (props: any) => {
  const { data: session } = useSession();

  useEffect(() => {
    console.log('session Effect', session);
  }, [session]);

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <div>
        <Link href="/api/auth/signout">
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
          >
            Sign Out
          </button>
        </Link>
      </div>
    );
  };

  if (!session) {
    return (
      <div className="hero">
        <div className="navbar">
          {signOutButtonNode()}
        </div>
        <div className="text">You aren&apos;t authorized to view this page</div>
      </div>
    );
  }

  return (
    <div className="hero">
      <Head>
        <title>Index Page</title>
      </Head>
      <div className="navbar">
        {signOutButtonNode()}
      </div>
      <div className="text">Hello world</div>
    </div>
  );
};

export const getServerSideProps = async ({ req }: any) => {
  const session = await getSession({ req });
  console.log('see', session?.user);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };

};

export default Home;
