import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { auctionEvents } from '../Auction';

const Article = () => {
    const { id = 3 } = useParams();
    const event = auctionEvents.find(e => e.id === parseInt(id));

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
                        <h2 class="singular-sapo">(Dân trí) - Bộ Công an đề xuất đấu giá trực tuyến biển số ô tô hoàn toàn trên mạng internet; đề nghị đưa vào dự thảo Nghị định quy định về tiêu chí lựa chọn tổ chức đấu giá để áp dụng cho đấu giá biển số xe.</h2>
                        <p>Ngày 10/1, Bộ Công an đã họp công bố quyết định thành lập Ban soạn thảo và Tổ biên tập xây dựng Nghị định quy định chi tiết một số điều Nghị quyết số 73/2022/QH15 của Quốc hội về thí điểm đấu giá biển số ô tô. Thiếu tướng Nguyễn Văn Long, Thứ trưởng Bộ Công an chủ trì cuộc họp.</p>
                        <p>Tham dự cuộc họp có đại diện lãnh đạo: Cục Cảnh sát giao thông (CSGT), Văn phòng Bộ Công an, một số đơn vị thuộc Bộ Tài Chính, Bộ Tư pháp…</p>
                        <p>Tại cuộc họp, Thiếu tướng Lê Xuân Đức, Phó Cục trưởng Cục CSGT, Bộ Công an đã công bố quyết định của Bộ trưởng Bộ Công an về việc thành lập Ban soạn thảo và Tổ biên tập xây dựng Nghị định quy định chi tiết một số điều Nghị quyết số 73/2022/QH15 của Quốc hội về thí điểm đấu giá biển số xe ô tô.&nbsp;</p>
                        <p>Theo Thiếu tướng Lê Xuân Đức: Ban soạn thảo xây dựng Nghị định gồm 13 thành viên do Thiếu tướng Nguyễn Văn Long, Thứ trưởng Bộ Công an làm Trưởng ban; Thiếu tướng Nguyễn Văn Trung, Cục trưởng Cục CSGT làm Phó Trưởng ban và 11 thành viên thuộc các đơn vị chức năng thuộc Bộ Công an, Văn phòng Chính phủ, Bộ Tư pháp, Bộ Tài chính.&nbsp;</p>
                        <p>Tổ Biên tập gồm 19 thành viên do Thiếu tướng Nguyễn Văn Trung, Cục trưởng Cục CSGT làm Tổ trưởng, Thiếu tướng Lê Xuân Đức, Phó Cục trưởng Cục CSGT làm Tổ phó.</p>
                        <p>Trong khuôn khổ cuộc họp, Thiếu tướng Lê Xuân&nbsp;Đức&nbsp;đã báo cáo một số nội dung chính của Nghị quyết số 73/2022/QH15; xin ý kiến các đại biểu một số nội dung về trình tự, thủ tục đấu giá; tiêu chí lựa chọn tổ chức đấu giá; quy định giao đơn vị&nbsp;mở tài khoản tạm thu tại tổ chức tín dụng để thu tiền đấu giá biển số xe ô tô…&nbsp;</p>
                        <p>Theo đó, Bộ Công an đề xuất đấu giá trực tuyến biển số xe ô tô hoàn toàn trên môi trường Internet; đề nghị đưa vào dự thảo Nghị định quy định về tiêu chí lựa chọn tổ chức đấu giá để áp dụng cho đấu giá biển số xe ô tô.</p>
                        <p>Tham gia ý kiến tại cuộc họp, đại diện Văn phòng Chính phủ, Bộ Tư pháp, một số đơn vị thuộc Bộ Tài chính đã nêu ý kiến về các nội dung như: Trình tự, thủ tục đấu giá; quản lý, sử dụng nguồn thu từ đấu giá; kế hoạch tổ chức đấu giá...</p>
                        <p>Phát biểu kết luận cuộc họp, Thứ trưởng Nguyễn Văn Long yêu cầu Cục CSGT khẩn trương phối hợp với Bộ Tài chính, Bộ Tư pháp sớm hoàn thiện dự thảo Nghị định để lấy ý kiến người dân và các cơ quan chức năng trước khi trình Chính phủ ban hành.</p>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Article;
