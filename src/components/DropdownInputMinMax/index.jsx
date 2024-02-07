import React, { useState } from 'react';
import "./module.css";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function DropdownInputMinMax(props) {
  const { label, title, min, max, onChangeMin, onChangeMax, designation, loading } = props;
  const [showDropdown, setShowDropdown] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Min:", min);
    console.log("Max:", max);
  };

  return (
    <div>
      <a
        href="#"
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
          <Form onSubmit={onSubmit} className="form" style={{ marginTop: '10px' }}>
            <div className="input-container">
              <Form.Group controlId="minInput" className="input">
                <Form.Control
                  type="number"
                  value={min}
                  onChange={onChangeMin}
                  placeholder="Minimum"
                  style={{ borderRadius: '3px', width: '100px' }}
                />
              </Form.Group>
              <span> - </span>
              <Form.Group controlId="maxInput" className="input">
                <Form.Control
                  type="number"
                  value={max}
                  onChange={onChangeMax}
                  placeholder="Maximum"
                  style={{ borderRadius: '3px', width: '100px' }}
                />
              </Form.Group>
              <Button
                type="submit"
                style={{
                  backgroundColor: '#e87524',
                  color: 'white',
                  border: 'none',
                  marginLeft: '2px',
                  borderRadius: '3px'
                }}
                disabled={loading}>
                {designation}
              </Button>
              <br />
            </div>
          </Form>
        </div>
      )}
    </div>
  );
}
