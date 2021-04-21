import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Plates from "./components/plates/Plates";
import ContactInfo from "./components/ContactInfo";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import BizName from "./components/BizName";
import BizDescription from "./components/BizDescription";


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar classes={classes} />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <BizName />
            <BizDescription />
            <div className={classes.heroButtons}>
              <ContactInfo />
            </div>
          </Container>
        </div>
        {/* End hero unit */}
        <Container className={classes.cardGrid} maxWidth="md">
          <Plates />
        </Container>
      </main>
      {/* Footer */}
      <Footer classes={classes} />
      {/* End footer */}
    </React.Fragment>
  );
}

export default App;
