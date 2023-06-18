import { BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Modules from "./components/Modules";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Upload from "./components/Upload";
function App() {
  return(
  <Router>
    <Header/> 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Modules" element={<Modules/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/LogIn" element={<LogIn/>}/>
      <Route path="/upload" element={<Upload/>}/>
    </Routes>
    <Footer/>
  </Router>
  ) ;
}

export default App;
