import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { platesStyles } from '../../styles/plates/styles';

import Plate from './Plate';



const Plates = () => {
  const plates = useSelector(state => state.plates.all);
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