import React from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Content from "./components/content/Content";
import theme from "./theme/theme";


function App() {

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Content />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
