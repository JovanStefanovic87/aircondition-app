import { AbsenceHoursLabelProps } from '../../../helpers/interfaces';

const AbsenceHoursLabel: React.FC<AbsenceHoursLabelProps> = ({ time, absence }) => {
  const colorMap: Record<string, string> = {
    'Godišnji odmor': 'bg-sky-950',
    Bolovanje: 'bg-red-950',
    Praznik: 'bg-purple-950',
    Zatvoreno: 'bg-black',
  };

  const absenceType = absence === 'Nema odsustva' ? 'Zatvoreno' : absence;

  return (
    <div
      className={`flex flex-col justify-center h-appointmentSlot  min-w-slotsWidth max-w-slotsWidth text-center  font-bold ${colorMap[absenceType]} text-white-700 cursor-not-allowed rounded-lg select-none`}
    >
      <span className='text-xl font-bold'>{time}</span>
      {absenceType}
    </div>
  );
};

export default AbsenceHoursLabel;
