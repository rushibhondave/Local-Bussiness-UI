import React, { useState } from 'react';
import './PopUpcss'; // Import the CSS file for styling

const PopupForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "Not Provided",
    phoneNumber: "Not Provided",
    address: "Not Provided",
    city: "Not Provided",
    state: "Not Provided",
    zipCode: "00000",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="popup-close" onClick={onClose}>×</button>
        <h2>Edit Details</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Family Name:
            <input type="text" name="familyName" value={formData.familyName} onChange={handleChange} />
          </label>
          <label>
            Given Name:
            <input type="text" name="givenName" value={formData.givenName} onChange={handleChange} />
          </label>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Nickname:
            <input type="text" name="nickname" value={formData.nickname} onChange={handleChange} />
          </label>
          <label>
            Picture URL:
            <input type="url" name="picture" value={formData.picture} onChange={handleChange} />
          </label>
          <label>
            Phone Number:
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          <label>
            City:
            <input type="text" name="city" value={formData.city} onChange={handleChange} />
          </label>
          <label>
            State:
            <input type="text" name="state" value={formData.state} onChange={handleChange} />
          </label>
          <label>
            Zip Code:
            <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
          </label>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
