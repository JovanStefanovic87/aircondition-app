import { FaImage } from 'react-icons/fa';

interface ClickEventHandlerProps {
  onClick: (event: React.FormEvent) => void;
}

const ImageButton: React.FC<ClickEventHandlerProps> = ({ onClick }) => {
  return (
    <button className='flex h-min p-2 rounded-md bg-gray-800 text-black' onClick={onClick}>
      <FaImage className='text-gray-300' />
    </button>
  );
};

export default ImageButton;
