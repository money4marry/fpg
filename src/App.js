import "./App.css";
import Header from "./components/header/header";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Review from "../src/pages/review/review";
import Articles from "../src/pages/articles/articles";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" index element={<Review />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
