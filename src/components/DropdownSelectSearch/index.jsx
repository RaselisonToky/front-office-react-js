import React, { useState } from 'react';
import "./module.css";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function DropdownSelectSearch(props) {
  const { label, options, onChange, selectedValue, loading } = props;

  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (event) => {
    const selectedOption = options.find(option => option.value === event.target.value);
    onChange(selectedOption);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Option:", selectedValue);
  };

  return (
    <div>
      <a
        href="/"
        onClick={(e) => { e.preventDefault(); setShowDropdown(!showDropdown); }}
      >
        <button
          style={{
            width:'90%',
            border:'solid 1px #0d4f78',
            backgroundColor:'transparent',
            borderRadius:'3px',
            height:'35px',
            color:'#0d4f78',

          }}
        >{label}</button>
      </a>
      {showDropdown && (
        <div className="dropdown-content" style={{ paddingLeft: '10px' }}> {/* Ajout de la classe dropdown-content */}
          <Form onSubmit={onSubmit} className="form">
            <div className="select" style={{marginTop:'3%'}}>
              <br />
              <Form.Select
                value={selectedValue ? selectedValue.value : ''}
                aria-label={label}
                onChange={handleChange}
                style={{
                  borderRadius: '3px',
                  width: '225px',
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
                  backgroundColor: '#e87524',
                  color: 'white',
                  border: 'none',
                  marginLeft: '10px',
                  borderRadius: '3px'
                }}
                disabled={loading}>
                OK
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
}
