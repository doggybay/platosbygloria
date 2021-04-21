import React from "react";
import Typography from "@material-ui/core/Typography";

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Platos by Gloria
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Thanks for stopping by.
      </Typography>
    </footer>
  );
}

export default Footer;