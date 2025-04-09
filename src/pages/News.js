import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const News = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch("/new-by-category.json")
            .then((response) => response.json())
            .then((data) => {
                const formattedData = data.items.map((item) => ({
                    id: item.id,
                    date: new Date(item.publishDate).toISOString().split("T")[0], 
                    title: item.title,
                    image: item.imageRepresent,
                }));
                setNewsData(formattedData);
            })
            .catch((error) => console.error("Error fetching news:", error));
    }, []);

    return (
        <Container className="mt-5">
            <Row xs={1} md={2} lg={4} className="g-4">
                {newsData.map((event, index) => (
                    <Col key={index}>
                        <div className="p-3 rounded">
                            {event.image && (
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="img-fluid mb-2 w-100"
                                    style={{ height: 'auto', objectFit: 'contain' }}
                                />
                            )}
                            <div>
                                <h6>
                                    <Link to={`/news/${event.id}`} className="text-decoration-none text-dark">
                                        <p className="mb-0">{event.title}</p>
                                    </Link>
                                </h6>
                                <p className="mb-0">{event.date}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default News;
