import LoginForm from '@/app/ui/Form/LoginForm';
import SimpleHeader from '@/app/ui/Header/SimpleHeader';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Iniciar sesión como médico | Doclick',
  description: 'Iniciar sesión como médico',
};

const Login = () => {
  return (
    <div className='bg-[#f8f9fa] h-screen'>
      <SimpleHeader />
      <main className='max-w-5xl m-auto'>
        <h1 className='text-center text-2xl text-textColor my-12'>
          Iniciar sesión como médico
        </h1>
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
