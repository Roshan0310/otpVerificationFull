import './App.css';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import OTPForm from './components/OTPForm';
import VerifyForm from './components/VerifyForm';
import Home from './components/Home';



function App() {
  return (
    <Router>
    <Routes>
     <Route path='/' element={<OTPForm/>} />
     <Route path='/verify' element={<VerifyForm />} />
     <Route path='/home' element={<Home />} />
    </Routes>
  </Router>
  );
}

export default App;
