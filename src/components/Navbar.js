import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Header from './Header';

const NavigationBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categoies.json')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error('Lỗi khi tải danh mục:', error));
    }, []);

    return (
        <header>
            <Header />
            <Navbar className="custom-navbar" style={{ backgroundColor: "#333192" }} variant="dark" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="small-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/Home" className="nav-link">Trang Chủ</NavLink>
                            <NavDropdown title="Danh mục" id="basic-nav-dropdown">
                                {categories.map(category => (
                                    <NavDropdown.Item key={category.id} as={NavLink} to={`/category/${category.id}`}>
                                        {category.name}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
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
