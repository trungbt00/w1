import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from './Info/1.png';
import image2 from './Info/2.png';
import image3 from './Info/3.png';
import image4 from './Info/4.png';
import image5 from './Info/5.png';
import image6 from './Info/6.png';

export const auctionEvents = [
    { id: 1, date: '19/06/2023', description: 'Bộ Công an đề xuất quy định liên quan đấu giá biển số xe', image: image1 },
    { id: 2, date: '19/06/2023', description: '30 năm "đau đáu" ý tưởng đấu giá biển số xe', image: image2 },
    { id: 3, date: '19/06/2023', description: 'Bộ Công an đề xuất đấu giá biển số xe trực tuyến', image: image3 },
    { id: 4, date: '19/06/2023', description: 'Sẽ trình Chính phủ ra Nghị quyết đấu giá biển số xe', image: image4 },
    { id: 5, date: '19/06/2023', description: 'Đấu giá biển số xe: Vì sao không nên khởi điểm 100 triệu đồng?', image: image5 },
    { id: 6, date: '19/06/2023', description: 'Hơn 1,55 triệu biển số xe máy sắp được đưa ra đấu giá', image: image6 },
];

const Auction = () => {
    return (
        <Container className="mt-5">    
            <Row xs={1} md={2} lg={4} className="g-4">
                {auctionEvents.map((event, index) => (
                    <Col key={index}>
                        <div className="p-3 rounded">
                            {event.image && (
                                <img
                                    src={event.image}
                                    alt={event.description}
                                    className="img-fluid mb-2 w-100"
                                    style={{ height: 'auto', objectFit: 'contain' }}
                                />
                            )}
                            <div>
                                <h6>
                                    <Link to={`/article/${event.id}`} className="text-decoration-none text-dark">
                                        <p className="mb-0">{event.description}</p>
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

export default Auction;