import React, { useState } from "react";

const Profile = ({ data, setData }) => {
  if (!data) {
    return <div>Loading...</div>;
  }

  const { name, age, email } = data;

  const handleChange = (e, item) => {
    let value = e.target.value;
    
    setData((prev) => ({
      ...prev,
      [item]: value,
    }));
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>
    </div>
  );
};

export default Profile;
