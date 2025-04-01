import React from 'react';
import { Nav, Container, Row, Col, Form } from 'react-bootstrap';

const Profile = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col md={3} className="p-4" style={{ height: 'auto' }}>
                    <div className="text-light fw-bold p-2 rounded-top" style={{ backgroundColor: "#0D6EFD" }}>
                        Cá nhân
                    </div>
                    <Nav className="flex-column border">
                        <Nav.Item className="border-bottom">
                            <Nav.Link href="/Support" className="text-dark p-2">Hỗ trợ khách hàng</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="border-bottom">
                            <Nav.Link href="/profile/faq" className="text-dark p-2">Danh sách câu hỏi hỗ trợ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="border-bottom">
                            <Nav.Link href="/profile/renewal-requests" className="text-dark p-2">Đơn đề nghị gia hạn</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="border-bottom">
                            <Nav.Link href="/profile/renewal-list" className="text-dark p-2">Danh sách đề nghị gia hạn</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/profile/refund-requests" className="text-dark p-2">Đề nghị hoàn tiền</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>

                <Col md={9} className="p-4 border rounded bg-white mx-auto">
                    <h3 className="text-center mb-4">Thông tin tài khoản</h3>
                    <hr />
                    <Form>
                        <Row className="mb-2">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Họ Tên</Form.Label>
                                    <Form.Control type="text" value="" disabled />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" value="" disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="mb-2">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Form.Control type="text" value="" disabled />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>ID tài khoản</Form.Label>
                                    <Form.Control type="text" value="" disabled />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Col>

            </Row>
        </Container>
    );
};

export default Profile;
