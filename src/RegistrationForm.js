import React from "react";
import PersonalInformation from "./PersonalInformation";
import MedicalEducationAndTraining from "./MedicalEducationAndTraining";
import Certifications from "./Certifications";
import Documentations from "./Documentations";

const RegistrationForm = () => {

  return (
    <div className="reg-form">

      <div className="personal">
        <PersonalInformation />
      </div>

      <div className="education">
        <MedicalEducationAndTraining />
      </div>

      <div className="certifications">
        <Certifications />
      </div>

      <div className="supporting-documents">
        <Documentations />
      </div>

      <button id="submit-btn" type="submit">
        Submit Registeration
      </button>
     
    </div>
  );
};

export default RegistrationForm;
