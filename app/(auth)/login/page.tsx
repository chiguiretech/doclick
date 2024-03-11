import SimpleHeader from '@/app/ui/Header/SimpleHeader';
import Provider from '@/app/ui/Provider';
import GoogleIcon from '@/app/ui/icons/Google';
import { Metadata } from 'next';
import Link from 'next/link';

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
              <div className='flex flex-col'>
                <label htmlFor='password' className='text-textColo text-sm mb-2'>
                  Contraseña
                </label>
                <input
                  type='password'
                  id='password'
                  className='border border-borderColor rounded-md p-2'
                />
              </div>
              <p className='text-teal text-sm font-bold'>
                <Link href='/reset-password'>¿Has olvidado tu contraseña?</Link>
              </p>
              <button className='bg-teal font-bold text-white rounded-full p-3'>
                Iniciar sesión
              </button>
              <p className='text-center text-xs font-light text-charcoal'>
                Al hacer clic en «Aceptar y unirse» o «Continuar con», aceptas las
                Condiciones de uso, la Política de privacidad y la Política de cookies de
                Doclick.
              </p>
            </section>
            <div className='flex items-center justify-center '>
              <hr className='border-gray-400 flex-grow mx-2' />
              <span className='bg-gray-400 rounded-full w-2 h-2'></span>
              <hr className='border-gray-400 flex-grow mx-2' />
            </div>
            <section className='flex justify-center'>
              <Provider text='Continuar con google' link='/' icon={<GoogleIcon />} />
            </section>
            <section className='mt-5'>
              <p className='font-light text-charcoal text-center'>
                ¿Estás empezando a usar Doclick?{' '}
                <Link href='/doctor-register' className='font-bold text-teal'>
                  Unirse ahora
                </Link>
              </p>
            </section>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
