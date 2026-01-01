import { useState } from 'react';
import '../styles/Components.css';

// contains 2 modes: display and edit 
function GeneralInfo({ data, onUpdate, isSubmitted }) {
  const [isEditing, setIsEditing] = useState(false); // edit mode flag
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' }); // form data state

  function handleEdit() {
    setIsEditing(true);
    setFormData({ name: data.name, 
                  email: data.email, 
                  phone: data.phone 
                });
  }

  function handleSave() {
    onUpdate(formData);
    setIsEditing(false);
  }

  function handleInputChange(field, value) {
    const updatedData = { ...formData, [field]: value };
    setFormData(updatedData);
  }

  return (
    <div className="section">
      <h2>General Information</h2>
      
      {isEditing ? (
        <div>
          <input 
          type = "text" 
          placeholder = "Full Name" 
          value = {formData.name} 
          onChange = {(e) => handleInputChange('name', e.target.value)}
          />
          <input 
          type="email" 
          placeholder="Email" 
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          />
          <input 
          type="tel" 
          placeholder="Phone Number" 
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          />
          <button className = "save-btn" onClick={handleSave}>Save</button>
        </div>
      ) : (
        // display mode
        <div className="display-content">
          <p>Name: {data.name || 'not provided'}</p>
          <p>Email: {data.email || 'not provided'}</p>
          <p>Phone: {data.phone || 'not provided'}</p>
          <button className="edit-btn" onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;