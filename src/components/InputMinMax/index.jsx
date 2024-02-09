import React, { useState } from 'react';
import "./module.css";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function InputMinMax(props) {
  const { label, title, min, max, onChangeMin, onChangeMax, designation, loading } = props;
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <div>
        <div className="label">
          <h5 style={{ color: '#0d4f78'}}>
            {label}
          </h5>
        </div>
        <div className="inputs">
          <Form.Group controlId="minInput" className="input">
            <Form.Control
              type="number"
              value={min}
              onChange={onChangeMin}
              placeholder="Minimum"
              style=
              {{ 
                borderRadius: '3px', 
                width: '15vh'
              }}
            />
          </Form.Group>
          <Form.Group controlId="maxInput" className="input">
            <Form.Control
              type="number"
              value={max}
              onChange={onChangeMax}
              placeholder="Maximum"
              style={{ borderRadius: '3px', width: '15vh' }}
            />
          </Form.Group>
          <br />
        </div>
      </div>
    </div>
  );
}
