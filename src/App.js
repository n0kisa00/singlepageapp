import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import Footer from './fragments/Footer';
import Header from './fragments/Header';
import NavBar from './fragments/Navbar';

function App() {
  return (
    <>
    <NavBar />
    <Header />
    <div className="container">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contactus" component={ContactUs} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer />
    </>
  );
}

export default App;
