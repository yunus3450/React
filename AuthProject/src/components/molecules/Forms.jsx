import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';  // Atom olarak tanımlandı

const Form = ({ fields, onSubmit, buttonText }) => {
  return (
    <form onSubmit={onSubmit}>
      {Object.keys(fields).map((fieldKey) => {
        const { label, type, value, onChange, placeholder } = fields[fieldKey];
        return (
          <div key={fieldKey} className="mb-3">
            <label htmlFor={fieldKey} className="form-label">
              {label}
            </label>
            <Input
              id={fieldKey}
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
          </div>
        );
      })}
      <Button type="submit">{buttonText}</Button>
    </form>
  );
};

export default Form;
