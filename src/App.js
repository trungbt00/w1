import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Auction from './pages/Auction';
import FeaturedNews from './pages/FeaturedNews';
import Support from './pages/Support';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/auction" element={<Auction />} />
                <Route path="/support" element={<Support />} />
                <Route path="/highlight" element={<FeaturedNews />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
