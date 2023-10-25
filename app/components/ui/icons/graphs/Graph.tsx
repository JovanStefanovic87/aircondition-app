import Image from 'next/image';

const Graph = ({ src = '', alt = '' }) => {
  return (
    <div className='w-14 h-14 relative'>
      <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
    </div>
  );
};

export default Graph;
