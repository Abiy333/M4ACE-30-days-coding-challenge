import React from "react";

export default function StepThree({ prev, formData, setFormData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("SUCCESS! Sending this payload to the database: ", formData);
    alert("Registration Complete!");
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <legend>Final Review</legend>
        <label>
          Comments
          <input
            type="text"
            name=""
            value={formData.comment}
            id=""
            onChange={(e) => {
              setFormData({ ...formData, comment: e.target.value });
            }}
          />
        </label>
        <button
          type="button"
          onClick={() => {
            prev();
          }}
        >
          Previous
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
