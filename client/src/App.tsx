import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AddWorkout from "./components/add-workout/AddWorkout";
import { AuthProvider } from "./contexts/authContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-workout" element={<AddWorkout />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
