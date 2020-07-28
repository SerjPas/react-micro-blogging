import React, { useState } from "react";
import { Button, Input, Container } from "@material-ui/core";

const UserProfile = () => {
  const [name, setName] = useState("");

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    localStorage.setItem("userName", JSON.stringify(name));
    setName("");
  };

  const handleOnNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Container style={{ width: "76%" }}>
      <form className="user-form" onSubmit={handleOnSubmit}>
        <h1 className="margin-top-52px, h1-custom">Profile</h1>
        <h3 className="h3-custom">User Name</h3>
        <label htmlFor="userName"></label>
        <Input
          style={{
            height: "61px",
            color: "white",
            border: "2px solid white",
            borderRadius: "6px",
          }}
          autoFocus
          id="userName"
          name="name"
          value={name}
          onChange={handleOnNameChange}
          inputProps={{ "aria-label": "description" }}
          required
        />
        <Button
          className="user-profile-button"
          type="submit"
          variant="contained"
          color="primary"
        >
          Save
        </Button>
      </form>
    </Container>
  );
};

export default UserProfile;
