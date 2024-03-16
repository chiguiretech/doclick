import RegisterDoctorForm from '@/app/ui/Form/RegisterDoctorForm';
import DoctorRegisterHeader from '@/app/ui/Header/DoctorRegisterHeader';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Registrate como médico | Doclick',
  description: 'Registrarme como médico',
};

const DoctorRegisterPage = () => {
  return (
    <div className='bg-[#f8f9fa] h-screen'>
      <DoctorRegisterHeader />
      <main className='max-w-5xl m-auto '>
        <h1 className='text-center text-2xl text-textColor my-12'>
          Registrarme como médico
        </h1>
        <RegisterDoctorForm />
      </main>
    </div>
  );
};

export default DoctorRegisterPage;
