import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dorms from "./pages/Dorms";
import About from "./components/About";
import Rankings from "./pages/Rankings"
import Login from "./pages/Login"
import Register from "./pages/Register"


function App() {
  return(
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dorms" element={<Dorms />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rankings" element={<Rankings />}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        

      </Routes>
    </>
  )
}

export default App;