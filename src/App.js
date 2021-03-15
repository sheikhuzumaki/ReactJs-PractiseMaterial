//import logo from './logo.svg';
import './App.css';
import Movies from './components/movies';
import Navbar from './components/navbar';
import Customer from './components/customer';
import Rental from './rental';
import { Route , Switch} from 'react-router-dom';
import NotFound from './components/not-found';
import { Redirect } from 'react-router-dom';
import MoviesID from './components/moviesID';
import MoviesForm from './components/moviesForm';
import LogInForm from './components/login';

function App() {
  return (
    <main >
      <Navbar/>
      <Switch>
      <Route path="/movies/:id" component={MoviesID}/>
      <Route path='/movies' component={Movies}/>
      <Route path='/login' component={LogInForm}/>
      <Route path='/customers' component={Customer}/>
      <Route path='/rentals' component={Rental}/>
      <Route path="/not-found" component={NotFound}/>
      <Redirect from="/" exact to="/movies"/>
      <Redirect to="/not-found"/>
      </Switch>
    </main>
  );
}

export default App;
