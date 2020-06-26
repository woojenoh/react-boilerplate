import React, { useState } from 'react';

type UseInput = [string, JSX.Element]

interface UseInputParams {
  type: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
}

const useInput = ({ type, className, placeholder, required }: UseInputParams): UseInput => {
  const [value, setValue] = useState('');
  const input: JSX.Element = <input
    type={type}
    className={className}
    onChange={e => setValue(e.target.value)} 
    placeholder={placeholder}
    required={required}
  />;

  return [value, input];
};

export default useInput;