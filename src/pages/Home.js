import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { auctionEvents } from '../pages/Auction';
import { featuredNewsData } from '../pages/FeaturedNews';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const [latestAuctions, setLatestAuctions] = useState([]);
    const [latestNews, setLatestNews] = useState([]);
    const [categoryNews, setCategoryNews] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const sortedAuctions = [...auctionEvents].sort((a, b) => new Date(b.date) - new Date(a.date));
        setLatestAuctions(sortedAuctions.slice(0, 5));
    }, []);

    useEffect(() => {
        const sortedNewsData = [...featuredNewsData].sort((a, b) => new Date(b.date) - new Date(a.date));
        setLatestNews(sortedNewsData.slice(0, 5));
    }, []);

    useEffect(() => {
        fetch('/new-by-category.json')
            .then(response => response.json())
            .then(data => setCategoryNews(data.items))
            .catch(error => console.error('Lỗi khi tải dữ liệu danh mục:', error));
    }, []);

    return (
        <Container className="mt-4">
            <Row>
                <Col md={3} style={{ backgroundColor: "#FEF7DD" }}>
                    <div className="text-dark fw-bold text-center " style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #ccc', marginBottom: '0' }}> {t('auc_info')} </div>
                    <ul className="list-unstyled">
                        {latestAuctions.map((event, index) => (
                            <li key={index} className="mb-2 d-flex align-items-center justify-content-between" style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #ccc', marginBottom: '0' }}>
                                <div>
                                    <h6>
                                        <Link to={`/article/${event.id}`} className="text-decoration-none text-dark">
                                            <p className="mb-0">{event.description}</p>
                                        </Link>
                                    </h6>
                                    <small className="text-muted">{event.date}</small>
                                </div>
                                {event.image && (
                                    <div style={{
                                        width: '80px', 
                                        minWidth: '80px', 
                                        height: '60px',
                                        marginLeft: '10px', 
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        <img
                                            src={event.image}
                                            alt={event.description}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center'
                                            }}
                                        />
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col md={6}>
                    <ul className="list-unstyled">
                        {categoryNews.map((news, index) => (
                            <li key={index} className="d-flex" style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #ccc', alignItems: 'center' }}>
                                <div>
                                    {index === 0 && news.imageRepresent && (
                                        <div className="mb-3" style={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                                            <img
                                                src={news.imageRepresent}
                                                alt={news.title}
                                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                    )}
                                    <h6>
                                        <Link to={`/news/${news.id}`} className="text-decoration-none text-dark">
                                            {news.title}
                                        </Link>
                                    </h6>
                                    <p className="mb-0 text-muted">{news.description}</p>
                                    <small className="text-muted d-flex justify-content-between">
                                        <span>{new Date(news.publishDate).toLocaleDateString()}</span>
                                        <Link to={`/category/3ebe84fe-5c7f-1289-21a0-3a0b360f757d`}
                                            className="text-decoration-none text-primary">
                                            {t('news')}
                                        </Link>
                                        <span style={{ visibility: 'hidden' }}>Placeholder</span>
                                    </small>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Col>
                <Col md={3}>
                    <div className="text-dark fw-bold text-center " style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #ccc', marginBottom: '0' }}> {t('featured_n')} </div>
                    <ul className="list-unstyled">
                        {latestNews.map((news, index) => (
                            <li key={index} className="mb-2" style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #ccc', marginBottom: '0' }}>
                                <div className="fw-bold">
                                    <h6>
                                    <Link to={`/articlefn/${news.id}`} className="text-decoration-none text-dark">
                                        <p className="mb-0">{news.description}</p>
                                    </Link>
                                    </h6>
                                </div>
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

