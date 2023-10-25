import { ColumnWrapperType } from '@/app/helpers/interfaces';
import ColumnHead from './ColumnHead';

const ColumnWrapper: React.FC<ColumnWrapperType> = ({ title, children, isComplited = false }) => {
  return (
    <div className='flex flex-col justify-center gap-4 shadow-sm shadow-gray-400 rounded-md pb-4 min-w-column'>
      <div className='flex flex-col h-full gap-4'>
        <ColumnHead title={title} isComplited={isComplited} />
      </div>
      <div className='flex flex-col gap-8 px-2'>{children}</div>
    </div>
  );
};

export default ColumnWrapper;
