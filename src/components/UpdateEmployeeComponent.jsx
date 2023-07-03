import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const UpdateEmployeeComponent = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const navigate = useNavigate();

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else if (name === 'lastName') {
      setLastName(value);
    } else if (name === 'emailId') {
      setEmailId(value);
    }
  };

  const handleCancel = () => {
    navigate('/employees');
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Xử lý đăng ký ở đây
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email ID:', emailId);

    let employee = {
      fristName: firstName,
      lastname: lastName,
      emailId: emailId,
    };

    // Gọi hàm xử lý cập nhật nhân viên ở đây
  };

  return (
    <div className="container-sm" style={{ maxWidth: '600px' }}>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee First Name:</label>
          <input
            type="text"
            className="form-control border border-2"
            name="firstName"
            value={firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Employee Last Name:</label>
          <input
            type="text"
            className="form-control border border-2"
            name="lastName"
            value={lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Employee Email ID:</label>
          <input
            type="email"
            className="form-control border border-2"
            name="emailId"
            value={emailId}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginRight: '10px', width: '80px' }}>
          Save
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="btn btn-secondary"
          style={{ marginRight: '10px', width: '80px' }}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateEmployeeComponent;
