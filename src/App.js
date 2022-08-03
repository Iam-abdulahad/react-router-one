import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import Aboute from './components/About/About';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Friends></Friends>
      <Aboute></Aboute>
    </div>
  );
}

export default App;
