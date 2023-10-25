import { ClickEventHandler } from '@/app/helpers/interfaces';
import { FaImage } from 'react-icons/fa';

const ImageButton: React.FC<ClickEventHandler> = ({ onClick }) => {
  return (
    <button className='flex h-min p-2 rounded-md bg-gray-800 text-black' onClick={onClick}>
      <FaImage className='text-gray-300' />
    </button>
  );
};

export default ImageButton;
