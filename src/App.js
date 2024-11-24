import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import CompanyList from "./components/CompanyList";
import CompanyDetails from "./components/CompanyDetails";
import Home from "./pages/Home";
import AboutUs from "./components/AboutUs";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:companyId" element={<CompanyDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
