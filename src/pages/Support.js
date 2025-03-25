import React from 'react';
import { Nav, Container, Row, Col, Form, Button } from 'react-bootstrap';

const Support = () => {
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

                <Col md={9} className="p-2 border rounded bg-light">
                    <h3 className="text-center mt-2 " >Hỗ trợ khách hàng</h3>
                    <hr className="mb-4" />
                    <Form>
                        <Row className="mb-3">
                            <Form.Group controlId="formSubject">
                                <Form.Label>
                                    <h6>
                                        Chủ đề câu hỏi
                                    </h6>
                                </Form.Label>
                                <Form.Control as="textarea" rows={2} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="formContent">
                                <Form.Label>
                                    <h6>
                                        Nội dung câu hỏi
                                    </h6>
                                </Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                        </Row>

                        <div className="text-left">
                            <Button type="submit" style={{ backgroundColor: '#2E3192', borderColor: '#2E3192' }}>
                                Gửi
                            </Button>
                        </div>
                    </Form>
                </Col>

            </Row>
        </Container>
    );
};

export default Support;
