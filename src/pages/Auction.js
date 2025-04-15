import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Spinner, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image1 from './Info/1.png';
import image2 from './Info/2.png';
import image3 from './Info/3.png';
import image4 from './Info/4.png';
import image5 from './Info/5.png';
import image6 from './Info/6.png';
import { useSelector } from 'react-redux';

export const auctionEvents = [
    { id: 1, date: '19/06/2023', description: 'Bộ Công an đề xuất quy định liên quan đấu giá biển số xe', image: image1 },
    { id: 2, date: '19/06/2023', description: '30 năm "đau đáu" ý tưởng đấu giá biển số xe', image: image2 },
    { id: 3, date: '19/06/2023', description: 'Bộ Công an đề xuất đấu giá biển số xe trực tuyến', image: image3 },
    { id: 4, date: '19/06/2023', description: 'Sẽ trình Chính phủ ra Nghị quyết đấu giá biển số xe', image: image4 },
    { id: 5, date: '19/06/2023', description: 'Đấu giá biển số xe: Vì sao không nên khởi điểm 100 triệu đồng?', image: image5 },
    { id: 6, date: '19/06/2023', description: 'Hơn 1,55 triệu biển số xe máy sắp được đưa ra đấu giá', image: image6 },
];

const Auction = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(auctionEvents);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(auctionEvents);
    const debounceTimeout = useRef(null);
    const permissions = useSelector(state => state.auth.userPermissions);
    useEffect(() => {
        setLoading(true);

        // Clear timeout nếu người dùng vẫn đang gõ
        if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

        debounceTimeout.current = setTimeout(() => {
            const term = searchTerm.toLowerCase();
            const filtered = data.filter(item =>
                item.description.toLowerCase().includes(term)
            );
            setFilteredData(filtered);
            setLoading(false);
        }, 500);

        return () => {
            if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
        };
    }, [searchTerm, data]);

    const handleDelete = (id) => {
        const updated = data.filter(item => item.id !== id);
        setData(updated);
        setFilteredData(updated);
    };

    return (
        <Container className="mt-4">
            <Form className="mb-4">
                <Form.Control
                    type="text"
                    placeholder="Tìm kiếm bài viết..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </Form>

            {loading ? (
                <div className="text-center my-5">
                    <Spinner animation="border" />
                </div>
            ) : (
                <Row xs={1} md={2} lg={4} className="g-4">
                    {filteredData.map((event) => (
                        <Col key={event.id}>
                            <div className="p-3">
                                {event.image && (
                                    <img
                                        src={event.image}
                                        alt={event.description}
                                        className="img-fluid mb-2 w-100"
                                        style={{ height: 'auto', objectFit: 'contain' }}
                                    />
                                )}
                                <h6>
                                    <Link to={`/article/${event.id}`} className="text-decoration-none text-dark">
                                        <p className="mb-0">{event.description}</p>
                                    </Link>
                                </h6>
                                <p className="mb-2">{event.date}</p>
                                {permissions.includes('admin') && (
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={() => handleDelete(event.id)}
                                    >
                                        Xoá
                                    </Button>
                                )}       
                            </div>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Auction;