const CheckedIcon = ({ position = 'static' }) => {
  return (
    <div
      className={`${position} w-4 h-4 top-0 left-11 rounded-full bg-greenLight flex items-center justify-center text-white text-2xl`}
    >
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
      </svg>
    </div>
  );
};

export default CheckedIcon;
