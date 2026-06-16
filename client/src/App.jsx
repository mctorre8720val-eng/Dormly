import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dorms from "./pages/Dorms";
import Welcome from "./components/Welcome";

function App() {
  return(
    <>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dorms" element={<Dorms />} />
    </Routes>
    </>
  )
}

export default App;