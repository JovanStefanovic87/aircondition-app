import { ChildrenProps } from '@/app/helpers/interfaces';

const FlexRowContainer: React.FC<ChildrenProps> = ({ children }) => {
  return <div className='flex'>{children}</div>;
};

export default FlexRowContainer;
