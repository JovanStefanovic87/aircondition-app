import { ClickEventHandler } from '@/app/helpers/interfaces';
import { FaCamera } from 'react-icons/fa';

const CameraButton: React.FC<ClickEventHandler> = ({ onClick }) => {
  return (
    <button className='flex h-min p-2 rounded-md bg-gray-800 text-black' onClick={onClick}>
      <FaCamera className='text-gray-300' />
    </button>
  );
};

export default CameraButton;
