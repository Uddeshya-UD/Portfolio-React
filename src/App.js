import Home from './routes/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
    <Routes>
    <Route path="/" element={<Home />} />
    {/* <Route path="/Contact" element={<Contact />} />
    <Route path="/Bmr" element={<Bmr />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Login" element={<Login />} /> */}

 </Routes>
</Router>
    </div>
  );
}

export default App;
