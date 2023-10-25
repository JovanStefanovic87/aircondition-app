import GreenSmiley from '../icons/emojis/GreenSmiley';
import OrangeSmiley from '../icons/emojis/OrangeSmiley';
import RedSmiley from '../icons/emojis/RedSmiley';
import YellowSmiley from '../icons/emojis/YellowSmiley';

const EmojisContainer = ({
  description = 'N/A',
  green = false,
  yellow = false,
  orange = false,
  red = false,
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='flex flex-wrap w-3/4 '>{description}</p>
      <div className='flex gap-2'>
        <GreenSmiley isVisible={green} />
        <YellowSmiley isVisible={yellow} />
        <OrangeSmiley isVisible={orange} />
        <RedSmiley isVisible={red} />
      </div>
    </div>
  );
};

export default EmojisContainer;
