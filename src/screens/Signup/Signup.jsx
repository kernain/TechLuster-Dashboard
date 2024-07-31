// src/pages/Signup/Signup.js

import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from '../../components/Header/Header';
import SignupCV from '../../components/SignupCV/SignupCV';
import SignupDetails from '../../components/SignupDetails/SignupDetails';
import SignupReview from '../../components/SignupReview/SignupReview';


const Signup = () => {
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <Header />
      {step === 1 && <SignupCV onNext={handleNextStep} />}
      {step === 2 && <SignupDetails  onNext={handleNextStep}/>}
      {step === 3 && <SignupReview onNext={handleNextStep} />}

    </Box>
  );
};

export default Signup;
