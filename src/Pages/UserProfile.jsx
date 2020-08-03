import React, { useState } from "react";
import { Button, Input, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 52,
    width: 545,
    backgroundColor: "#16202C",
    margin: 0,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#007BFF",
    width: 68,
    height: 34,
    borderRadius: 4,
    alignSelf: "flex-end",
  },
  container: {
    width: "76%",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    height: "61px",
    color: "white",
    border: "2px solid white",
    borderRadius: "6px",
  },
}));

const UserProfile = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [logedIn, setlogedIn] = useState(false);

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    localStorage.setItem("userName", JSON.stringify(name));
    setlogedIn(true);
    setName("");
  };

  const handleOnNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Container className={classes.container}>
      <div className={classes.root}>
        {!logedIn ? (
          <form className="user-form" onSubmit={handleOnSubmit}>
            <h1 className="margin-top-52px, h1-custom">Profile</h1>
            <h3 className="h3-custom">User Name</h3>
            <label htmlFor="userName"></label>
            <Input
              className={classes.input}
              autoFocus
              id="userName"
              name="name"
              value={name}
              onChange={handleOnNameChange}
              inputProps={{ "aria-label": "description" }}
              required
            />
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              color="primary"
            >
              Save
            </Button>
          </form>
        ) : (
          <div>
            <Typography
              style={{
                margin: "45px",
                color: "white",
              }}
              variant="h5"
              color="inherit"
            >
              You successfully logged in!
            </Typography>
          </div>
        )}
      </div>
    </Container>
  );
};

export default UserProfile;
