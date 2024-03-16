'use client';

import Link from 'next/link';
import { useForm } from 'react-hook-form';

type ResetPasswordForm = {
  email: string;
};

const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordForm>();

  const onSubmit = (data: ResetPasswordForm) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full flex justify-center bg-red font-sans'
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
        </section>
        <section>
          <p className='font-light text-xs text-charcoal'>
            Enviaremos un código de verificación a este email si coincide con una cuenta
            de Doclick existente.
          </p>
        </section>
        <section className='flex flex-col gap-5 items-center'>
          <button className='w-full bg-teal font-bold text-white rounded-full p-3 hover:opacity-85 transition-opacity'>
            Siguiente
          </button>

          <Link
            href='/login'
            className='hover:bg-teal hover:bg-opacity-15 hover:underline w-fit p-2 rounded-full text-charcoal transition-colors duration-300'
          >
            Volver
          </Link>
        </section>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
