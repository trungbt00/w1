import React from "react";
import logo from "./1.png";
import { Col, Button, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

function Header() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const userEmail = useSelector(state => state.auth.userEmail);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header className="header">
            <Container className="d-flex justify-content-between align-items-center py-2">
                <Col md={5} className="d-flex align-items-start">
                    <Link to={`/Home`}>
                        <img src={logo} alt="Logo" width="40" className="me-2" />
                    </Link>
                    <div style={{ fontSize: '0.9em' }}>
                        <strong style={{ color: '#333192' }}>BỘ CÔNG AN</strong> <br />
                        <strong style={{ color: '#333192' }}>CỤC CẢNH SÁT GIAO THÔNG</strong>
                    </div>
                </Col>
                <div className="d-flex align-items-center" style={{ gap: '10px' }}>
                    <LanguageSwitcher />

                    {isLoggedIn ? (
                        <Dropdown align="end">
                            <Dropdown.Toggle
                                variant="light"
                                id="dropdown-basic"
                                style={{
                                    fontSize: '0.85em',
                                    border: 'none',
                                    background: 'transparent'
                                }}
                            >
                                <img
                                    src="https://img.favpng.com/12/14/4/avatar-user-medicine-surgery-patient-png-favpng-5GPmZyxNjmTZRJtRW4aT9xw0h_t.jpg"
                                    alt="avatar"
                                    width="40"
                                    height="40"
                                    className="rounded-circle me-1"
                                />
                                {userEmail}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/profile">{t('acc_info')}</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleLogout}>{t('logout')}</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <Link to={`/login`}>
                            <Button
                                style={{
                                    backgroundColor: "#333192",
                                    borderColor: '#333192',
                                    fontSize: '0.8em',
                                    padding: '10px 30px',
                                    color: 'white',
                                    borderRadius: '8px',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                {t('login')}
                            </Button>
                        </Link>
                    )}
                </div>


            </Container>
        </header>
    );
}

export default Header;
