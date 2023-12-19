
import './App.css';
import Navbar from './Components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";

import Cardcontent from './Components/Cardcontent';

function App() {
  return (
    <div >
      <Router>
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<Cardcontent number="1"/>}></Route>
      <Route exact path="/product1" element={<Cardcontent number="1"/>}></Route>
      <Route exact path="/product2" element={<Cardcontent number="2"/>}></Route>
      <Route exact path="/product3" element={<Cardcontent number="3"/>}></Route>
      

      </Routes>

    


      </Router>
     
    </div>
  );
}

export default App;
