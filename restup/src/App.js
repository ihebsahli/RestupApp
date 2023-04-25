import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Login from "./components/Auth/Login";
import Navbar from "./components/Layout/Navbar";
import Sidebar from "./components/Layout/sidebar";
import Index from "./components/LandingPage/Index";
import Footer from "./components/Layout/Footer";
import Register from "./components/Auth/Register"
import List from "./components/Menu/list"
import XO from "./components/Games/XO/xo"
import Puzz from "./components/Games/Puzz/puzz"
import Pendu from "./components/Games/Pendu/pendu"
import Go from "./components/Games/Go/go"
import Remember from "./components/Games/Remember/remember"
import ChatGPT from "./components/ChatGPT/chatgpt"
import Reservation from "./components/Reservations/reservation"
import ReservationList from "./components/Reservations/listeRes"

function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar/>
        {/* <Sidebar/> */}

        <df-messenger
  intent="WELCOME"
  chat-title="PizzUp"
  agent-id="c6669167-37c0-485a-82e5-fdddc4a42cd0"
  language-code="en"
></df-messenger>
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/listplats" element={<List/>} />
          <Route path="/puzz" element={<Puzz/>} />
          <Route path="/tictactoc" element={<XO/>} />
          <Route path="/pendu" element={<Pendu/>} />
          <Route path="/guessthenumber" element={<Go/>} />
          <Route path="/remember" element={<Remember/>} />
          <Route path="/chatgpt" element={<ChatGPT/>} />
          <Route path="/reservation" element={<Reservation/>} />
          <Route path="/reservationList" element={<ReservationList/>} />


        </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;