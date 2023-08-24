import React from 'react';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";

import Header from './components/Header';

import Home from './pages/Home';
import Projects from "./pages/projects/Projects";
import { ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material/styles";
import Contact from "./pages/Contact";
import Tools from "./pages/tools/Tools";
import ScrollToTop from "./helpers/ScrollToTop";


const MuiTheme = createTheme({
    palette: {
        mode: 'dark',
        text: {
            primary: "#dadada",
            secondary: "#dadada",
            disabled: "#dadada"
        }
    },
    components: {
        MuiLink: {
            defaultProps: {
                color: "#3ea0fd",
            }
        }
    }
});
function App() {
  return (
      <ThemeProvider theme={MuiTheme}>
      <Router>
          <ScrollToTop />
          <header>
            <Header />
          </header>
          <div className="mainViewer">
              <Routes>
                  <Route index path="/" element={<Home />} />
                  <Route path="/projects/:projectName?" element={<Projects />} />
                  <Route path="/tools/:toolName?" element={<Tools />} />
                  <Route path="/contact" element={<Contact />} />
              </Routes>
          </div>
      </Router>
      </ThemeProvider>
  );
}

export default App;
