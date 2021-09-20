import React from "react";
import Plate from "./Plate";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { plates } from "../../assets/data/plates";
import { platesStyles } from "../../styles/plates/styles";


const Plates = () => {
  const classes = platesStyles();
  const listOfPlates = plates.map((plate) => <Plate key={plate.id} plate={plate} />);
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {listOfPlates}
      </Grid>
    </Container>
  );
}

export default Plates;