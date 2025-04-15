import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Auction from './pages/Auction';
import FeaturedNews from './pages/FeaturedNews';
import Support from './pages/Support';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import News from './pages/News';
import Legal from './pages/Legal';
import Article1 from './pages/Info/Article1';
import Article2 from './pages/Info/Article2';
import Article3 from './pages/Info/Article3';
import Article4 from './pages/Info/Article4';
import Article5 from './pages/Info/Article5';
import Article6 from './pages/Info/Article6';
import ArticleFN1 from './pages/InfoFN/ArticleFN1';
import ArticleFN2 from './pages/InfoFN/ArticleFN2';
import ArticleFN3 from './pages/InfoFN/ArticleFN3';
import ArticleFN4 from './pages/InfoFN/ArticleFN4';
import ArticleFN5 from './pages/InfoFN/ArticleFN5';
import News1 from './pages/News/News1';
import News2 from './pages/News/News2';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import i18n from './i18n';
import ProtectedRoute from './components/ProtectedRoute';
import Unauthorized from './pages/Unauthorized';
import Register from './pages/Register';

function App() {
    const language = useSelector((state) => state.language.language);

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    return (
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/"             element={<Home />} />
                <Route path="/home"         element={<Home />} />
                <Route path="/profile"      element={<Profile />} />
                <Route path="/category/bc0e78b8-2825-b0d7-3cca-3a0b363192d9"    element={<Auction />} />
                <Route path="/category/e0caf83d-37bb-d40a-81a5-3a0b444eadf4"    element={<FeaturedNews />} />
                <Route path="/category/3ebe84fe-5c7f-1289-21a0-3a0b360f757d"    element={<News />} />
                <Route path="/login"        element={<Login />} />
                <Route path="/news/0f207ae0-f345-f62b-af71-3a0edd8fc61a" element={<News1 />} />
                <Route path="/news/7f4bb3a3-a9d4-d646-6b74-3a0ba2206539" element={<News2 />} />
                <Route path="/article/1"    element={<Article1 />} />
                <Route path="/article/2"    element={<Article2 />} />
                <Route path="/article/3"    element={<Article3 />} />
                <Route path="/article/4"    element={<Article4 />} />
                <Route path="/article/5"    element={<Article5 />} />
                <Route path="/article/6"    element={<Article6 />} />
                <Route path="/articlefn/1"  element={<ArticleFN1 />} />
                <Route path="/articlefn/2"  element={<ArticleFN2 />} />
                <Route path="/articlefn/3"  element={<ArticleFN3 />} />
                <Route path="/articlefn/4"  element={<ArticleFN4 />} />
                <Route path="/articlefn/5" element={<ArticleFN5 />} />
                <Route path="/unauthorized" element={<Unauthorized />} />
                <Route path="/legal" element={
                    <ProtectedRoute requiredPermissions={['giayToPhapLy']}>
                        <Legal />
                    </ProtectedRoute>
                } />
                <Route path="/register" element={
                    <ProtectedRoute requiredPermissions={['DangKyGiaHan']}>
                        <Register />
                    </ProtectedRoute>
                } />
                <Route path="/support" element={
                    <ProtectedRoute requiredPermissions={['hoTroKhachHang']}>
                        <Support />
                    </ProtectedRoute>
                } />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
