import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyForm = () => {

    const [otp, setOtp] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
      
        const response = await axios.post('https://otptesting.onrender.com/api/v1/verifyOtp', { otp });
        console.log(response.data);
         
     
        setSuccessMessage('OTP verified successfully');
        setErrorMessage('');
       navigate("/home")
      } catch (error) {
        console.error(error);
  
        setSuccessMessage('');
        setErrorMessage('Otp verification failed');
      }
    };
  return (
    <div>

<form onSubmit={handleSubmit}>
      <label htmlFor="otp">Otp:</label>
      <input
        type="text"
        id="otp"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        required
      />

      <button type="submit">Submit</button>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </form>
    </div>
  )
}

export default VerifyForm