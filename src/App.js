import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginForm from "./components/login";
import { Toaster } from "react-hot-toast";
import axios from "axios";
// import Attendence from "./Components/Attendence";

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "https://successful-eel-pea-coat.cyclic.app";
axios.defaults.baseURL = "http://localhost:8000"

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            border: "2px solid white",
            padding: "20px",
            fontSize: "15px",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        {/* <Route path="/attendence" element={<Attendence />} /> */}
      </Routes>
    </>
  );
}
export default App;
