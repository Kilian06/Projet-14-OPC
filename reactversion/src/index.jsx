import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./main.scss";
import { Provider } from "react-redux";

import EmployeeList from "./pages/list/employee-list";
import { store } from "./store/store";
import Home from "./pages/home/home";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
