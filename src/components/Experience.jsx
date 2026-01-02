import '../styles/Components.css';
import { useState } from 'react';

function Experience({ data, onUpdate, isSubmitted }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ company: '', position: '', dateFrom: '', dateTo: '' });

  // explain how formData is object and data is array of objects
  // create temporary object from formData and add to data array
  function handleAdd() {
    const newEntry = {
      id: Date.now(),  // Unique ID
      company: formData.company,
      position: formData.position,
      dateFrom: formData.dateFrom,
      dateTo: formData.dateTo,
    };

    const updatedData = [...data, newEntry]; // Add new object entry to existing data array
    onUpdate(updatedData); // Update parent component
    setFormData({ company: '', position: '', dateFrom: '', dateTo:'' }); // Reset form (why need reset?)
  }

  function handleEdit() {
    setIsEditing(true);
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
      <h2>Experience</h2>
      {isEditing ? (
        <div>
          <input 
          type = "text"
          placeholder = "Company Name"
          value = {formData.company}
          onChange = {(e) => handleInputChange('company', e.target.value)}
          />
          <input
          type = "text"
          placeholder = "Position"
          value = {formData.position}
          onChange = {(e) => handleInputChange('position', e.target.value)}
          />
          <input
          type = "text"
          placeholder = "From (e.g., Jan 2020)"
          value = {formData.dateFrom}
          onChange = {(e) => handleInputChange('dateFrom', e.target.value)}
          />
          <input
          type = "text"
          placeholder = "To (e.g., Dec 2022 or Present)"
          value = {formData.dateTo}
          onChange = {(e) => handleInputChange('dateTo', e.target.value)}
          />
        <button className = "add-btn" onClick={handleAdd}>Add</button>
        <button className = "save-btn" onClick={() => setIsEditing(false)}>Done</button>
        </div>
      ) : (
        <div>
          {data.length === 0 && <p>No experience added.</p>}
          {data.map((entry) => (  
            <div key={entry.id} className="entry">
              <p>Company: {entry.company || 'not provided'}</p>
              <p>Position: {entry.position || 'not provided'}</p>
              <p>Duration: {entry.dateFrom || 'N/A'} - {entry.dateTo || 'N/A'}</p>
              {!isSubmitted && (
                <button className="delete-btn" onClick={() => handleDelete(entry.id)}>Delete</button>
              )}
            </div>
          ))}
          <button className="edit-btn" onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Experience;