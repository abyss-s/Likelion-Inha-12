import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GoToArticle from "./pages/GoToArticle";
import NotFound from "./pages/NotFound";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:articleId" element={<GoToArticle />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
