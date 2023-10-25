import CheckedIcon from '../icons/svg/Checked';
import DangerIcon from '../icons/svg/DangerIcon';

const ColumnHead = ({ title = '', isComplited = false }) => {
  return (
    <div className='flex justify-between bg-blueLight text-white tracking-widest rounded-t-md p-2 w-full'>
      <div className='flex items-center gap-2'>
        <div className='w-5 h-5 border border-1 border-solid border-white flex items-center justify-center rounded-sm'>
          {title[0].toUpperCase()}
        </div>

        <p>{title.toUpperCase()}</p>
      </div>

      {isComplited ? <CheckedIcon /> : <DangerIcon />}
    </div>
  );
};

export default ColumnHead;
