import React from "react";
import Plate from "./Plate";
import Grid from "@material-ui/core/Grid";
import { plates } from "../../assets/data/plates";


const Plates = () => {
  return (
    <Grid container spacing={4}>
      {plates.map((plate) => (
        <Plate plate={plate} />
      ))}
    </Grid>
  );
}

export default Plates;