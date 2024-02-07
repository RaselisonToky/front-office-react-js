import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./module.css";

export default function SelectSearch(props) {
  const { label, options, onChange, selectedValue, loading } = props;

  const handleChange = (event) => {
    const selectedOption = options.find(option => option.value === event.target.value);
    onChange(selectedOption);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Option:", selectedValue);
  };

  return (
    <div className="minmax">
      <h5 style={{ color: '#0d4f78' }}>
        {label}
      </h5>
      <Form onSubmit={onSubmit} className="form">
        <div className="input-container">
          <Form.Select
            value={selectedValue ? selectedValue.value : ''}
            aria-label={label}
            onChange={handleChange}
            style={{
              borderRadius: '3px',
              width: '220px'
            }}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
          <Button
            type="submit"
            style={{
              backgroundColor: 'white',
              color: '#0d4f78',
              border: 'solid 1px #0d4f78',
              marginLeft: 10,
              borderRadius: '3px'
            }}
            disabled={loading}>
            OK
          </Button>
        </div>
      </Form>
    </div>
  );
}
