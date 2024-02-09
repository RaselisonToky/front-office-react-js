import React, { useState } from 'react';
import "./module.css";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function MyInput(props) {
  const { label, value, onChange, placeholder, type } = props;
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <div>
        <div className="label">
          <h5 style={{ color: '#0d4f78' }}>
            {label}
          </h5>
        </div>
        <div className="inputs">
          <Form.Group controlId="minInput" className="input">
            <Form.Control
              type={type}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              style=
              {{
                borderRadius: '3px',
                width: '20vh'
              }}
            />
          </Form.Group>
          <br />
        </div>
      </div>
    </div>
  );
}
