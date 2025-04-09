import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { auctionEvents } from '../Auction';

const Article = () => {
    const { id = 6 } = useParams();
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
                        <h3 class="singular-sapo">(Dân trí) - Trong phiên đấu giá biển số tới đây, đơn vị tổ chức đấu giá biển số xe sẽ đưa ra hơn 1,55 triệu biển số mô tô, xe gắn máy lên sàn. Gần 625.000 biển số còn lại là biển số ô tô.</h3>
                        <p>Ngày 6/3, đơn vị tổ chức đấu giá biển số xe công bố danh sách hơn 2,1 triệu biển số được niêm yết sắp đưa ra đấu giá tại phiên đấu giá thứ 6. Đặc biệt, trong phiên đấu giá thứ 6 này, sẽ có hơn 1,55 triệu biển số mô tô, xe gắn máy được đưa ra đấu giá. Gần 625.000 biển số còn lại là biển số ô tô.</p><p>Hai địa phương có số lượng biển số đưa ra đấu giá nhiều nhất là TP Hà Nội (hơn 217.000 biển số) và TPHCM (hơn 212.000 biển số). Thời gian đấu giá chưa được công bố.</p><p>Theo đơn vị tổ chức đấu giá biển số xe, <strong>giá khởi điểm</strong> của một biển số ô tô là 40 triệu đồng; giá khởi điểm của một biển số xe mô tô, xe gắn máy là 5 triệu đồng.</p><p>Giá khởi điểm của biển số xe có định dạng AAAAA (A&gt;4), ABCDE (A&lt;B&lt;C&lt;D&lt;E, A&gt;4) đưa ra đấu giá lại sau lần thứ hai là 500 triệu đồng đối với biển số ô tô và 50 triệu đồng đối với biển số xe mô tô, xe gắn máy.</p><p><strong>Tiền đặt trước</strong> của một biển số ô tô đưa ra đấu giá là 40 triệu đồng; tiền đặt trước của một biển số xe mô tô, xe gắn máy đưa ra đấu giá là 5 triệu đồng; tiền đặt trước của biển số xe có định dạng AAAAA (A&gt;4), ABCDE (A&lt;B&lt;C&lt;D&lt;E,A&gt;4) đưa ra đấu giá lại sau lần thứ hai là 500 triệu đồng đối với biển số&nbsp; ô tô và 50 triệu đồng đối với biển số xe mô tô, xe gắn máy.</p><p><strong>Bước giá </strong>đối với đấu giá biển số ô tô là 5 triệu đồng; bước giá đối với đấu giá biển số xe mô tô, xe gắn máy là 500.000 đồng.</p><p><strong>Tiền bán hồ sơ tham gia đấu giá </strong>là 100.000 đồng&nbsp;một biển số ô tô; tiền bán hồ sơ tham gia đấu giá một biển số xe mô tô, xe gắn máy là 50.000 đồng.</p><p><strong>Thời gian đấu giá của một biển số xe chi tiết như sau</strong>: thời gian bắt đầu của cuộc đấu giá được quy định chi tiết trong thông báo đấu giá; thời lượng đấu giá của một biển số xe tối thiểu là 25 phút.</p>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Article;
