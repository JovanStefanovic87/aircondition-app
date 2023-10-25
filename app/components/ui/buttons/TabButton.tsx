const TabButton = ({ value = '', isActive = false }) => {
  const textColor = isActive ? 'text-black' : 'text-blueLight';
  const border = isActive
    ? 'border-b-outset border-grayLight border-b-white bg-white'
    : 'border-transparent hover:bg-gray-200 transition-colors duration-300';
  return (
    <div className={`p-2 border-2 border-solid -mb-0.5 z-3 cursor-pointer ${textColor} ${border}`}>
      {value.toUpperCase()}
    </div>
  );
};

export default TabButton;
