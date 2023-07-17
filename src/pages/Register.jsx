import React, { useState } from "react";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setgender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      name,
      email,
      password,
      gender,
    };

    let response = await fetch(
      "https://lazy-pink-basket-clam-gear.cyclic.app/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }
    );
    console.log(response);
    alert("User Registered");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginLeft: "30%",
        marginRight: "30%",
        padding: "20px",
        border: "1px solid black",
        marginTop: "20px",
        marginBottom: "20px",
        fontSize: "20px",
      }}
    >
      <h1>Register</h1>
      <input
        style={{ padding: "10px" }}
        placeholder="Name"
        type="text"
        required
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        style={{ padding: "10px" }}
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        style={{ padding: "10px" }}
        type="password"
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <select
        style={{ padding: "10px" }}
        name="gender"
        id=""
        onChange={(e) => {
          setgender(e.target.value);
        }}
      >
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      <button style={{ padding: "10px" }} onClick={handleSubmit}>
        Register
      </button>
    </div>
  );
};
