import React, { ReactNode } from 'react';

type ChildrenProps = {
  children: ReactNode;
};

const GraphElementWrapper: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className='flex flex-col justify-end gap-2 p-2 border-solid border-bgray border-2 w-28 h-28 relative'>
      {children}
    </div>
  );
};

export default GraphElementWrapper;
