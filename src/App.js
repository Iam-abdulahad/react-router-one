import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import Notfound from "./components/NotFound/Notfound";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
        <Route path='/' element= {<Home></Home>}></Route>
        <Route path='/about' element={<About></About>} ></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
