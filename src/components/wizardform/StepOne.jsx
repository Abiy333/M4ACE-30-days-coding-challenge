import React from "react";

export default function StepOne({ next, formData, setFormData }) {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        id="name"
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
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
    </div>
  );
}
