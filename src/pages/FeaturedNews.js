import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from './InfoFN/1.png';
import image2 from './InfoFN/2.png';
import image3 from './InfoFN/3.png';
import image4 from './InfoFN/4.png';
import image5 from './InfoFN/5.png';

export const featuredNewsData = [ 
    { id: 1, date: '19/06/2023', description: 'Dấu ấn một năm thí điểm đấu giá biển số trực tuyến', image: image1 },
    { id: 2, date: '19/06/2023', description: 'Đấu giá biển số đẹp', image: image2 },
    { id: 3, date: '19/06/2023', description: 'Nộp ngân sách hơn 2,7 nghìn tỷ đồng tiền đấu giá biển số ô tô', image: image3 },
    { id: 4, date: '19/06/2023', description: 'Bộ Công an đề xuất người bỏ cọc sẽ không được đấu giá biển số 1 năm', image: image4 },
    { id: 5, date: '19/06/2023', description: 'Người trúng đấu giá biển số 51K-888.88 đã nộp tiền', image: image5 },
];

const FeaturedNews = () => {
    return (
        <Container className="mt-5">
            <Row xs={1} md={2} lg={4} className="g-4">
                {featuredNewsData.map((event, index) => (
                    <Col md={8} key={index}>
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
                                    <Link to={`/articlefn/${event.id}`} className="text-decoration-none text-dark">
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

export default FeaturedNews;
