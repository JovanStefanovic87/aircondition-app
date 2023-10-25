import CameraButton from './CameraButton';
import ImageButton from './ImagesButton';

const AttachmentButtonGroup = () => {
  return (
    <div className='flex gap-4 items-center mb-2'>
      <p>ANLAGE</p>
      <ImageButton onClick={() => {}} />
      <CameraButton onClick={() => {}} />
    </div>
  );
};

export default AttachmentButtonGroup;
