import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Content from './components/content/Content';
import { useDispatch } from 'react-redux'

import { fetchAllPlates } from './store/plates/actionCreators';
import { fetchAllCustomers } from './store/customers/actionCreators';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPlates());
    dispatch(fetchAllCustomers());

  });

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
