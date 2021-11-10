import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';

import { footerStyles } from '../../styles/footer/styles';

const Footer = () => {
  const classes = footerStyles();
  const { loginWithRedirect, logout, isAuthenticated, error } = useAuth0();

  console.log('footer: ', useAuth0())
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
      {isAuthenticated || error ? (
        <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        >
          <Button 
            variant="text" 
            color="inherit" 
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Logout
          </Button>
        </Typography>
      ) : (
        <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        >
        <Button 
          variant="text" 
          color="inherit" 
          onClick={() => loginWithRedirect()}
        >
          Login
        </Button>
        </Typography>
      )}
      

      
    </footer>
  );
}

export default Footer;