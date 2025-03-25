import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { auctionEvents } from '../pages/Auction';
import { featuredNewsData } from '../pages/FeaturedNews';

const Home = () => {
    const [latestAuctions, setLatestAuctions] = useState([]);

    useEffect(() => {
        const sortedAuctions = [...auctionEvents].sort((a, b) => new Date(b.date) - new Date(a.date));
        setLatestAuctions(sortedAuctions.slice(0, 5));
    }, []);

    const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
        const sortedNewsData = [...featuredNewsData].sort((a, b) => new Date(b.date) - new Date(a.date));
        setLatestNews(sortedNewsData.slice(0, 5));
    }, []);

    return (
        <Container className="mt-4">
            <Row>
                <Col md={3}  style={{ backgroundColor: "#FEF7DD" }}>
                    <div className="text-dark fw-bold text-center " style={{ backgroundColor: "#FEF7DD", padding: '0.5rem 1rem', borderBottom: '1px solid #ccc', marginBottom: '0' }}> THÔNG TIN ĐẤU GIÁ </div>
                    <ul className="list-unstyled">
                        {latestAuctions.map((event, index) => (
                            <li key={index} className="mb-2 d-flex align-items-center justify-content-between" style={{ backgroundColor: "#FEF7DD", padding: '0.5rem 1rem', borderBottom: '1px solid #ccc', marginBottom: '0' }}>
                                <div className="d-flex flex-column ">
                                    <span className="fw-bold">{event.description}</span>
                                    <small className="text-muted">{event.date}</small>
                                </div>
                                {event.image && (
                                    <img
                                        src={event.image}
                                        alt={event.description}
                                        style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col md={6}>
                    <div className="text-dark fw-bold text-center " style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #ccc', marginBottom: '0' }}> ĐẤU GIÁ BIỂN SỐ XE Ô TÔ </div>
                </Col>
                <Col md={3}>
                    <div className="text-dark fw-bold text-center " style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #ccc', marginBottom: '0' }}> TIN NỔI BẬT </div>
                    <ul className="list-unstyled">
                        {latestNews.map((news, index) => (
                            <li key={index} className="mb-2" style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #ccc', marginBottom: '0' }}>
                                <div className="fw-bold">{news.description}</div>
                                <small className="text-muted">{news.date}</small>
                                {news.category && <small className="ml-2 text-muted">({news.category})</small>}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;