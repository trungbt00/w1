import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./1.png";

const Footer = () => {
    return (
        <footer className="footer mt-5 py-3" style={{ backgroundColor: '#ffffff' }}>
            <hr style={{ borderTop: '3px solid #ccc', marginBottom: '15px' }} />
            <Container>
                <Row>
                    <Col md={4} className="d-flex align-items-start">
                        <img src={logo} alt="Logo" width="40" className="me-2" />
                        <div>
                            <strong style={{ color: '#333192', fontSize: '0.9em' }}>BỘ CÔNG AN</strong> <br />
                            <strong style={{ color: '#333192', fontSize: '0.9em' }}>CỤC CẢNH SÁT GIAO THÔNG</strong>
                        </div>
                    </Col>

                    <Col md={4}> 
                        <p className="mb-1">Cổng thông tin điện tử Bộ Công An</p>
                        <p className="mb-1">Trụ sở: 44 Yết Kiêu - Hoàn Kiếm - Hà Nội</p>
                        <p className="mb-1">Điện thoại: 069.2343647</p>
                        <p className="mb-1">Email: daugiabienso@bocongan.vn</p>
                    </Col>

                    <Col md={4} className="text-muted">
                        <p style={{ fontSize: '0.8em' }}>Bản quyền thuộc về Bộ Công An.</p>
                        <p style={{ fontSize: '0.8em' }}> Khi sử dụng lại thông tin, đề nghị ghi rõ nguồn "Cổng TTĐT Bộ Công An"</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
