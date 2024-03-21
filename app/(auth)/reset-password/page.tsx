import ResetPasswordForm from '@/app/ui/Form/ResetPasswordForm';
import FullHeader from '@/app/ui/Header/FullHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restablecer contraseña | Doclick',
  description: 'Restablecer contraseña de Doclick',
};

const ResetPassword = () => {
  return (
    <div className='bg-[#f8f9fa] h-screen'>
      <FullHeader />
      <main className='max-w-5xl m-auto'>
        <h1 className='text-center text-2xl text-textColor my-12'>
          ¿Has olvidado tu contraseña?
        </h1>
        <ResetPasswordForm />
      </main>
    </div>
  );
};

export default ResetPassword;
