import React from 'react';
import { InputWithLabelProps } from '@/app/helpers/interfaces';

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  id,
  name,
  value,
  placeholder,
  label,
  onChange,
  error,
  touched,
  submitted,
}) => (
  <div className='relative mb-4'>
    <label htmlFor={id} className='block text-gray-700 text-sm font-bold mb-2'>
      {label}
    </label>
    <input
      type='text'
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 py-2 rounded-md border ${
        touched || submitted ? (error ? 'border-red-500' : 'border-green-500') : 'border-gray-300'
      } focus:outline-none focus:ring-1 focus:border-blueLight`}
    />
    {touched || submitted ? (
      <div className='absolute mt-1 text-xs'>
        {error ? <p className='text-red-500'>{error}</p> : <p className='text-green-500'>Valid</p>}
      </div>
    ) : null}
  </div>
);

export default InputWithLabel;
