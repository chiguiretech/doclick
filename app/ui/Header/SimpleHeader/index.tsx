import Logo from '../../Logo';

const SimpleHeader = () => {
  return (
    <header className='px-8 py-5'>
      <div className='max-w-5xl m-auto flex items-center justify-between'>
        <Logo />
      </div>
    </header>
  );
};

export default SimpleHeader;
