import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    gender: '',
    startTime: '',
    endTime: '',
    jobPosition: '',
    selectTeam: '',
    designation: '',
    billableHours: '',
    isBillable: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.firstName) formErrors.firstName = 'First Name is required';
    if (!formData.lastName) formErrors.lastName = 'Last Name is required';
    if (!formData.birthDate) formErrors.birthDate = 'Date is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.phoneNumber) formErrors.phoneNumber = 'Phone Number is required';
    if (!formData.gender) formErrors.gender = 'Gender is required';
    if (!formData.startTime) formErrors.startTime = 'Start Time is required';
    if (!formData.endTime) formErrors.endTime = 'End Time is required';
    if (!formData.jobPosition) formErrors.jobPosition = 'Job Position is required';
    if (!formData.selectTeam) formErrors.selectTeam = 'Select Team is required';
    if (!formData.designation) formErrors.designation = 'Designation is required';
    if (!formData.billableHours || formData.billableHours <= 0) formErrors.billableHours = 'Billable Hours is required and must be a positive number';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Process form submission
      console.log('Form Submitted', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Form</h2>
      <div className="form-row">
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>
        <div className="form-group">
          <label>Middle Name:</label>
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label>Birth Date:</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
          {errors.birthDate && <span className="error">{errors.birthDate}</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label>Select Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Choose Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div className="form-group">
          <label>Start Time:</label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
          />
          {errors.startTime && <span className="error">{errors.startTime}</span>}
        </div>
        <div className="form-group">
          <label>End Time:</label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
          />
          {errors.endTime && <span className="error">{errors.endTime}</span>}
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label>Job Position:</label>
          <input
            type="text"
            name="jobPosition"
            value={formData.jobPosition}
            onChange={handleChange}
          />
          {errors.jobPosition && <span className="error">{errors.jobPosition}</span>}
        </div>
        <div className="form-group">
          <label>Select Teams:</label>
          <select name="selectTeam" value={formData.selectTeam} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="team1">Team 1</option>
            <option value="team2">Team 2</option>
            <option value="team3">Team 3</option>
          </select>
          {errors.selectTeam && <span className="error">{errors.selectTeam}</span>}
        </div>
        <div className="form-group">
          <label>Select Designation:</label>
          <select name="designation" value={formData.designation} onChange={handleChange}>
            <option value="">Select...</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
            <option value="lead">Lead</option>
          </select>
          {errors.designation && <span className="error">{errors.designation}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Billable Hours:</label>
          <input
            type="number"
            name="billableHours"
            value={formData.billableHours}
            onChange={handleChange}
          />
          {errors.billableHours && <span className="error">{errors.billableHours}</span>}
        </div>
        <div className="form-group">
          <label>Is Billable?</label>
          <input
            type="checkbox"
            name="isBillable"
            checked={formData.isBillable}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
