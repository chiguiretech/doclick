import Link from 'next/link';
import Logo from '../../Logo';

const DoctorRegisterHeader = () => {
  return (
    <header className='px-8 py-5'>
      <div className='max-w-5xl m-auto flex items-center justify-between'>
        <Logo />
        <ul>
          <li className='font-normal font-sans  text-textColor'>
            <Link href='/login'>Iniciar sesión</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default DoctorRegisterHeader;
