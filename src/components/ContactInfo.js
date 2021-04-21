import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const ContactInfo = () => {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item>
        <Typography>
          <a href="tel:+1-818-618-1448">818-618-1448</a>
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          <a href="mailto:platosbygloria@gmail.com">Mande Email</a>
        </Typography>
      </Grid>
    </Grid>
  );
}

export default ContactInfo;