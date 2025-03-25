import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imagel from './logo.svg';

export const featuredNewsData = [ 
    { date: '19/06/2023', description: 'Mô tả 1', image: imagel }, 
    { date: '19/06/2023', description: 'Mô tả 2', image: imagel },
    { date: '19/06/2023', description: 'Mô tả 3', image: imagel },
    { date: '19/06/2023', description: 'Mô tả 4', image: imagel },
    { date: '19/06/2023', description: 'Mô tả 5', image: imagel },
    { date: '19/06/2023', description: 'Mô tả 6', image: imagel },
];

const FeaturedNews = () => {
    return (
        <Container className="mt-5">
            <Row xs={1} md={2} lg={4} className="g-4">
                {featuredNewsData.map((event, index) => (
                    <Col key={index}>
                        <div className="p-3 rounded">
                            {event.image && (
                                <img
                                    src={event.image}
                                    alt={event.description}
                                    className="img-fluid mb-2"
                                    style={{ height: '150px', objectFit: 'cover' }}
                                />
                            )}
                            <div>
                                <p className="mb-0">{event.description}</p>
                                <p className="mb-0">{event.date}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default FeaturedNews;
