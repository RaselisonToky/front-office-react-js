import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./module.css";

export default function MySelect(props) {
  const { label, options, onChange, selectedValue, loading } = props;

  const handleChange = (event) => {
    const selectedOption = options.find(option => option.value === event.target.value);
    onChange(selectedOption);
  };
  return (
    <div className="minmax">
      <h5 style={{ color: '#0d4f78' }}>
        {label}
      </h5>
        <div className="input-container">
          <Form.Select
            value={selectedValue ? selectedValue.value : ''}
            aria-label={label}
            onChange={handleChange}
            style={{
              borderRadius: '3px',
              width: '25vh'
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        </div>
    </div>
  );
}
