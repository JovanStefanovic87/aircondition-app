import StepTitle from '../../text/StepTitleActive';
import DangerIcon from '../svg/DangerIcon';

interface StepTitleType {
  /** Step number */
  index: number;
  /** Step name */
  process: string;
}

const ActiveStep: React.FC<StepTitleType> = ({ index, process }) => {
  return (
    <div className='flex gap-2 items-center'>
      <div className='flex items-center justify-center relative w-16 h-16 rounded-full border-2 border-blueLight bg-blueLight'>
        <DangerIcon position='absolute' />
        <div className='flex items-center justify-center text-white text-2xl'>{index}</div>
      </div>
      <StepTitle index={index} process={process} />
    </div>
  );
};

export default ActiveStep;
