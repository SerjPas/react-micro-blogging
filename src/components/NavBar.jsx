import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <Row>
      <AppBar
        style={{
          backgroundColor: "#343A40",
          borderRadius: "6px",
          alignSelf: "center",
        }}
        position="static"
      >
        <Toolbar>
          <Link style={{ textDecoration: "none" }} to="/tweets">
            <Typography variant="h5" style={{ color: "white" }}>
              Home
            </Typography>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/">
            <Typography
              variant="h5"
              style={{
                marginLeft: "45px",
                color: "white",
              }}
             
            >
              Profile
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Row>
  );
};

export default NavBar;
