import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { auctionEvents } from '../Auction';

const Article = () => {
    const { id = 4 } = useParams();
    const event = auctionEvents.find(e => e.id === parseInt(id));

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
                        <h3 class="singular-sapo">(Dân trí) - Trung tướng Vũ Đỗ Anh Dũng, Cục trưởng Cục CSGT cho biết việc xây dựng đề án đấu giá biển số xe là vấn đề mới, thường trực Chính phủ đã họp và Thủ tướng đã kết luận sẽ trình Chính phủ và ra Nghị quyết.</h3>
                        <p>Trả lời báo chí về Đề án đấu giá biển số xe hiện đang được dư luận quan tâm, Trung tướng Vũ Đỗ Anh Dũng, Cục trưởng CSGT Bộ Công an cho biết, vừa qua Thường trực Chính phủ đã họp và Thủ tướng đã kết luận sẽ trình Chính phủ xem xét và ra Nghị quyết.</p>
                        <p>Theo Trung tướng Vũ Đỗ Anh Dũng, sau khi có Nghị quyết thì Thủ tướng xem xét phê duyệt đề án đấu giá biển số.</p>
                        <p>Trung tướng Dũng mong báo chí và nhân dân sẽ tham gia góp ý về vấn đề này bởi đây là vấn đề rất mới.</p>
                        <p>Trước đó, Chính phủ giao Bộ Công an chủ trì phối hợp với các bộ, ngành liên quan nghiên cứu Đề án đấu giá biển số xe, nguồn thu được sẽ nộp ngân sách Nhà nước.</p>
                        <p>Liên quan đến vấn đề này, một trong những nội dung gây nhiều tranh cãi là theo quy định của Luật Đấu giá tài sản, để đưa biển số xe ra đấu giá, việc đầu tiên và bắt buộc phải xác định được biển số xe là tài sản.</p>
                        <p>Tuy nhiên, quyền tài sản lại bao gồm cả quyền chiếm hữu, sử dụng và định đoạt. Khi đó, biển số sẽ thành tài sản cá nhân, không còn là giấy tờ, tài liệu của cơ quan Nhà nước nên chủ sở hữu có thể cho, tặng, bán biển xe đó cho người khác. Điều này sẽ làm thay đổi nguyên tắc quản lý phương tiện hiện hành.</p>
                        <p class="smart-ptt1-p">Liên quan đến tình trạng tài xế sử dụng chất ma tuý trong thời gian vừa qua Cục trưởng CSGT thông tin, Cục CSGT có kế hoạch thực hiện tổng kiểm soát, trong đó tập trung kiểm tra việc lái xe sử dụng ma tuý và nồng độ cồn. Tuy nhiên, kiểm soát việc sử dụng ma túy rất khó khăn, việc tổng kiểm soát ảnh hưởng đến hoạt động bình thường nên CSGT rất hạn chế, chỉ khi nào rất cần thiết mới tiến hành kiểm soát.</p>
                        <p>Ông Dũng cho biết, vừa qua, trong vòng 20 ngày chia làm 2 giai đoạn khác nhau, lực lượng CSGT đã phát hiện xử lý 182 trường hợp, qua đó rút ra kiến nghị với cơ quan quản lý Nhà nước và chủ DN quản lý lái xe.</p>
                        <p>"Tới đây chúng tôi sẽ tiếp tục tiến hành thường xuyên và đột xuất theo từng đợt, từng chuyên đề. Qua công tác kiểm tra vừa rồi đã có hiệu ứng, tác động tốt khi nâng cao trách nhiệm của chủ doanh nghiệp trong quản lý lái xe", ông Dũng nói.</p>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Article;
