import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { plateStyles } from '../../styles/plates/styles';


const Plate = ({ plate }) => {
  const classes = plateStyles();

  return (
      <Grid item xs={12} sm={6} md={4}>
        <Card  className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={plate.picture}
            title="Image title"
          />
        </Card>
      </Grid>
  );
}


export default Plate;