import { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { useAuth0 } from '@auth0/auth0-react';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Content from './components/content/Content';
import PbgCms from './components/pbg-cms/PbgCms'
import { fetchAllPlates } from './store/plates/actionCreators';


const App = () => {

  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();
  
  useEffect(() => {
    dispatch(fetchAllPlates());
  });

  return (
    <Router>
      <Fragment>
        <CssBaseline />
        <NavBar />
        <Switch>
          
        </Switch>
        <Content />
        {isAuthenticated ? (<PbgCms />) : ''}
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
