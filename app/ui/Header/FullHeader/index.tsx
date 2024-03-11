import Link from 'next/link';
import Logo from '../../Logo';

const FullHeader = () => {
  return (
    <header className='px-8 py-5'>
      <div className='max-w-5xl m-auto flex items-center justify-between'>
        <Logo />
        <ul className='flex items-center gap-5 wrap'>
          <li className='font-normal font-sans text-textColor'>
            <Link href='/login'>Iniciar sesión</Link>
          </li>
          <li className='font-bold font-sans text-teal border rounded-full py-2 px-6 border-teal'>
            <Link href='/doctor-register'>Únete como médico</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default FullHeader;
