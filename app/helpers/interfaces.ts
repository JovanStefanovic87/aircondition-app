import React, { ReactNode, ChangeEvent } from 'react';

export type ChildrenProps = {
  children: ReactNode;
};

export interface ClickEventHandler {
  /** Is included in device assembly  */
  onClick: (event: React.FormEvent) => void;
}

export interface BackdropProps extends ClickEventHandler {
  isVisible: boolean;
}

export interface PrimaryButtonProps extends ClickEventHandler {
  value?: string;
  isDisabled?: boolean;
}

export interface StepTitleType {
  /** Step number */
  index: number;
  /** Step name */
  process: string;
}

export interface ColumnWrapperType {
  title: string;
  /** Is step verified */
  children: React.ReactNode;
  isComplited?: boolean;
}

export interface FormState {
  [key: string]: any;
}

export interface FormErrors {
  [key: string]: string | null;
}

type ValidationFunction = (value: any, fieldName: string) => string | null;

export interface UseFormProps {
  initialFormState: FormState;
  validationFunction: ValidationFunction;
}

export interface InputWithLabelProps {
  id: string;
  name: string;
  value: string | number;
  placeholder?: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
  touched: boolean;
  submitted: boolean;
}

export interface FormField {
  name: string;
  value: string | number;
  label: string;
  required: boolean;
}

export interface UniversalFormProps {
  fields: FormField[];
  /** Input fileds */
  onSubmit: (data: any) => void;
  submitButtonText: string;
}
