import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Sort(props) {
  const { onChange, selectedValue, loading } = props;
  const [currentOption, setCurrentOption] = useState({ value: '/recent', label: 'Annonces les plus recentes' });

  const handleChange = (event) => {
    const selectedOption = options.find(option => option.value === event.target.value);
    setCurrentOption(selectedOption);
    onChange(selectedOption);
  };

  const options = [
    { value: '/recent', label: 'Annonces les plus recentes' },
    { value: '/brandASC', label: 'Marques A-Z' },
    { value: '/brandDESC', label: 'Marques Z-A' },
    { value: '/PriceDESC', label: 'Prix le plus eleve' },
    { value: '/PriceASC', label: 'Prix le plus bas' },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Option:", selectedValue);
  };

  useEffect(() => {
    setCurrentOption(selectedValue || { value: '/recent', label: 'Annonces les plus recentes' });
  }, [selectedValue]);

  return (
    <div className="minmax">
      <Form onSubmit={onSubmit} className="form">
        <div className="input-container">
          <span>Trier par </span>
          <Form.Select
            value={selectedValue ? selectedValue.value : currentOption.value}
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
        </div>
      </Form>
    </div>
  );
}
