import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Login />} />
        <Route path="news" element={<News />} />
      </Route>
    </Routes>
  );
}

export default App;
