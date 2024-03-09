import Link from 'next/link';

const Logo = () => {
  return (
    <h3 className='text-3xl text-teal font-bold'>
      <Link href='/'>Doclick</Link>
    </h3>
  );
};

export default Logo;
