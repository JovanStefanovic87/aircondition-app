import { FormContainerProps } from '@/app/helpers/interfaces';
import Backdrop from '../Backdrop';

const FormContainer: React.FC<FormContainerProps> = ({
  displayForm,
  id,
  handleFormClose,
  children,
}) => {
  return (
    <form className='fixed mx-auto z-20' style={{ display: displayForm ? 'flex' : 'none' }} id={id}>
      <div className='flex flex-col items-center fixed  w-98dvw lg:w-form lg:max-w-form h-main left-0 md:left-1/2 md:-translate-x-1/2 mx-2 bg-white overflow-y-auto z-30'>
        {children}
      </div>
      <Backdrop onClick={(event) => handleFormClose(event)} isVisible={displayForm} />
    </form>
  );
};

export default FormContainer;
