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
      // we need to implement the authorize function
    }),
  ],
};

export default authOptions;
