import React from "react";

export default function StepTwo({ prev, next, formData, setFormData }) {
  return (
    <div>
      <label>
        Password
        <input
          type="password"
          name=""
          value={formData.password}
          id=""
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
        />
      </label>
      <label>
        Phone Number
        <input
          type="tel"
          name=""
          id=""
          value={formData.phoneNo}
          onChange={(e) => {
            setFormData({ ...formData, phoneNo: e.target.value });
          }}
        />
      </label>
      <button
        type="button"
        onClick={() => {
          next();
        }}
      >
        Next
      </button>
      <button
        type="button"
        onClick={() => {
          prev();
        }}
      >
        Previous
      </button>
    </div>
  );
}
