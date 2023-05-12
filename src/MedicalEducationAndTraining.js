import React, { useState } from "react";

const MedicalEducationAndTraining = () =>{
    const [medSchool, setMedSchool] = useState ("");
    const [graduationYear, setGraduationYear] = useState ("");
    const [specialisation, setSpecialisation] = useState ("");
    const [boardOfCertification, setBoardOfCertification] = useState ("");

     const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
     <div className="education-training">
      <legend>MEDICAL EDUCATION AND TRAINING</legend>
      <form onSubmit={handleSubmit}>

        <div id="education-training">
          <label htmlFor="medschool">Medical School(s) Attended:</label>
          <input
            type="text"
            value={medSchool}
            onChange={(e) => setMedSchool(e.target.value)}
            required
          />
        </div>

        <div id="education-training">
          <label htmlFor="graduation-date">When Did You Graduate?:</label>
          <input
            type="date"
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
            required
          />
        </div>

         <div id="education-training">
          <label htmlFor="specialty">Your Specialisation/Specialist Area(s):</label>
          <input
            type="text"
            value={specialisation}
            onChange={(e) => setSpecialisation(e.target.value)}
            required
          />
          </div>

            <div id="education-training">
          <label htmlFor="board">Board Of Certification:</label>
          <input
            type="text"
            value={boardOfCertification}
            onChange={(e) => setBoardOfCertification(e.target.value)}
            required
          />
          </div>
        </form>
        </div>
  );
};

export default MedicalEducationAndTraining;
