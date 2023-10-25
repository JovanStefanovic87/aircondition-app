import React, { useState } from 'react';
import { UniversalFormProps } from '@/app/helpers/interfaces';
import { useForm } from '@/app/helpers/universalFunctions';
import InputWithLabel from '../input/InputWithLabel';
import SubmitButton from '../buttons/SubmitButton';

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
