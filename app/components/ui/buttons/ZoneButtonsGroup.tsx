import ZoneButton from './ZoneButton';

const ZoneButtonsGroup = () => {
  return (
    <div className='flex gap-1px rounded-md overflow-hidden bg-blueDark'>
      <ZoneButton value='Zonen davor' />
      <ZoneButton value='Anlage' />
      <ZoneButton value='Zonen donach' />
    </div>
  );
};

export default ZoneButtonsGroup;
