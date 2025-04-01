import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { featuredNewsData } from '../FeaturedNews';

const Article = () => {
    const { id = 3 } = useParams();
    const event = featuredNewsData.find(e => e.id === parseInt(id));

    if (!event) {
        return <Container><h2>Bài viết không tồn tại</h2></Container>;
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
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
                        <h2 class="singular-sapo">(Dân trí) - Theo Cục CSGT, trải qua 188 ngày đấu giá biển số ô tô, đã có hơn 32.000 biển số được đấu giá thành công, với tổng số tiền nộp ngân sách nhà nước là hơn 2,7 nghìn tỷ đồng.</h2>
                        <p>Chiều 2/8, trao đổi với phóng viên <em>Dân trí</em>, đại diện Cục CSGT (Bộ Công an) cho biết, tính đến hết ngày 2/8, việc đấu giá biển số ô tô đã trải qua 188 ngày, đã có hơn 1,1 triệu biển số được đưa ra đấu giá và số biển đấu giá thành công là hơn 32.000 biển số, tổng giá trị tài sản đấu giá thành công là hơn 2,8 nghìn tỷ đồng.</p><p>Theo Cục CSGT, tổng số tiền người trúng đấu giá đã nộp vào tài khoản chuyên thu của Cục CSGT, để nộp ngân sách nhà nước là hơn 2,7 nghìn tỷ đồng.</p><p>Trong đó, một số biển ô tô có số tiền trúng đấu giá cao như: biển số 51K-888.88 hơn 15,2 tỷ đồng, 30K-555.55 gần 14,5 tỷ đồng, 11A-111.11 hơn 8,7 tỷ đồng, 72A-777.77 hơn 6,8 tỷ đồng, 88A-666.66 hơn 6,7 tỷ đồng...</p><p>Cũng theo Cục CSGT, ngày 27/6, Quốc hội thông qua Luật Trật tự an toàn giao thông đường bộ, có hiệu lực từ ngày 1/1/2025, trong đó có nội dung quy định về đấu giá biển số xe. Quy định này sẽ góp phần khai thác có hiệu quả tài sản công là biển số xe, tạo nguồn thu cho ngân sách Nhà nước.</p><p>Luật Trật tự an toàn giao thông đường bộ nêu rõ giao Chính phủ quy định chi tiết một số nội dung về đấu giá biển số xe, trong đó đã bổ sung quy định đấu giá biển số ô tô hoạt động kinh doanh vận tải (nền màu vàng, chữ và số màu trắng) và xe mô tô, xe gắn máy.</p><p>"Bộ Công an đang phối hợp Bộ Tư pháp, Bộ Tài chính để tập trung xây dựng Nghị định trình Chính phủ về đấu giá biển số xe, sau khi Thủ tướng Chính phủ ký ban hành, Bộ Công an sẽ triển khai đấu giá biển số ô tô hoạt động kinh doanh vận tải", đại diện Cục CSGT nói thêm.</p>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Article;
