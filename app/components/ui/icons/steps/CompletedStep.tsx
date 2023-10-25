import { StepTitleType } from '@/app/helpers/interfaces';
import StepTitleInactive from '../../text/StepTitleInactive';
import CheckedIcon from '../svg/Checked';

const CompletedStep: React.FC<StepTitleType> = ({ index, process }) => {
  return (
    <div className='flex gap-2 items-center opacity-40'>
      <div className='flex items-center justify-center relative w-16 h-16 rounded-full border-2 border-blueLight'>
        <CheckedIcon position='absolute' />
        <div className='flex items-center justify-center text-blueLight text-2xl'>{index}</div>
      </div>
      <StepTitleInactive index={index} process={process} />
    </div>
  );
};

export default CompletedStep;
