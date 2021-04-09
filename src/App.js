import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, Row } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Services from './pages/Services';
// import Error from './pages/Error';
import Construction from './pages/Construction';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar />
        <Container fluid>
          <Row>
            <Switch>
              {/* <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/services' component={Services} />
              <Route component={Error} /> */}
              <Route component={Construction} />
            </Switch>
          </Row>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
