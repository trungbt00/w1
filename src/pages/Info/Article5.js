import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { auctionEvents } from '../Auction';

const Article = () => {
    const { id = 5 } = useParams();
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
                        <p>Việt Nam đã qua hai lần khởi xướng việc đấu giá biển số xe nhưng không thành. Đây là lần thứ ba và hy vọng&nbsp;sẽ thành công, vì nó làm cho các bên đều có lợi ích tăng thêm</p><p>Từ năm 1993, ý tưởng về việc thu phí biển số xe tự chọn đã thành hình. Khi đó, Bộ Công an đã cho phép CATP Hải Phòng thực hiện thí điểm đăng ký, cấp biển số, thu lệ phí biển số tự chọn. Bước đầu việc thí điểm có kết quả tích cực, tuy nhiên do báo chí và dư luận xã hội phản ứng nên kế hoạch triển khai rộng trên toàn quốc bị dừng lại.</p><p>Năm 2008, Bộ Công an tiếp tục trình lên Thủ tướng đề xuất đấu giá biển số xe. Dự thảo thông tư liên bộ hướng dẫn đấu giá biển số cũng đã được Bộ Tài chính soạn thảo nhưng một lần nữa bị dừng lại vì gặp vướng mắc về mặt pháp lý. Theo quy định thì "kho số viễn thông và kho số khác phục vụ quản lý nhà nước" là tài sản công; "kho số quản lý phương tiện giao thông" là kho số phục vụ quản lý nhà nước, nên không được đưa ra đấu giá.</p><p>Khác với Việt Nam, việc đấu giá đã diễn ra phổ biến ở nhiều nơi trên thế giới từ rất lâu. Nguyên tắc đấu giá là để thu được tối đa giá bán diễn ra ở nhiều loại hàng hóa, dịch vụ công khác nhau. Nó giúp người bán khai thác được giá tối đa mà người mua sẵn sàng chi trả. Nếu không đấu giá thì chỉ có mức giá cân bằng, trong khi có người sẵn sàng trả nhiều hơn. Như vậy nghĩa là Nhà nước sẽ thất thoát một khoản.</p><p>Lần này vấn đề đấu giá biển số xe tiếp tục được đưa ra và đã được trình lên Quốc hội. Như đã nêu ở trên, nếu thành công nó sẽ giúp cho các bên đều có lợi ích tăng thêm: Nhà nước thì sẽ không thất thu khoản đáng ra mình có thể thu được&nbsp; trong việc bán biển số xe; người dân thì có cơ hội tiếp cận với biển số xe mà mình mong muốn; nó cũng giúp giảm đi những hiện tượng tiêu cực từ trước đến nay hay bàn tới, ví dụ như vì sao xe sang thường gắn biển số đẹp.</p><p>Nhưng việc tổ chức đấu giá biển số xe như thế nào thì cần phải bàn để đạt được hiệu quả tối ưu nhất và hạn chế tiêu cực ở mức thấp nhất.</p><p>Mấy ngày nay, Quốc hội đã dành thời gian bàn về dự thảo Nghị quyết thí điểm cấp quyền lựa chọn biển số ô tô thông qua đấu giá, với nhiều ý kiến tranh luận khác nhau. Điều khiến các đại biểu Quốc hội lo ngại nhất chính là vấn đề tiêu cực trong đấu giá, nhưng tôi cho rằng, việc hóa giải những tiêu cực này rất đơn giản.</p><p>Tôi nói ví dụ, đại biểu Quốc hội Trần Sỹ Thanh - Chủ tịch TP Hà Nội, đề xuất mức giá khởi điểm áp dụng cho TP Hà Nội là 100 triệu đồng (thay vì 20 triệu đồng hoặc 40 triệu đồng như dự thảo Nghị quyết), với bước giá từ 20 đến 50 triệu.</p><p>Có lẽ Chủ tịch TP Hà Nội muốn đề xuất mức giá khởi điểm cùng với bước giá cao để hạn chế các bên thông đồng với nhau để bán biển số với giá quá thấp, trong khi giá thực tế có thể cao hơn nhiều. Nhưng theo tôi đề xuất này vừa không cần thiết, vừa có rất nhiều hạn chế.</p><p>Mức giá khởi điểm 100 triệu đồng sẽ chỉ phù hợp với các biển số có giá thị trường 1-2 tỷ đồng, nhưng lại ngăn cản cơ hội được tiếp cận của người mua với các biển số mà họ chỉ sẵn sàng trả từ 5 đến 99 triệu đồng. Nên đặt mức giá khởi điểm và bước giá quá cao sẽ làm thất thu ngân sách nhà nước với những biển số có giá trị thấp hơn mức giá đó.</p><p>Thật ra, dựa trên nguyên tắc một cuộc đấu giá công khai, minh bạch thì giá khởi điểm bao nhiêu không quan trọng vì người mua sẽ đấu giá lên cao dần, cho đến mức có người sẵn sàng chi trả cao nhất.</p><p>Bước giá cũng không cần quá cao, hoặc chỉ nên đặt bước giá cao với những tài sản giá trị cao. Vấn đề duy nhất phải làm chính là vấn đề quản trị, quản lý việc đấu giá như thế nào để đảm bảo tính minh bạch trong các cuộc đấu giá công khai. Việc này các nước phương Tây làm rất tốt.</p><p>Nếu ai quan tâm đến lĩnh vực đấu giá thì sẽ biết, từ mấy chục năm trước, khi internet mới xuất hiện, các nền tảng đấu giá trực tuyến đã ra đời, mà Ebay là một ví dụ. Có rất nhiều thứ được đấu giá trên Ebay, từ món đồ vài chục USD đến những tài sản có giá trị lớn vài chục triệu USD. Các tổ chức chuyên đấu giá đồ có giá trị cao trên Ebay không bao giờ lo lắng khi đấu giá món đồ có giá trị hàng triệu USD của mình, bởi vì họ biết rằng, quy trình đấu giá trên Ebay rất chặt chẽ và minh bạch.</p><p>Cho nên thay vì tổ chức các điểm đấu giá mà người mua phải đến tham dự trực tiếp, việc xây dựng một sàn đấu giá online sẽ là lời giải cho những lo ngại về sự minh bạch trong đấu giá biển số xe. Nó cũng phù hợp với mô hình Chính phủ số mà Việt Nam đang theo đuổi.</p><p>Để đảm bảo sự minh bạch, công khai, thì ngoài việc bắt buộc người tham gia đấu giá đặt cọc, đơn vị tổ chức đấu giá biển số xe (Bộ Công an) có thể xây dựng các mã số định danh để cấp cho người tham gia, đảm bảo các bên tham gia không biết nhau, cũng không thể liên lạc, móc nối với nhau, nên dĩ nhiên cũng không có cách nào thông đồng để dìm giá trị biển số xe được đấu.</p><p>Việc xây dựng các web đấu giá công khai sẽ giúp Nhà nước vừa tiết kiệm được chi phí về địa điểm và nhân lực tham gia tổ chức, lại vừa giúp các biển số đẹp tiếp cận được số người có nhu cầu nhiều nhất có thể, trong thời gian ngắn nhất có thể. Nó cũng giúp những người mua có thể dễ dàng tham gia đấu giá dù họ ở bất cứ đâu, đang làm gì.</p><p>Thay vì tổ chức các điểm đấu giá mà người mua phải đến tham dự trực tiếp, việc xây dựng một sàn đấu giá online sẽ là lời giải cho những lo ngại về sự minh bạch trong đấu giá biển số xe, cũng phù hợp với mô hình Chính phủ số mà Việt Nam đang theo đuổi.</p><p>Với năng lực công nghệ thông tin của Việt Nam hiện tại, tôi cho đây là một bài toán không hề khó giải.</p><p><em>Chuyên mục TÂM ĐIỂM mong nhận được ý kiến của bạn đọc về nội dung bài viết. Hãy vào phần Bình luận và chia sẻ suy nghĩ của mình. Xin cảm ơn!</em></p>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Article;
