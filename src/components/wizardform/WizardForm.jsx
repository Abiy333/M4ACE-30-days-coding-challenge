import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

export default function WizardForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: Number(""),
    comment: "",
  });

  // 2. The UI State (The Tracker)
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => prev + 1);

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  // 3. The Switchboard (Conditional Rendering)
  return (
    <div>
      {currentStep === 1 && (
        <StepOne
          next={nextStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {currentStep === 2 && (
        <StepTwo
          next={nextStep}
          prev={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
      {currentStep === 3 && (
        <StepThree
          prev={prevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}
    </div>
  );
}
