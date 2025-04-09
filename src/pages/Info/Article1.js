import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { auctionEvents } from '../Auction';

const Article = () => {
    const { id = 1 } = useParams();
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
                        <h1 class="title-page detail">Bộ Công an đề xuất quy định liên quan đấu giá biển số xe</h1>
                        <h3 class="singular-sapo">(Dân trí) - Bộ Công an đề xuất số tiền thu được từ đấu giá biển số xe sau khi trừ các khoản chi phí tổ chức đấu giá, chi phí quảng cáo, chi phí quản trị hệ thống đấu giá và chi phí khác, được nộp vào ngân sách.</h3>
                        <p>Trong dự án Luật Trật tự an toàn giao thông đường bộ cập nhật ngày 10/4, Bộ Công an đề xuất 21 Điều trong Chương III, quy định về Phương tiện giao thông đường bộ.</p>
                        <p>Trong đó, Điều 37 quy định về đấu giá biển số xe. Cụ thể, Bộ Công an đề xuất biển số xe đưa ra đấu giá là số biển số xe ô tô, xe mô tô, xe gắn máy.</p>
                        <p>Giá khởi điểm của một biển số ô tô đưa ra đấu giá không thấp hơn 40 triệu; giá khởi điểm một biển số xe mô tô, xe gắn máy đưa ra đấu giá không thấp hơn 5 triệu. Căn cứ điều kiện kinh tế xã hội trong từng thời kỳ, Chính phủ quyết định cụ thể giá khởi điểm của loại biển số xe đưa ra đấu giá.</p>
                        <p>Quá trình đấu giá, Bộ Công an đề xuất bước giá bằng 10% giá khởi điểm, đồng thời được thực hiện theo hình thức đấu giá trực tuyến.</p>
                        <p>Khi một người trúng đấu giá, họ sẽ có các quyền: Được cấp quyết định xác nhận biển số xe trúng đấu giá sau khi nộp đủ số tiền trúng đấu giá; Được đăng ký biển số xe trúng đấu giá gắn với phương tiện thuộc sở hữu của mình tại cơ quan công an nơi quản lý biển số xe trúng đấu giá hoặc nơi cư trú của cá nhân, trụ sở của tổ chức trúng đấu giá; được chuyển nhượng, trao đổi, tặng cho, để thừa kế xe gắn với biển số xe trúng đấu giá.</p>
                        <p>Bên cạnh đó, trong thời hạn 12 tháng kể từ ngày được cấp quyết định xác nhận biển số xe trúng đấu giá, nếu người trúng đấu giá chết nhưng chưa thực hiện thủ tục đăng ký xe để gắn biển số trúng đấu giá thì người thừa kế theo quy định của pháp luật về thừa kế được nhận số tiền người trúng đấu giá đã nộp, sau khi trừ các khoản chi phí tổ chức đấu giá.</p>
                        <p>Ngược lại, người trúng đấu giá có nghĩa vụ phải nộp đủ số tiền trúng đấu giá trong thời hạn 30 ngày kể từ ngày có thông báo kết quả trúng đấu giá; tiền trúng đấu giá không bao gồm lệ phí đăng ký, cấp biển số xe.</p>
                        <p>Sau thời hạn quy định, người trúng đấu giá biển số xe không nộp hoặc nộp không đủ tiền trúng đấu giá thì biển số xe trúng đấu giá được đấu giá lại hoặc chuyển vào hệ thống đăng ký, quản lý xe và người trúng đấu giá không được hoàn trả số tiền đặt trước.</p>
                        <p>Ngoài ra, người trúng đấu giá phải thực hiện thủ tục đăng ký xe để gắn biển số trúng đấu giá trong thời hạn 12 tháng kể từ ngày được cấp quyết định xác nhận biển số xe trúng đấu giá. Trường hợp sự kiện bất khả kháng hoặc trở ngại khách quan thì thời hạn này được kéo dài thêm nhưng tối đa không quá 6 tháng.</p>
                        <p>Sau thời hạn quy định, người trúng đấu giá biển số xe không thực hiện thủ tục đăng ký xe để gắn biển số trúng đấu giá thì biển số xe trúng đấu giá được đấu giá lại và người trúng đấu giá không được hoàn trả số tiền trúng đấu giá đã nộp.</p>
                        <p>Bộ Công an cũng đề xuất số tiền thu được từ đấu giá biển số xe sau khi trừ các khoản chi phí tổ chức đấu giá, chi phí quảng cáo, chi phí quản trị hệ thống đấu giá và chi phí khác được nộp vào ngân sách trung ương theo quy định của pháp luật về ngân sách nhà nước.</p>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Article;
