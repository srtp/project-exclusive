/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable require-await */
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

// const NEXT_PUBLIC_API_URL='http://localhost:1337'
// const NEXT_PUBLIC_DATABASE_URL='postgres://strapi-blogs:admin@365365@localhost:5432/strapi?synchronize=true'
// const NEXTAUTH_URL='http://localhost:3000'
const GOOGLE_CLIENT_ID = '996115634593-hac9vhe7fbi6a6onabb8v0por11art73.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const options = {
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],

  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    jwt: true,
  },
  callbacks: {
    // the 'user' remains never read?!
    async session({ session, token, user }) {
      session.jwt = token.jwt;
      session.id = token.id;
      return session;
    },
    async jwt({ token, user, account }) {
      // console.log(token, user, account);
      if (user) {
        // prettier-ignore
        const response = await fetch(`http://localhost:3000/api/auth/google/callback?access_token=${account?.access_token}`);
        const data = await response.text();
        // console.log(data);
        token.jwt = data.jwt;

        // WARNING: if the followung line says 'token.id=data.user.id', it breaks!!!
        token.id = data.id;
      }
      // console.log(token.id);
      return token;
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
