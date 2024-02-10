import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

export default function SelectSearch(props) {
  const { label, onChange, selectedValue, options } = props;
  const [currentOption, setCurrentOption] = useState(selectedValue);

  const handleChange = (event) => {
    const selectedOption = options.find(option => option.value === event.target.value);
    setCurrentOption(selectedOption);
    onChange(selectedOption);
  };

  useEffect(() => {
    setCurrentOption(selectedValue);
  }, [selectedValue]);

  return (
    <div className="minmax">
      <h5 style={{ color: '#0d4f78' }}>
        {label}
      </h5>
      <Form className="form">
        <div className="input-container">
          <Form.Select
            value={currentOption ? currentOption.value : ''}
            aria-label={label}
            onChange={handleChange}
            style={{ borderRadius: '3px', width: '20vh' }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        </div>
      </Form>
    </div>
  );
}
