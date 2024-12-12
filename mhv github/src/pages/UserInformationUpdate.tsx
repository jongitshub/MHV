import React, { useState } from "react";

const UserInputForm: React.FC = () => {
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/saveUserData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Data saved successfully!");
        setFormData({ address: "", phone: "", email: "" });
      } else {
        alert("Failed to save data. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="address">Home Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="phone">Telephone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInputForm;