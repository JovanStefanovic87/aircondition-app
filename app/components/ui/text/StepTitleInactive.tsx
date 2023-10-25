import { StepTitleType } from '@/app/helpers/interfaces';

const StepTitleInactive: React.FC<StepTitleType> = ({ index, process }) => {
  return (
    <div className='flex flex-col'>
      <p className='text-xs font-semibold tracking-widest'>{`Schritt ${index}`}</p>
      <p className='text-sm text-gray-500'>{process}</p>
    </div>
  );
};

export default StepTitleInactive;