import { useState, useEffect } from 'react';
import { FormState, FormErrors, UseFormProps } from './interfaces';

export function useDeviceDetect() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const userAgent = typeof window !== 'undefined' ? window.navigator.userAgent : '';
    const mobile = Boolean(
      userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i),
    );
    setMobile(mobile);
  }, []);

  return { isMobile };
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

    // Mark the field as touched when there is an input change
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
