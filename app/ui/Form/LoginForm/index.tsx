'use client';

import Provider from '@/app/ui/Provider';
import GoogleIcon from '@/app/ui/icons/Google';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { RiEyeLine, RiEyeOffLine } from '@remixicon/react';
import { useState } from 'react';

type LoginForm = {
  email: string;
  password: string;
};

/**
 *
 * Hay que tener en cuenta los errores generales cuando se intente hacer login y mostrarlos
 */

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data: LoginForm) => {
    console.log(data);
  };

  return (
    <form
      className='w-full flex justify-center bg-red font-sans'
      onSubmit={handleSubmit(onSubmit)}
    >
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
              {...register('email', {
                required: 'Este campo es requerido',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Ingrese un correo electrónico válido',
                },
              })}
            />
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
            )}
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password' className='text-textColo text-sm mb-2'>
              Contraseña
            </label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                className='border border-borderColor rounded-md p-2 w-full'
                {...register('password', {
                  required: 'Este campo es requerido',
                  minLength: {
                    value: 8,
                    message: 'La contraseña debe tener al menos 8 caracteres',
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    message:
                      'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial',
                  },
                })}
              />
              <div className='absolute right-3 top-2/4 transform -translate-y-2/4'>
                {showPassword ? (
                  <RiEyeLine onClick={togglePasswordVisibility} color='gray' />
                ) : (
                  <RiEyeOffLine onClick={togglePasswordVisibility} color='gray' />
                )}
              </div>
            </div>
            {errors.password && (
              <p className='text-red-500 text-sm text-sm mt-1 '>
                {errors.password.message}
              </p>
            )}
          </div>
          <p className='text-teal text-sm font-bold'>
            <Link href='/reset-password'>¿Has olvidado tu contraseña?</Link>
          </p>
          <button className='bg-teal font-bold text-white rounded-full p-3 hover:opacity-85 transition-opacity'>
            Iniciar sesión
          </button>
          <p className='text-center text-xs font-light text-charcoal'>
            Al hacer clic en «Iniciar sesión» o «Continuar con», aceptas las Condiciones
            de uso, la Política de privacidad y la Política de cookies de Doclick.
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
  );
};

export default LoginForm;
