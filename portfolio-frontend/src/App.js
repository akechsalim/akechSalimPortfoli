import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Work from './components/Work/Work';
import Shelf from './components/Shelf/Shelf';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/shelf" element={<Shelf />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;