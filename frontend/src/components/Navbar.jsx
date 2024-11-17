import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      style={{
        background: "linear-gradient(90deg, #1E3C72, #2A5298)", 
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)", 
      }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Typography variant="h6" style={{ fontWeight: "bold", color: "white" }}>
          Contact Management
        </Typography>
        <div>
          <Button
            color="inherit"
            component={Link}
            to="/"
            style={{ marginRight: "20px", textTransform: "capitalize" }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/add"
            style={{ textTransform: "capitalize" }}
          >
            Add Contact
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
