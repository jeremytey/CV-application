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
    setCvData({ ...cvData, general: newGeneral });

  };

  const handleEducationUpdate = (newEducation) => {
    setCvData({ ...cvData, education: newEducation });

  };

  const handleExperienceUpdate = (newExperience) => {
    setCvData({ ...cvData, experience: newExperience });
  };

  const handleGlobalSubmit = () => {
    setIsSubmitted(true);
    
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