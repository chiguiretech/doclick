import NextAuth from 'next-auth';
import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  pages: {
    register: '/doctor-register',
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(
          auth,
          (credentials as any).email || '',
          (credentials as any).password || ''
        )
          .then((userCredential) => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch((error) => {
            console.error(error);
          });
      },
    }),
  ],
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  authOptions,
});
