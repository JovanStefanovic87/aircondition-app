import { GoSmiley } from 'react-icons/go';

const YellowSmiley = ({ isVisible = false }) => {
  const opacity = isVisible ? 'opacity-100' : 'opacity-0';
  return (
    <div
      className={`flex items-center justify-center border-4 border-yellow-400 rounded-full w-16 h-16 ${opacity}`}
    >
      <GoSmiley className='text-gray-400 w-8 h-8' />
    </div>
  );
};

export default YellowSmiley;
