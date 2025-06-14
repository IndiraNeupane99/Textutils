import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import About from "./Component/About";
import TextForm from "./Component/TextForm";
import Alert from "./Component/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode enabled", "success");
      
      document.title = 'TextUtils -Dark Mode';
      // setInterval(() => {
      //  document.title='TextUtils is Amazing Mode';
      //  }, 2000);
      //  setInterval(() => {
      //  document.title='Install TextUtils Now';
      //  }, 1500);
      

    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter text below"
                mode={mode}
              />
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
