import React, { ReactNode } from 'react';

type ChildrenProps = {
  children: ReactNode;
};

const FlexColContainer: React.FC<ChildrenProps> = ({ children }) => {
  return <div className='flex flex-col'>{children}</div>;
};

export default FlexColContainer;
