import { PiSmileyBold } from 'react-icons/pi';

const GreenSmiley = ({ isVisible = false }) => {
  const opacity = isVisible ? 'opacity-100' : 'opacity-0';
  return (
    <div
      className={`flex items-center justify-center border-4 border-greenLight bg-greenLight rounded-full w-16 h-16 ${opacity}`}
    >
      <PiSmileyBold className='text-white w-8 h-8' />
    </div>
  );
};

export default GreenSmiley;
