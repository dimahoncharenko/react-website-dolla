import { Routes, Route } from "react-router-dom";

// Pages
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";

export const App = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
