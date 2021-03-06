import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Apoinments from './components/Apoinments/Apoinments';
import ContactUs from './components/Contact/ContactUs';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import NotFound from './components/NotFound/NotFound'
import Header from './components/Shared/Header';
import Login from './components/Login/Login';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path='/service/:serviceId'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <Route path='/contact'>
              <ContactUs></ContactUs>
            </Route>
            <Route path='/apoinment'>
              <Apoinments></Apoinments>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider >
    </div>

  );
}

export default App;
