import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contacts";
import NoPage from "./NoPage";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PracticeComponent from './Practice';
import NewForm from './NewForm';
import Layout from './Layout';
import EmployeeList from './EmployeeList';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <NewForm></NewForm> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewForm />} />
          <Route path="EmployeeList" element={<EmployeeList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NewForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
    {/* <App name="father" /> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
