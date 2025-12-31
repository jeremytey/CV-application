import { useState } from 'react';
import '../styles/Components.css';

function Education({ data, onUpdate, isSubmitted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ school: '', degree: '', year: '' });
 
  function handleEdit() {
    isEditing(true);
    setFormData({ school: data.school, 
                  degree: data.degree,
                  year: data.year
                });
  }

  function handleAdd() {
    const newEntry = {
      id: Date.now(),  // Unique ID
      school: formData.school,
      degree: formData.degree,
      year: formData.year
    };

    const updatedData = { ...formData, [field]: value };
    onUpdate(updatedData);
    setFormData({ school: '', degree: '', year: '' });
  }

  function handleDelete(id) {
  const filteredData = data.filter(entry => entry.id !== id);
    onUpdate(filteredData);
  }

  function handleInputChange(field, value) {
  const updatedData = { ...formData, [field]: value };
  setFormData(updatedData);
  }

  return (
    <div className="section">
      <h2>Education</h2>
      {isEditing ? (
        <div>
          <input 
          type = "text" 
          placeholder = "School Name"
          value = {formData.school}
          onChange = {(e) => handleInputChange('school', e.target.value)}
          />
          <input
          type = "text"
          placeholder = "Degree"
          value = {formData.degree}
          onChange = {(e) => handleInputChange('degree', e.target.value)}
          />
          <input
          type = "number"
          placeholder = "Graduation Year"
          value = {formData.year}
          onChange = {(e) => handleInputChange('year', e.target.value)}
          />
          
        <button className = "save-btn" onClick={() => setIsEditing(false)}>Done</button>
        <button className = "add-btn" onClick={handleAdd}>Add</button>
        </div>
      ) : (
        <div className="display-content">
          if (data.length === 0) {
            <>
            <p>No education added yet</p>
            <button className = "add-btn" onClick={handleEdit}>Add Education</button>
            </>

          } else {
            data.map(entry => (
              <div key={entry.id}>
                <p>School: {entry.school}</p>
                <p>Degree: {entry.degree}</p>
                <p>Year: {entry.year}</p>
                <button className="delete-btn" onClick={() => handleDelete(entry.id)}>Delete</button>
                <button className="edit-btn" onClick={handleEdit}>Edit</button>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
}

export default Education;