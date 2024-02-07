import React from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Sort(props) {
  const { onChange, selectedValue, loading } = props;

  const handleChange = (event) => {
    const selectedOption = options.find(option => option.value === event.target.value);
    onChange(selectedOption);
  };

  const options = [
    { value: 'option1', label: 'Annonces les plus recentes' },
    { value: 'option2', label: 'Modeles A-Z' },
    { value: 'option3', label: 'Modeles Z-A' },
    { value: 'option4', label: 'Prix le plus eleve' },
    { value: 'option4', label: 'Prix le plus bas' },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Option:", selectedValue);
  };

  return (
    <div className="minmax">
      <Form onSubmit={onSubmit} className="form">
        <div className="input-container">
          <span>Trier par </span>
          <Form.Select
            value={selectedValue ? selectedValue.value : ''}
            aria-label={"label"}
            onChange={handleChange}
            style={{ borderRadius: '3px', width: '250px' }}
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