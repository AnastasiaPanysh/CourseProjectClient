import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ReviewPage from "./pages/ReviewPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/review/:id" element={<ReviewPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/reg" element={<RegistrationPage />}></Route>
    </Routes>
  );
}

export default App;
