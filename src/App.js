import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Content from "./components/content/Content";


function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Content />
      <Footer />
    </React.Fragment>
  );
}

export default App;
