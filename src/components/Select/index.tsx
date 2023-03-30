import React from 'react';

type SelectProps = {
  options: string[];
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select: React.FC<SelectProps> = (props) => {
  return (
    <select value={props.value} onChange={props.handleChange}>
      {props.options.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Select;
