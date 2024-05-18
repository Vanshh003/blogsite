import React, { forwardRef,useId } from 'react';

const Select = forwardRef(function Select(
  { options, className = "", label, ...props }, 
  ref
) {
  const id = useId();
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''>{label}</label>}
      <select {...props} id={id} ref={ref} className={`px-3 py-2 rounded-lg bg-gray-400 text-white 
        outline-none focus:bg-gray-400 duration-200 border border-gray-200 w-full ${className}`}>
        {options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;
