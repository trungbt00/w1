import React from 'react';
import { Nav, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Support = () => {
    const { t } = useTranslation();

    return (
        <Container className="mt-4">
            <Row>
                <Col md={3} className="p-4" style={{ height: 'auto' }}>
                    <div className="text-light fw-bold p-2 rounded-top" style={{ backgroundColor: "#0D6EFD" }}>
                        {t('Profile')}
                    </div>
                    <Nav className="flex-column border">
                        <Nav.Item className="border-bottom">
                            <Nav.Link href="/Support" className="text-dark p-2">{t('customer_support')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="border-bottom">
                            <Nav.Link href="/profile/faq" className="text-dark p-2">{t('lqa')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="border-bottom">
                            <Nav.Link href="/profile/renewal-requests" className="text-dark p-2">{t('app_extension')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="border-bottom">
                            <Nav.Link href="/profile/renewal-list" className="text-dark p-2">{t('list_extension')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/profile/refund-requests" className="text-dark p-2">{t('refund')}</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>

                <Col md={9} className="p-2 border rounded bg-light">
                    <h3 className="text-center mt-2 " >{t('customer_support')}</h3>
                    <hr className="mb-4" />
                    <Form>
                        <Row className="mb-3">
                            <Form.Group controlId="formSubject">
                                <Form.Label>
                                    <h6>
                                        {t('title')}
                                    </h6>
                                </Form.Label>
                                <Form.Control as="textarea" rows={2} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group controlId="formContent">
                                <Form.Label>
                                    <h6>
                                        {t('content')}
                                    </h6>
                                </Form.Label>
                                <Form.Control as="textarea" rows={5} />
                            </Form.Group>
                        </Row>

                        <div className="text-left">
                            <Button type="submit" style={{ backgroundColor: '#2E3192', borderColor: '#2E3192' }}>
                                {t('send')}
                            </Button>
                        </div>
                    </Form>
                </Col>

            </Row>
        </Container>
    );
};

export default Support;
