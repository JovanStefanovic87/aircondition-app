import { useState } from 'react';
import InputWithLabel from '../input/InputWithLabel';
import SubmitButton from '../buttons/SubmitButton';

interface FormField {
  name: string;
  value: string | number;
  label: string;
  required: boolean;
}

interface UniversalFormProps {
  fields: FormField[];
  /** Input fileds */
  onSubmit: (data: any) => void;
  submitButtonText: string;
}

interface FormState {
  [key: string]: any;
}

interface FormErrors {
  [key: string]: string | null;
}
type ValidationFunction = (value: any, fieldName: string) => string | null;

interface UseFormProps {
  initialFormState: FormState;
  validationFunction: ValidationFunction;
}

export const useForm = ({ initialFormState, validationFunction }: UseFormProps) => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [formErrors, setFormErrors] = useState<FormErrors>(() => {
    const initialErrors: FormErrors = {};
    for (const key in initialFormState) {
      initialErrors[key] = validationFunction(initialFormState[key], key);
    }
    return initialErrors;
  });
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    const validation = validationFunction(value, name);

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validation,
    }));

    setTouchedFields((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const resetForm = () => {
    setFormState(initialFormState);
    setFormErrors({});
    setTouchedFields({});
  };

  return {
    formState,
    formErrors,
    handleInputChange,
    resetForm,
    touchedFields,
  };
};

const UniversalForm: React.FC<UniversalFormProps> = ({ fields, onSubmit, submitButtonText }) => {
  const fieldLabels: { [key: string]: string } = {};

  const initialFormState = fields.reduce(
    (acc, field) => {
      acc[field.name] = field.value;
      return acc;
    },
    {} as Record<string, string | number>,
  );

  fields.forEach((field) => {
    fieldLabels[field.name] = field.label;
  });

  const { formState, formErrors, handleInputChange, touchedFields } = useForm({
    initialFormState: initialFormState,
    validationFunction: (value, fieldName) => {
      const field = fields.find((f) => f.name === fieldName);
      if (field && field.required && !value) {
        return `${fieldLabels[field.name]} is required.`;
      }
      return ''; // No error for other fields
    },
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);

    const hasErrors = fields.some((field) => {
      return field.required && !formState[field.name] && formErrors[field.name];
    });

    if (!hasErrors) {
      onSubmit(formState);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex items-center gap-4'>
          {fields.map((field) => (
            <InputWithLabel
              key={field.name}
              id={field.name}
              name={field.name}
              value={formState[field.name]}
              label={field.label}
              onChange={handleInputChange}
              error={formErrors[field.name]}
              touched={touchedFields[field.name]}
              submitted={submitted}
            />
          ))}
        </div>
        <SubmitButton value={submitButtonText} isDisabled={false} />
      </form>
    </div>
  );
};

export default UniversalForm;
