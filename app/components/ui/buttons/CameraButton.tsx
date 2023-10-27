import { FaCamera } from 'react-icons/fa';

interface ClickEventHandlerProps {
  onClick: (event: React.FormEvent) => void;
}

const CameraButton: React.FC<ClickEventHandlerProps> = ({ onClick }) => {
  return (
    <button className='flex h-min p-2 rounded-md bg-gray-800 text-black' onClick={onClick}>
      <FaCamera className='text-gray-300' />
    </button>
  );
};

export default CameraButton;
