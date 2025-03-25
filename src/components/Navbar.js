import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './Navbar.css';

const NavigationBar = () => {
    return (
        <header>
            <Container className="d-flex justify-content-between align-items-center py-2">
                <img src={logo} alt="Logo" style={{ height: '80px' }} />
                <Button style={{ backgroundColor: "#333192", borderColor: '#333192' }}>Đăng Nhập</Button>
            </Container>

            <Navbar className="custom-navbar" style={{ backgroundColor: "#333192" }} variant="dark" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/Home" className="nav-link">Trang Chủ</NavLink>
                            <NavLink to="/News" className="nav-link">Tin tức</NavLink>
                            <NavLink to="/Auction" className="nav-link">Thông tin đấu giá</NavLink>
                            <NavLink to="/Highlight" className="nav-link">Tin nổi bật</NavLink>
                            <NavLink to="/History" className="nav-link">Lịch sử đấu giá</NavLink>
                            <NavLink to="/Support" className="nav-link">Hỗ trợ khách hàng</NavLink>
                            <NavLink to="/Register" className="nav-link">Đăng ký gia hạn</NavLink>
                            <NavLink to="/Contact" className="nav-link">Giấy tờ pháp lý</NavLink>
                            <NavLink to="/Profile" className="nav-link">Cá nhân</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavigationBar;
