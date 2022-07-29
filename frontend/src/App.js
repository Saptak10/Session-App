import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import AddSession from "./components/AddSession";
import Dashboard from "./components/Dashboard";
import Payment from "./components/Payment/Payment";
import User from "./components/User";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} exact />
          <Route path="/user" element={<User />} exact />
          <Route path="/add" element={<AddSession />} exact />
          <Route path="/payment" element={<Payment />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
