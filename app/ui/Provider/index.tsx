import Link from 'next/link';

import React from 'react';

type Props = {
  text: string;
  icon: React.ReactNode;
  link: string;
};
const Provider = ({ text, icon, link }: Props) => {
  return (
    <div className='rounded-full p-3 border-2 w-full'>
      <Link href={link} className='flex items-center justify-center gap-2'>
        {icon}
        <span className='font-sans text-charcoal'>{text}</span>
      </Link>
    </div>
  );
};

export default Provider;
