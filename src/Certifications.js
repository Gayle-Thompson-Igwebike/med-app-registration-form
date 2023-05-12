import React, { useState } from "react";

const Certifications = () => {
    const [medicalLicenseNumber, setMedicalLicenseNumber] = useState ("");
    const [licenseExpirationDate, setLicenseExpirationDate] = useState("");
    const [otherCredentials, setOtherCredentials] = useState ("");
    const [insuranceProvider, setInsuranceProvider] = useState ("");

     const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="medical-certifications">
      <legend>LICENSES AND CERTIFICATIONS</legend>
      <form onSubmit={handleSubmit}>
        <div id="certifications">
          <label htmlFor="med-license">Medical License Number:</label>
          <input
            type="number"
            value={medicalLicenseNumber}
            onChange={(e) => setMedicalLicenseNumber(e.target.value)}
            required
          />
        </div>

        <div id="certifications">
          <label htmlFor="expiration">License Expiration Date:</label>
          <input
            type="date"
            value={licenseExpirationDate}
            onChange={(e) => setLicenseExpirationDate(e.target.value)}
            required
          />
        </div>

        <div id="certifications">
          <label htmlFor="credentials">List Other Relevant Credentials:</label>
          <input
            type="text"
            value={otherCredentials}
            onChange={(e) => setOtherCredentials(e.target.value)}
            required
          />
        </div>

        <div id="certifications">
          <label htmlFor="insurance">Malpractice Insurance Provider:</label>
          <input
            type="text"
            value={insuranceProvider}
            onChange={(e) => setInsuranceProvider(e.target.value)}
            required
          />
        </div>
      </form>
    </div>
  );

};

export default Certifications;
