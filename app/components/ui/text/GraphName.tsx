const GraphName = ({ imageName = '' }) => {
  return (
    <p className='text-center text-xs overflow-hidden whitespace-nowrap overflow-ellipsis'>
      {imageName}
    </p>
  );
};

export default GraphName;
