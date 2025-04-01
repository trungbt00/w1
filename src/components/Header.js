import React from "react";
import logo from "./1.png";
import { Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Header() {
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
                    <Link to={`/login`}>
                        <Button style={{ backgroundColor: "#333192", borderColor: '#333192', fontSize: '0.8em', padding: '5px 10px' }}>
                            Đăng Nhập
                        </Button>
                    </Link>
            </Container>
        </header>
    );
}

export default Header;
