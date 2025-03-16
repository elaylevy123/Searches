import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./components/home";
import VodInput from "./components/vodInput";
import './App.css';
import Footer from "./components/footer";
import MovieInfo from "./components/movieInfo";

function App() {
    return (
        <BrowserRouter>
            <VodInput />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/info/:id" element={<MovieInfo />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
