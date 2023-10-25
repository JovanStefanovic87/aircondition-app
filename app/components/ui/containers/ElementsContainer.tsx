import { ChildrenProps } from '@/app/helpers/interfaces';

const ElementsContainer: React.FC<ChildrenProps> = ({ children }) => {
  return <div className='flex gap-2 p-2 border-2 border-solid border-grayLight'>{children}</div>;
};

export default ElementsContainer;
