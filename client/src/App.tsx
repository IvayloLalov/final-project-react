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
import About from "./components/about/About";
import WorkoutList from "./components/workoutList/WourkoutList";
import WorkoutDetails from "./components/workout-details/workoutDetails";
import WorkoutEdit from "./components/edit-workout/workoutEdit";
import ErrorBoundary from "./components/error/ErrorBoundry";
import NotFound from "./components/not-found/NotFound";
import Search from "./components/search/Search";
import EditGuard from "./components/guards/EditGuard";

function App() {
  return (
    <>
      <ErrorBoundary>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/workouts" element={<WorkoutList />} />
            <Route path="/workouts/:workoutId" element={<WorkoutDetails />} />
            <Route path="/search" element={<Search />} />
            <Route element={<LoggedGuard />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>

            <Route element={<AuthGuard />}>
              <Route element={<EditGuard />}>
                <Route
                  path="/workouts/:workoutId/edit"
                  element={<WorkoutEdit />}
                />
              </Route>
              <Route path="/add-workout" element={<AddWorkout />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
