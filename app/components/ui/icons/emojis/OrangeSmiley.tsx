import { PiSmileyMehBold } from 'react-icons/pi';

const OrangeSmiley = ({ isVisible = false }) => {
  const opacity = isVisible ? 'opacity-100' : 'opacity-0';
  return (
    <div
      className={`flex items-center justify-center border-4 border-orange-400 rounded-full w-16 h-16 ${opacity}`}
    >
      <PiSmileyMehBold className={`text-gray-400 w-8 h-8 ${opacity}`} />
    </div>
  );
};

export default OrangeSmiley;
