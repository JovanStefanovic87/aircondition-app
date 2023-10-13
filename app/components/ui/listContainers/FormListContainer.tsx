import { FormListContainerProps } from '@/app/helpers/interfaces';

const FormListContainer: React.FC<FormListContainerProps> = ({
  children,
  list,
  selectedName,
  onClick,
}) => {
  return (
    <li
      key={list.id}
      className={`border-2 p-2 rounded-md cursor-pointer ${
        selectedName === list.name ? 'bg-blue-100' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default FormListContainer;
