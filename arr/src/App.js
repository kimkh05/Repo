import logo from './logo.svg';
import './App.css';
import LoginMenu from './loginMenu';
import Scrolling from './scrolling';
import { Route } from 'react-router-dom';

const App = () => {
  return(
    <div>
      <Route path="/" component={LoginMenu} />
      <Route path="/scroll" component={Scrolling} />
    </div>
  )
}

export default App;
