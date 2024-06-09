import React from "react";
import { Routes, Route} from "react-router-dom";
import Index from "./page/Index";
import Blog from "./page/blog";
import Mitra from "./page/mitra";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import IsiArtikel from "./page/isiartikel";
import Daftar from "./page/daftar";


export default function App() {
  return (
    <>
      <Navbar/>,
      <Routes>
        <Route exact path="/" element={<Index />}></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route exact path="/mitra" element={<Mitra />}></Route>
        <Route exact path="/isiartikel" element={<IsiArtikel />}></Route>
        <Route exact path="/daftar" element={<Daftar />}></Route>
      </Routes>,
      <Footer/>   
      </>
  );
}