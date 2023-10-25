import { PiSmileySadBold } from 'react-icons/pi';

const RedSmiley = ({ isVisible = false }) => {
  const opacity = isVisible ? 100 : 0;
  return (
    <div
      className={`flex items-center justify-center border-4 border-red-500 rounded-full w-16 h-16  opacity-${opacity}`}
    >
      <PiSmileySadBold className='text-gray-400 w-8 h-8' />
    </div>
  );
};

export default RedSmiley;
