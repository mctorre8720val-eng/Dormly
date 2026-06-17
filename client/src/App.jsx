import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dorms from "./pages/Dorms";
import About from "./components/About";
import Rankings from "./pages/Rankings"


function App() {
  return(
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dorms" element={<Dorms />} />
        <Route path="/About" element={<About />} />
        <Route path="/Rankings" element={<Rankings />}/>
      </Routes>
    </>
  )
}

export default App;