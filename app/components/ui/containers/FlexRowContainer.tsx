import React, { ReactNode } from 'react';

type ChildrenProps = {
  children: ReactNode;
};

const FlexRowContainer: React.FC<ChildrenProps> = ({ children }) => {
  return <div className='flex'>{children}</div>;
};

export default FlexRowContainer;
