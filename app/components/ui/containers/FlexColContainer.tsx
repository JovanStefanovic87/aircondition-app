import { ChildrenProps } from '@/app/helpers/interfaces';

const FlexColContainer: React.FC<ChildrenProps> = ({ children }) => {
  return <div className='flex flex-col'>{children}</div>;
};

export default FlexColContainer;
