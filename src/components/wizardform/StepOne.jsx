import React from "react";

export default function StepOne({ next, formData, setFormData }) {
  return (
    <div>
      <label>
        Name
        <input
          type="text"
          name=""
          value={formData.name}
          id=""
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name=""
          id=""
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
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
    </div>
  );
}
