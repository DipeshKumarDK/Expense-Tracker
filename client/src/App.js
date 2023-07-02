import "./App.css";
import HomePage from "./pages/Home/HomePage";
import AllTransaction from "./pages/AllTransaction/AllTransaction";
import Income from "./pages/Income/Income";
import Expenses from "./pages/Expenses/Expenses";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <div className="w-full">
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/allTransaction" element={<AllTransaction/>} />
          <Route path="/income" element={<Income/>} />
          <Route path="/expense" element={<Expenses/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
