import React from "react";
import Typography from "@material-ui/core/Typography";
import { footerStyles } from "../../styles/footer/styles";

const Footer = () => {
  const classes = footerStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Platos by Gloria
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
      >
        Gracia por visitar
      </Typography>
    </footer>
  );
}

export default Footer;