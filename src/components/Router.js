import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "../pages/Home";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};