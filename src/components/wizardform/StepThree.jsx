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
        <label htmlFor="comment">Comments</label>
        <input
          type="text"
          name="comment"
          value={formData.comment}
          id="comment"
          onChange={(e) => {
            setFormData({ ...formData, comment: e.target.value });
          }}
        />
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
