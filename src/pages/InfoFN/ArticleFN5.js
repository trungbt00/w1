import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { featuredNewsData } from '../FeaturedNews';

const Article = () => {
    const { id = 5 } = useParams();
    const event = featuredNewsData.find(e => e.id === parseInt(id));

    if (!event) {
        return <Container><h2>Bài viết không tồn tại</h2></Container>;
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 10, offset: 1}}>
                    <div className="text-center mb-3">
                        <img
                            src={event.image}
                            alt={event.description}
                            className="img-fluid rounded"
                            style={{ maxHeight: '680px', objectFit: 'cover' }}
                        />
                    </div>
                    <p>Ngày đăng: {event.date}</p>
                    <p>
                        <h2 class="singular-sapo">(Dân trí) - Chủ nhân trúng đấu giá biển số ô tô 51K-888.88 đã nộp tiền, sau khi người này trúng đấu giá biển số trên hôm 21/10, với số tiền hơn 15,2 tỷ đồng.</h2>
                        <p>Sáng 3/11, trao đổi với phóng viên <em>Dân trí,</em> đại diện Cục CSGT (Bộ Công an) cho biết, vào chiều hôm qua (2/11), chủ nhân trúng đấu giá biển số ô tô "siêu Vip" 51K-888.88 đã nộp tiền.</p><p>Tại phiên đấu giá hôm 21/10, biển số 51K-888.88 đã được "chốt" với số tiền hơn 15,2 tỷ đồng.</p><p>Trước đó, ngày 21/10, Công ty Đấu giá hợp danh Việt Nam đưa ra đấu giá 409 biển số ô tô, trong số này có biển 51K-888.88, từng bị bỏ cọc trong phiên đấu giá hôm 15/9 với mức trúng kỷ lục hơn 32 tỷ đồng.</p><p>Ngoài trường hợp trên, sáng 29/9, tại trụ sở Cục CSGT (Bộ Công an), anh Nguyễn Thạc Đức (46 tuổi, trú tại huyện Gia Lâm, TP Hà Nội) đã tới nhận biển số ô tô trúng đấu giá "siêu đẹp" 99A-666.66.</p><p>Anh Đức là người trúng đấu giá biển số ô tô kể trên, trong phiên đấu giá hôm 15/9 vừa qua với số tiền trúng đấu giá là 4,27 tỷ đồng.</p>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Article;
