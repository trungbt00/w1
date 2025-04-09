import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { auctionEvents } from '../Auction';

const Article = () => {
    const { id = 2 } = useParams();
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
                    <div>
                        <h3 className="singular-sapo">(Dân trí) - Từ năm 1993, Công an Hải Phòng được giao nghiên cứu, tổ chức thí điểm đăng ký, cấp biển số, thu lệ phí biển số xe tự chọn. 29 năm trước, việc đấu giá biển số xe đã được thực hiện trong 2 tháng...</h3>
                        <p>Bộ Tư pháp đang tổ chức thẩm định đề nghị xây dựng Nghị quyết của Quốc hội về thí điểm cấp quyền lựa chọn <a contentEditable="false" href="https://dantri.com.vn/xa-hoi/tai-sao-khong-mo-rong-ap-dung-dau-gia-bien-so-mau-vang-cho-o-to-20220702105549384.htm">sử dụng biển số ô tô thông qua đấu giá.</a> Sau 30 năm, ý tưởng đấu giá biển số xe sắp thành hiện thực?</p>
                        <p>Gian nan thí điểm đấu giá biển số đẹp</p>
                        <p>Theo Bộ Công an, trong xã hội có rất nhiều người có nhu cầu sở hữu biển số xe theo sở thích, thường gọi là "biển số đẹp" tùy theo quan niệm của từng người.</p>
                        <p>Xuất phát từ nhu cầu của người dân, Chính phủ đã hai lần cho phép Bộ Công an tổ chức đấu giá và thu lệ phí cấp biển số tự chọn (năm 1993 và năm 2008).</p>
                        <p>Năm 1993, Bộ Công an đã chỉ đạo Công an TP Hải Phòng nghiên cứu và tổ chức thí điểm đăng ký, cấp biển số, thu lệ phí biển số xe tự chọn. Sau 2 tháng triển khai thực hiện đã có 94 trường hợp tự chọn biển số trên tổng số 198 xe đăng ký (đạt 47%).</p>
                        <p>Bộ Công an đã tiến hành sơ kết, rút kinh nghiệm và có công văn báo cáo Thủ tướng Chính phủ. Sau khi được Thủ tướng đồng ý cho triển khai việc thu phí biển số xe tự chọn trên toàn quốc, Bộ Công an đã phối hợp với Bộ Tài chính ban hành Thông tư số 88-TT/LB ngày 29/10/1994 quy định chế độ thu, quản lý sử dụng lệ phí đăng ký biển số xe tự chọn.</p>
                        <p>"Tuy nhiên, khi chuẩn bị triển khai thực hiện Thông tư số 88-TT/LB thì báo chí và dư luận xã hội còn nhiều ý kiến trái chiều nên Thủ tướng Chính phủ đã yêu cầu không thực hiện việc thu lệ phí cấp biển số xe tự chọn"- Bộ Công an cho hay.</p>
                        <p>Đến năm 2008, Công an Bình Dương, Nghệ An, Khánh Hòa, Kiên Giang, Tiền Giang, Bắc Ninh, Sơn La và Hà Nội đã báo cáo Bộ Công an xin ý kiến về việc đấu giá biển số xe.</p>
                        <p>Sau khi thống nhất với Bộ Tư pháp, Bộ Tài chính và Bộ Giao thông vận tải, Bộ Công an đã có công văn báo cáo và được Thủ tướng Chính phủ đồng ý cho phép đấu giá biển số xe. Các đơn vị chức năng đã dự thảo thông tư liên Bộ (Tài chính - Công an - Tư pháp) hướng dẫn việc đấu giá quyền sử dụng biển số xe, lấy ý kiến tham gia nhiều lần của các bộ, ngành, địa phương nhưng không được ban hành do vướng mắc về cơ sở pháp lý.</p>
                        <p>Đến ngày 12/10/2010, Bộ Công an đã ban hành Thông tư số 36/2010 quy định về đăng ký xe, trong đó có quy định biển số xe 5 số thay thế loại biển 4 số và có dấu chấm (.) ở hàng số thứ 3 nên cũng đã làm thay đổi quan niệm về số đẹp, dãy số đẹp. Ngày 30/9/2011, Bộ Tài chính có công văn báo cáo và được Thủ tướng Chính phủ đồng ý cho tạm dừng việc đấu giá biển số.</p>
                        <p>Thế nhưng tới năm 2017, Thủ tướng Chính phủ tiếp tục giao Bộ Công an chủ trì, phối hợp với Bộ Tài chính, Bộ Tư pháp xem xét xây dựng cơ chế đấu giá biển số xe.</p>
                        <p>Đầu năm 2018, Bộ Công an có tờ trình báo cáo Thủ tướng Chính phủ về Đề án thí điểm cấp biển số thông qua đấu giá. Tháng 3/2019, Thường trực Chính phủ tổ chức cuộc họp với đại diện lãnh đạo, chuyên viên các Bộ (Công an, Giao thông vận tải, Tư pháp, Tài chính, Kế hoạch và Đầu tư), Văn phòng Chính phủ, UBND TP Hà Nội, TPHCM về đề án này.</p>
                        <p>Tháng 4/2019, Văn phòng Chính phủ có văn bản thông báo ý kiến chỉ đạo của Thủ tướng "giao Bộ Công an đề xuất phương án tăng tính khả thi cho Đề án thí điểm cấp biển số thông qua đấu giá theo hướng cho phép người sở hữu biển số được bán, chuyển nhượng, thừa kế".</p>
                        <p>Bộ Công an đã tổ chức cuộc họp với các bộ, ngành liên quan để lấy ý kiến về dự thảo đề án. Tuy nhiên, nếu đề án đi theo hướng cho phép người trúng đấu giá biển số được bán, chuyển nhượng, thừa kế thì sẽ phải sửa Luật Giao thông đường bộ, bỏ khoản 22 Điều 8 quy định về cấm mua bán biển số. Do đó, tháng 5/2020 Bộ Công an đã có công văn báo cáo Thủ tướng Chính phủ đề xuất giao Bộ Công an tiếp tục phối hợp các bộ ngành đưa nội dung cấp biển số thông qua đấu giá vào dự thảo Luật Bảo đảm trật tự an toàn giao thông đường bộ, trình Quốc hội để đảm bảo việc triển khai thực hiện đúng quy định pháp luật.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Article;