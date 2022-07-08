import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Loading from "./component/loading/loading.jsx";
import Home from "./component/pages/home.jsx";
import Menu from "./component/pages/menu.jsx";
import GlobalStyle from "./util/globalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/menu" element={<Menu />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
