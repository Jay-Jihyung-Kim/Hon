import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Loading from "./component/loading/loading.jsx";
import Home from "./component/pages/home.jsx";
import Initial from "./component/pages/initial.jsx";
import Menu from "./component/pages/menu.jsx";
import Gallery from "./component/pages/gallery.jsx";
import GlobalStyle from "./util/globalStyles";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Initial />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
