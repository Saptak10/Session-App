import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
// import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Register from "./components/Register";
import Login from "./components/Login";
import AddSession from "./components/AddSession";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/add" element={<AddSession />} exact />
          {/* <Route path="/books" element={<Books />} exact /> */}
          <Route path="/dashboard" element={<Dashboard />} exact />
          {/* <Route path="/about" element={<About />} exact /> */}
          {/* <Route path="/books/:id" element={<BookDetail />} exact /> */}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
