import { useState } from 'react';
import '../styles/Components.css';

function Education({ data, onUpdate, isSubmitted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ school: '', degree: '', year: '' });
 
  function handleEdit() {
    isEditing(true);
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

        <button className = "add-btn" onClick={handleAdd}>Add Education</button>

        <button className = "save-btn" onClick={() => setIsEditing(false)}>Done</button>
        
        

          {/* TODO: Display existing entries with delete buttons */}
          {/* Loop through data array using .map() */}
          {/* For each entry, show: */}
          {/*   - entry.school, entry.degree, entry.year */}
          {/*   - Delete button that calls handleDelete(entry.id) */}
          {/* IMPORTANT: Use () => handleDelete(entry.id) NOT handleDelete(entry.id) */}
          {/* Hint: data.map(entry => ( <div key={entry.id}>...</div> )) */}
        </div>
      ) : (
        <div className="display-content">
          {/* TODO: Check if data array is empty */}
          {/* If data.length === 0: show "No education added yet" */}
          {/* Else: loop through data and display each entry */}
          
          {/* TODO: Edit button (same as GeneralInfo) */}
        </div>
      )}
    </div>
  );
}

export default Education;