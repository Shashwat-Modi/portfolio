import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Journey from "./pages/Journey";
import Compiling from "./pages/Compiling";
import Library from "./pages/Library";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/compiling" element={<Compiling />} />
        <Route path="/library" element={<Library />} />
      </Route>
    </Routes>
  );
}

export default App;
