import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { CssBaseline, Box } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box sx={{ mt: 8 }}>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </Box>
    </>
  );
}

export default App;
