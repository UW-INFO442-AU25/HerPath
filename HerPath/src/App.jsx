import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import AccountQuiz from "./pages/AccountQuiz.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/quiz" element={<AccountQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
