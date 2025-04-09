import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { featuredNewsData } from '../FeaturedNews';

const Article = () => {
    const { id = 4 } = useParams();
    const event = featuredNewsData.find(e => e.id === parseInt(id));

    if (!event) {
        return <Container><h2>Bài viết không tồn tại</h2></Container>;
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
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
                        <h2 class="singular-sapo">(Dân trí) - Bộ Công an đề xuất người trúng đấu giá biển số xe không nộp đủ tiền hoặc không nộp tiền trúng đấu giá theo thời hạn quy định, sẽ không được đăng ký tham gia đấu giá trong thời hạn 12 tháng.</h2>
                        <p>Bộ Công an đang lấy ý kiến Dự thảo Nghị định quy định về đấu giá biển số xe.&nbsp;</p><p>Theo Bộ Công an, ngày 27/6, Quốc hội thông qua Luật Trật tự an toàn giao thông đường bộ, có hiệu lực từ ngày 1/1/2025.</p><p>"Việc xây dựng và ban hành Luật Trật tự an toàn giao thông đường bộ, trong đó có nội dung quy định về đấu giá biển số xe góp phần khai thác có hiệu quả tài sản công là biển số xe, tạo nguồn thu cho ngân sách Nhà nước; đầu tư hệ thống cơ sở vật chất cho công tác đăng ký, cấp biển số; cải cách thủ tục hành chính, tạo điều kiện thuận lợi cho nhân dân; đảm bảo việc cấp biển số xe công khai, minh bạch, đúng quy định của pháp luật; mọi người dân đều có quyền bình đẳng trong việc lựa chọn biển số xe ô tô để tham gia đấu giá", Bộ Công an cho biết.</p><p>Từ các cơ sở pháp lý nêu trên, Bộ Công an cho rằng việc xây dựng Nghị định quy định về đấu giá biển số xe là cần thiết và đảm bảo cơ sở pháp lý.</p><p>Theo đó, dự thảo Nghị định quy định về đấu giá biển số xe gồm 4 chương, 30 điều.</p><p>Tại Chương II, Bộ Công an đề xuất mức thù lao dịch vụ đấu giá, chi phí đấu giá là 8% giá khởi điểm cho tổ chức đấu giá tài sản.</p><p>Ngoài mức thù lao, để đảm bảo tổ chức đấu giá tài sản thực hiện các trình tự thủ tục đấu giá, dự thảo Nghị định còn quy định tổ chức đấu giá được thanh toán chi phí thực tế, hợp lý với mức 10.000 đồng/1 biển số xe ô tô, 2.000 đồng/1 biển số xe mô tô, xe máy.</p><p>Về quy định người trúng đấu giá biển số xe không nộp đủ tiền hoặc không nộp tiền trúng đấu giá theo thời hạn quy định, Bộ Công an đề xuất không được đăng ký tham gia đấu giá trong thời hạn 12 tháng.</p><p>Điều này, theo Bộ Công an, nhằm hạn chế tình trạng gây nhiễu loạn, phức tạp cho hoạt động đấu giá trực tuyến và ảnh hưởng không tốt đến hiệu quả của hoạt động thí điểm.</p>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Article;
