import React from "react";

export default function StepTwo({ prev, next, formData, setFormData }) {
  return (
    <div>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        id="password"
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
      />
      <label htmlFor="tel">Phone Number</label>
      <input
        type="tel"
        name="tel"
        id="tel"
        value={formData.phoneNo}
        onChange={(e) => {
          setFormData({ ...formData, phoneNo: e.target.value });
        }}
      />
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
