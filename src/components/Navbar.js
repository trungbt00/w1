import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Header from './Header';
import { useTranslation } from 'react-i18next';

const NavigationBar = () => {
    const [categories, setCategories] = useState([]);
    const { t } = useTranslation();
    const translationMap = {
        "Tin tức": "news",
        "Thông tin đấu giá": "auction_info",
        "Tin nổi bật": "featured",
        "Hướng dẫn": "guide"
    };

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
                            <NavLink to="/Home" className="nav-link">{t('home')}</NavLink>
                            <NavDropdown title={t('category')} id="basic-nav-dropdown">
                                {categories.map(category => (
                                    <NavDropdown.Item
                                        key={category.id}
                                        as={NavLink}
                                        to={`/category/${category.id}`}
                                    >
                                        {t(translationMap[category.name] || category.name)}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                            <NavLink to="/History" className="nav-link">{t('auction_history')}</NavLink>
                            <NavLink to="/Support" className="nav-link">{t('customer_support')}</NavLink>
                            <NavLink to="/Register" className="nav-link">{t('extension')}</NavLink>
                            <NavLink to="/Contact" className="nav-link">{t('legal_papers')}</NavLink>
                            <NavLink to="/Profile" className="nav-link">{t('profile')}</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default NavigationBar;
