import React, { useState } from "react";

const Documentations = ()=> {
    const [curriculumVitae, setCurriculumVitae]= useState ("");
    const [boardOfCertificationDocuments, setBoardOfCertificationDocuments] = useState ("");
    const [otherSupportingDocuments, setOtherSupportingDocuments] = useState ("");

      const handleSubmit = (event) => {
        event.preventDefault();
      };

      return (
        <div className="documentations">
          <legend>SUPPORTING DOCUMENTS</legend>
          <form onSubmit={handleSubmit}>
            <div id="documentations">
              <label htmlFor="cv">Your CV:</label>
              <input
                type="file"
                value={curriculumVitae}
                onChange={(e) => setCurriculumVitae(e.target.value)}
                required
              />
            </div>

            <div id="documentations">
              <label htmlFor="cert-documents">
                Board of Certification Documents:
              </label>
              <input
                type="file"
                name="name"
                multiple
                value={boardOfCertificationDocuments}
                onChange={(e) =>
                  setBoardOfCertificationDocuments(e.target.value)
                }
                required
              />
            </div>

            <div id="documentations">
              <label htmlFor="support-docs">
                Any Other Supporting Documents:
              </label>
              <input
                type="file"
                value={otherSupportingDocuments}
                onChange={(e) => setOtherSupportingDocuments(e.target.value)}
                required
              />
            </div>
          </form>
        </div>
      );
};

export default Documentations;



 