import FullHeader from '@/app/ui/Header/FullHeader';
import { Metadata } from 'next';
import Link from 'next/link';

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
        <form className='w-full flex justify-center bg-red font-sans'>
          <div className='bg-white p-5 rounded-md w-full max-w-md flex flex-col gap-8 shadow'>
            <section className='flex flex-col gap-5'>
              <div className='flex flex-col'>
                <label htmlFor='email' className='text-textColo text-sm mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  className='border border-borderColor rounded-md p-2'
                />
              </div>
            </section>
            <section>
              <p className='font-light text-xs text-charcoal'>
                Enviaremos un código de verificación a este email si coincide con una
                cuenta de Doclick existente.
              </p>
            </section>
            <section className='flex flex-col gap-5'>
              <button className='bg-teal w-full font-bold text-white rounded-full p-3'>
                Siguiente
              </button>
              <Link href='/login' className='text-center  text-charcoal'>
                Volver
              </Link>
            </section>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ResetPassword;
