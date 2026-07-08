import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Journey from "./pages/Journey";
import Compiling from "./pages/Compiling";
import Library from "./pages/Library";
import Contact from "./pages/Contact";
import Canvas from "./pages/Canvas";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/compiling" element={<Compiling />} />
        <Route path="/library" element={<Library />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/canvas" element={<Canvas />} />
      </Route>
    </Routes>
  );
}

export default App;
