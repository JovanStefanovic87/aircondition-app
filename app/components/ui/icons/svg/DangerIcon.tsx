const DangerIcon = ({ position = 'static' }) => {
  return (
    <div
      className={`${position} w-4 h-4 top-0 left-11 rounded-full  bg-red-500 flex items-center justify-center text-white text-2xl`}
    >
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' d='M12 6v5m0 5v1h1' />
      </svg>
    </div>
  );
};

export default DangerIcon;
