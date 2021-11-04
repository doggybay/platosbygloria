import { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Content from './components/content/Content';
import PbgCms from './components/pbg-cms/PbgCms'
import { fetchAllPlates } from './store/plates/actionCreators';
import { fetchAllCustomers } from './store/customers/actionCreators';


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPlates());
    dispatch(fetchAllCustomers());
  });

  return (
    <Router>
      <Fragment>
        <CssBaseline />
        <NavBar />
        <Content />
        <PbgCms />
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
