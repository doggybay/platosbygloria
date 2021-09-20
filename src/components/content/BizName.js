import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";


const BizName = ({ classes }) => {
  return (
    <Card>
      <CardMedia className={classes.logo} src={'https://res.cloudinary.com/platosbygloria/image/upload/v1632088646/media/platos_by_gloria_logo_3_bhp3mb.png'} />
    </Card>
  );
}

export default BizName;