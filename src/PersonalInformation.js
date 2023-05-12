import React, { useState } from "react";

const PersonalInformation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState ("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

return (
  <div className="personal-info">
    <legend>PERSONAL INFORMATION</legend>
    <form onSubmit={handleSubmit}>
      <div className="personal">
        <label htmlFor="firstname">Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>

      <div className="personal">
        <label htmlFor="lastname">Surname:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>

      <div className="personal">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="personal">
        <label htmlFor="tel">Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="personal">
        <div id="gender">
          <label htmlFor="gender">Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="date">
        <label htmlFor="birthday">Date of Birth:</label>
        <input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
      </div>

      <div className="personal">
        <label htmlFor="Address" label id="address">
          Address:
        </label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
    </form>
  </div>
);
};

export default PersonalInformation;