import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Cancel from "./pages/Cancel";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route
          path="/success"
          element={<ProtectedRoute element={<Success />} />}
        /> */}

<Route path="/success" element={<Success />} />
<Route path="/Cancel" element={<Cancel/>} />


        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
