import { useState } from 'react'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import './App.css'
import './styles/Components.css'

function App() {
  const [cvData, setCvData] = useState({
    general: { name: "", email: "", phone: "" },
    education: [],
    experience: []
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleGeneralUpdate = (newGeneral) => {
    // TODO: Your implementation
  };

  const handleEducationUpdate = (newEducation) => {
    // TODO: Your implementation
  };

  const handleExperienceUpdate = (newExperience) => {
    // TODO: Your implementation
  };

  const handleGlobalSubmit = () => {
    // TODO: Your implementation
  };

  return (
    <div className="app-container">
      <h1>CV Application</h1>
      
      <GeneralInfo 
        data={cvData.general}
        onUpdate={handleGeneralUpdate}
        isSubmitted={isSubmitted}
      />

      <Education 
        data={cvData.education}
        onUpdate={handleEducationUpdate}
        isSubmitted={isSubmitted}
      />

      <Experience 
        data={cvData.experience}
        onUpdate={handleExperienceUpdate}
        isSubmitted={isSubmitted}
      />

      <button className="submit-btn" onClick={handleGlobalSubmit}>
        Submit CV
      </button>
    </div>
  );
}

export default App;