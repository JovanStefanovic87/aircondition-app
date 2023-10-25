import { FaPlus } from 'react-icons/fa';

const ZoneButton = ({ value = 'Nächster Schritt' }) => {
  return (
    <div className='flex items-center gap-2 px-2 py-1 text-white bg-blueLight hover:bg-blueDark transition-colors duration-300 cursor-pointer rounded-md h-12'>
      <div className='bg-white rounded-full w-4 h-4 flex items-center justify-center'>
        <FaPlus className='text-blueLight w-3 h-3' />
      </div>
      {value}
    </div>
  );
};

export default ZoneButton;
