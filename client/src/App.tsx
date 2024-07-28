import { Route, Routes } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AddWorkout from "./components/add-workout/AddWorkout";
import Logout from "./components/logout/Logout";
import AuthGuard from "./components/guards/AuthGuard";
import LoggedGuard from "./components/guards/LoggedGuard";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<LoggedGuard />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
          <Route element={<AuthGuard />}>
            <Route path="/add-workout" element={<AddWorkout />} />
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
