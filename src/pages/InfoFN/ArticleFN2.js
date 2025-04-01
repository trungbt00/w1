import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { featuredNewsData } from '../FeaturedNews';

const Article = () => {
    const { id = 2 } = useParams();
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
                        <p>Một người đàn ông ở Nghệ An vừa bấm trúng biển kiểm soát 999.99 cho chiếc xe Kia Sonet trị giá 700 triệu đồng của mình. Chỉ một ngày sau, chiếc xe gắn biển ngũ quý 9 này được bán lại với giá 1,6 tỷ đồng. Tức là dãy số trên đã khiến giá trị phương tiện tăng thêm 900 triệu đồng so với giá thực tế. Tương tự, chiếc xe vừa được gắn biển 444.44 của một người ở Hà Tĩnh cũng được trả giá cao hơn gấp đôi.</p><p>Những thông tin trên, một lần nữa cho thấy sự quan tâm và nhu cầu thật trong xã hội về vấn đề biển số đẹp.</p><p>Có cầu ắt có cung, và nếu không được quản lý tốt sẽ nảy sinh tiêu cực trước nhu cầu thị trường. Một ví dụ, vừa qua cơ quan chức năng đã khởi tố vụ án "Lợi dụng chức vụ, quyền hạn trong thi hành công vụ" xảy ra tại Phòng Cảnh sát giao thông (Công an tỉnh An Giang), 3 cán bộ bị đình chỉ công tác và nguyên Trưởng phòng CSGT bị khởi tố, bắt giam. Theo thông tin ban đầu, từ năm 2012 đến năm 2021, Phòng CSGT Đường bộ tỉnh An Giang được cài đặt và hướng dẫn sử dụng hệ thống đăng ký, quản lý, cấp biển số bằng hình thức bấm, nhận biển số ngẫu nhiên. Tuy nhiên trong quá trình thực hiện nhiệm vụ, một số cán bộ có dấu hiệu cố tình can thiệp vào phần mềm hệ thống đăng ký, quản lý, cấp biển số phương tiện giao thông sai quy định…</p><p>Theo quan niệm chung, biển số đẹp là biển có các số tuân thủ nguyên tắc trùng lặp, tăng đều, tạo thành cặp, dễ nhớ và những biển số đẹp theo sở thích cá nhân, trùng những ngày đặc biệt liên quan đến bản thân một người nào đó và người thân. Như vậy, biển số đẹp với cá nhân chỉ là sở thích, nhưng nhìn từ góc độ quản lý thì có thể thiết kế chính sách để vừa đáp ứng nhu cầu người dân, vừa tạo sự minh bạch, phòng chống tiêu cực và thêm nguồn lực đóng góp vào ngân sách.</p><p>Từ những năm 2016-2017, trên diễn đàn Quốc hội, đại biểu Nguyễn Văn Cảnh (đoàn Bình Định) đã nêu kiến nghị về việc đấu giá biển số đẹp ô tô. Theo đó, từng nhóm số đẹp sẽ được phân ra để đấu giá và định giá, còn với những số bấm ngẫu nhiên như hiện nay sẽ giữ quy định không thu tiền. Ông Cảnh phân tích, trong mỗi series số, ví dụ từ 30A 000.01 đến 30A 999.99 với 99.999 số sẽ có 12.186 số đẹp, dự đoán khoảng 61.500 chủ phương tiện yêu cầu số theo ngày sinh, ngày cưới, số đặc biệt đối với cá nhân họ. Nếu đấu giá, tổng số tiền thu được cho mỗi series 99.999 số sẽ vào khoảng 1.639 tỷ đồng. Vị đại biểu tính toán rằng, với số lượng xe ô tô bán ra năm 2016 là hơn 300.000, trừ đi số lượng xe công, khi thực hiện đấu giá, định giá thì ngân sách dự kiến thu gần 5.000 tỷ đồng.</p><p>Được biết hiện nay Cục Cảnh sát giao thông đã dự thảo "Đề án thí điểm cấp quyền lựa chọn sử dụng biển số thông qua đấu giá". Theo đó, tất cả biển số xe ô tô nền màu trắng, chữ và số màu đen (biển xe cá nhân) trong kho biển số xe chưa được đăng ký đều có thể đưa ra đấu giá. Tổ chức, cá nhân chỉ được tham gia đấu giá biển số của địa phương nơi đóng trụ sở, nơi đăng ký thường trú và phải tuân thủ các quy định về đấu giá tài sản.</p><p>Đề án đưa ra hai phương án. Phương án một là người trúng đấu giá biển số xe sẽ được sử dụng nhưng cấm mua bán, trao đổi. Phương án này tương tự với cách quản lý hiện nay. Phương án hai, người trúng đấu giá sẽ được sử dụng, chuyển nhượng, thừa kế, cho tặng, thế chấp biển số trúng đấu giá; người sở hữu biển số khi bán phương tiện vẫn có thể giữ lại để đăng ký cho phương tiện khác của mình. Việc quản lý biển số khi đó sẽ khác với hiện nay.</p><p>Trả lời Dân trí, đại biểu Nguyễn Văn Cảnh cho rằng đấu giá biển số trước hết là thỏa mãn nhu cầu có thật của người dân, bên cạnh đó nhà nước thu được thêm ngân sách chứ không phải chuyển chiếc biển số theo hướng hàng hóa. Vì vậy, ông đề xuất cho đấu giá biển số, người trúng có quyền được giữ lại dùng cho xe tiếp theo của mình, song không được bán, cho, tặng...</p><p>Theo ông Cảnh, Luật quản lý tài sản công đã đưa biển số xe vào danh sách các loại tài sản công. Để việc đấu giá được triển khai thì Quốc hội có thể ra Nghị quyết hoặc Luật Giao thông đường bộ (sửa đổi) có điều khoản cho phép đấu giá biển số, tạo căn cứ pháp lý để triển khai.</p><p>Rõ ràng, đấu giá biển số đẹp là chủ trương đúng, cần sớm đưa vào áp dụng trong cuộc sống, phương án được lựa chọn có thể chưa tối ưu thì sẽ điều chỉnh sau khi đánh giá, tổng kết. Không nên để một bản đề án cần thiết nằm lâu trên giấy.</p>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Article;
