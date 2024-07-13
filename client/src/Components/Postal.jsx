import React, { useState } from 'react';
import axios from 'axios';

const getPostal = async (pincode) => {
  const API_URL = `https://api.postalpincode.in/pincode/${pincode}`;
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching the postal data:", error);
    return null;
  }
};

const Postal = () => {
  const [pincode, setPincode] = useState("");
  const [postalData, setPostalData] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setPincode(e.target.value);
  };

  const handleSubmit = async () => {
    setError("");
    setPostalData(null);
    const data = await getPostal(pincode);
    if (data && data[0].Status === "Success") {
      setPostalData(data[0].PostOffice);
    } else {
      setError("Invalid pincode or data not found.");
    }
  };

  return (
    <div>
      <input 
        placeholder='Enter Pincode' 
        value={pincode} 
        onChange={handleChange} 
      />
      <button onClick={handleSubmit}>Submit</button>
      
      {error && <p>{error}</p>}
      
      {postalData && (
        <div>
          {postalData.map((office, index) => (
            <div key={index}>
              <h3>{office.Name}</h3>
              <p>District: {office.District}</p>
              <p>State: {office.State}</p>
              <p>Country: {office.Country}</p>
              <p>Pincode: {office.Pincode}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Postal;
