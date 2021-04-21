import React from "react";
import AppBar from "@material-ui/core/AppBar";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { navBarStyles } from "../../styles/navBar/styles";

const NavBar = () => {
  const classes = navBarStyles()
  return (
    <AppBar position="relative">
      <Toolbar>
        <FastfoodIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Platos by Gloria
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;