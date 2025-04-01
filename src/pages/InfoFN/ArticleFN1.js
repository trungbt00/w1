﻿import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { featuredNewsData } from '../FeaturedNews';

const Article = () => {
    const { id = 1 } = useParams();
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
                        <h2 class="singular-sapo">(Dân trí) - Với hơn 2 triệu biển số đưa ra đấu giá, trên 50.000 biển đấu giá thành công, cùng công nghệ hiện đại, quy trình tinh gọn, Công ty đấu giá hợp danh Việt Nam ghi dấu ấn sau một năm vận hành thí điểm hoạt động này, thu về ngân sách hàng nghìn tỷ đồng.</h2>
                        <p>Tháng 9/2023, phiên đấu giá biển số xe trực tuyến đầu tiên được Công ty đấu giá hợp danh Việt Nam (VPA) tổ chức thành công với vai trò là đơn vị duy nhất được Bộ Công an lựa chọn thực hiện đấu giá biển số xe ô tô. Đến nay, sau hơn 1 năm, việc đấu giá biển số ô tô trực tuyến đã mang tới những kết quả ấn tượng, tạo nên cuộc cách mạng trong ngành đấu giá và đóng góp tích cực vào kinh tế - xã hội Việt Nam.</p><p><strong>Đột phá công nghệ, hiệu quả kinh tế</strong></p><p>Đấu giá biển số xe ô tô được đưa ra nhằm đáp ứng nhu cầu, nguyện vọng của người dân đăng ký biển số theo sở thích. Với một thị trường ô tô đang phát triển mạnh như Việt Nam, nhu cầu biển số đẹp của người dân mỗi năm rất lớn. Do đó, áp lực lên đơn vị đấu giá cũng không nhỏ, khi mỗi phiên đấu giá có hàng chục nghìn biển số được đưa lên hệ thống để người dân lựa chọn.</p><p>Để thực hiện hiệu quả hoạt động này, VPA áp dụng nhiều công nghệ hiện đại và liên tục cải tiến quy trình nhằm hỗ trợ người dân thuận lợi khi tham gia đấu giá. Không cần đến trực tiếp, khách hàng từ mọi miền đất nước có thể tham gia chỉ với vài thao tác đơn giản và dễ tiếp cận, xóa bỏ nhiều rào cản từng khiến người dân khó tiếp cận với hoạt động đấu giá chuyên nghiệp. Chính nhờ những công nghệ hiện đại và quy trình chặt chẽ, VPA giúp đưa lĩnh vực đấu giá của Việt Nam có bước tiến vượt bậc, đáp ứng kỳ vọng hiện đại hóa và chuyển đổi số của quốc gia.</p><p>Với bộ máy tinh gọn và thực hiện hoàn toàn online, chi phí cho mỗi phiên đấu giá được tối ưu, mang lại hiệu quả kinh tế cao.</p><p>Theo đại diện VPA, chỉ trong hơn một năm thí điểm, hơn 2 triệu biển số được đấu giá với hơn 50.000 biển số xe được đấu giá thành công, thu về cho ngân sách nhà nước gần 4.500 tỷ đồng. Đây là thành tích ấn tượng với hoạt động chỉ mới thực hiện thí điểm trong vòng hơn 1 năm, tạo ra nguồn thu mới ổn định cho ngân sách, giảm bớt gánh nặng từ các nguồn thu truyền thống, tăng dư địa cho chính sách tài khóa của chính phủ.</p><p><strong>Minh bạch và công khai, bước đệm cho phát triển bền vững</strong></p><p>Ngoài đáp ứng nhu cầu, nguyện vọng của người dân, đấu giá biển số xe còn giúp khai thác có hiệu quả tài sản công là kho biển số nhằm tạo nguồn thu cho ngân sách Nhà nước và công khai, minh bạch trong công tác đăng ký, quản lý xe với tiêu chí cải cách thủ tục hành chính, đo lường sự hài lòng của người dân.</p><p>Trước khi VPA thực hiện phiên đấu giá biển số xe đầu tiên thành công vào ngày 15/9, thị trường biển số xe đẹp tại Việt Nam thường đứng trước câu hỏi về tính minh bạch, công bằng trong cấp, sử dụng và sang tên biển số xe.</p><p>Do đó, việc VPA điều hành thành công hàng chục phiên đấu giá biển số xe không chỉ mang tới ý nghĩa về mặt kinh tế mà còn tạo ra tác động mạnh mẽ về xã hội. Từ đây, người dân vừa được nâng cao nhận thức về tầm quan trọng của việc sở hữu tài sản hợp pháp, vừa xây dựng ý thức tham gia các hoạt động kinh tế minh bạch.</p><p>Ngoài ra, để đảm bảo đúng với luật đấu giá tài sản, VPA đã trang bị công nghệ có tiêu chuẩn cao về bảo mật và minh bạch, không chỉ mang tới những phiên đấu giá công bằng mà còn đảm bảo không xảy ra tranh chấp hay tiêu cực. Quy trình này cho phép cơ quan quản lý có thể áp dụng các biện pháp ngăn chặn tình trạng bỏ cọc, không nộp hoặc nộp không đủ tiền trúng đấu giá, nhằm giúp người dân có nhu cầu thực có thể tiếp cận được biển số yêu thích với mức giá hợp lý, không bị thổi giá.</p><p>Những thành tựu đạt được của VPA sau hơn một năm điều hành hoạt động đấu giá biển số ô tô là kết quả của tầm nhìn chiến lược, sự đầu tư bài bản về cả công nghệ, con người, truyền thông, đặt nền móng cho việc triển khai các quy định mới của Luật Trật tự, An toàn giao thông đường bộ và Nghị định của Chính phủ. Mới đây Bộ Công an ban hành Thông tư số 79 quy định biển số xe trúng đấu giá sẽ được gắn tem nhận diện nền màu đỏ và màu vàng, chữ màu xanh; nhằm phân biệt với biển số thường hoặc biển số xe sử dụng năng lượng sạch.</p><p>Từ thành công của hoạt động đấu giá biển số xe ô tô, biển số xe máy cũng sẽ được đưa vào đấu giá công khai theo thông tin được nêu tại Nghị định 156/2024 quy định về đấu giá biển số xe có hiệu lực từ 1/1/2025. Đây là nghị định quy định chi tiết điều 37 và 38 Luật Trật tự, an toàn giao thông đường bộ 2024 về đấu giá biển số xe.</p><p>Những bước đi tiên phong của VPA đóng góp rất lớn cho mục tiêu phát triển bền vững của lĩnh vực đấu giá biển số nói riêng và ngành đấu giá Việt Nam nói chung, chứng minh năng lực của Việt Nam trong dòng chảy của xu thế quốc tế.</p>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Article;
