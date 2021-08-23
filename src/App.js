import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {HashRouter, Route} from 'react-router-dom';
import Login from './containers/Login';
import Register from './containers/Register';

function App() {
  return (
    <div className="App">
      <HashRouter>
    <Header></Header>
    <Route path="/login" component={Login}></Route>
    <Route path="/register" component={Register}></Route>
    </HashRouter>
    </div>
  );
}

export default App;
