import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import * as pictures from "../../assets/pictures/pictures";

const BizName = ({ classes }) => {
  return (
    <Card>
      <CardMedia className={classes.logo} src={pictures.platosByGloriaLogo1} />
      {/* <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      ></Typography> */}
    </Card>
  );
}

export default BizName;