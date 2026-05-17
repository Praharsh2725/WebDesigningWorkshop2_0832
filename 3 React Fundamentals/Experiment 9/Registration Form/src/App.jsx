import React, { useState } from "react";
import "./style.css";

function App() {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // State for errors
  const [errors, setErrors] = useState({});

  // State for success message
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form validation
  const validate = () => {
    let tempErrors = {};

    if (formData.name.trim() === "") {
      tempErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      tempErrors.email = "Valid email is required";
    }

    if (formData.password.length < 6) {
      tempErrors.password =
        "Password must be at least 6 characters";
    }

    return tempErrors;
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setErrors({});
      setSuccess("Registration Successful!");
    }
  };

  return (
    <div className="container">
      <div class="form-box">
      <form onSubmit={handleSubmit}>
        <h1>Registration Form</h1>
        <div className="temp">
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="error">{errors.password}</p>
        )}
        </div>
        <div className="buttondiv"><button type="submit">Register</button></div>

        {success && (
          <p className="success">{success}</p>
        )}
        
      </form>
      </div>
    </div>
  );
}

export default App;