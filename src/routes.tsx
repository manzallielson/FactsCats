import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Pages/Main/index";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default Router;
