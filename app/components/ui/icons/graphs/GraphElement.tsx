import { FaChevronLeft, FaChevronRight, FaTrash, FaPlus } from 'react-icons/fa';
import ElementWrapper from './GraphElementWrapper';
import Graph from './Graph';
import GraphName from '../../text/GraphName';

const GraphElement = ({ src = '', alt = '', isIncluded = false }) => {
  const isTrashVisible = isIncluded;
  const isPlusVisible = !isIncluded;

  return (
    <ElementWrapper>
      <div className='flex justify-between items-center'>
        <FaChevronLeft className='text-blue-600' />
        <Graph src={src} alt={alt} />
        <FaChevronRight className='text-blue-600' />
      </div>
      <GraphName imageName={alt} />
      <div className='absolute top-1 right-1'>
        {isTrashVisible && (
          <div className='bg-red-500 rounded-full w-6 h-6 flex items-center justify-center'>
            <FaTrash className='text-white w-2 h-4' />
          </div>
        )}
        {isPlusVisible && (
          <div className='border-solid border-4 border-blueLight rounded-full w-6 h-6 flex items-center justify-center'>
            <FaPlus className='text-blueLight w-3 h-5' />
          </div>
        )}
      </div>
    </ElementWrapper>
  );
};

export default GraphElement;
