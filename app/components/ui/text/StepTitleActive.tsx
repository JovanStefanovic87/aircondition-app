interface StepTitleType {
  /** Step number */
  index: number;
  /** Step name */
  process: string;
}

const StepTitleActive: React.FC<StepTitleType> = ({ index, process }) => {
  return (
    <div className='flex flex-col'>
      <p className='text-blueLight text-xs font-semibold tracking-widest'>{`Schritt ${index}`}</p>
      <p className='text-sm text-gray-500 opacity-50'>{process}</p>
    </div>
  );
};

export default StepTitleActive;
