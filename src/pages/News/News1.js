import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Article = () => {
    const { id = '0f207ae0-f345-f62b-af71-3a0edd8fc61a' } = useParams();
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        fetch("/new-by-category.json")
            .then((response) => response.json())
            .then((data) => {
                const formattedData = data.items.map((item) => ({
                    id: item.id,
                    date: new Date(item.publishDate).toISOString().split("T")[0], 
                    title: item.title,
                    image: item.imageRepresent,
                }));
                setNewsData(formattedData);
            })
            .catch((error) => console.error("Error fetching news:", error));
    }, []);
    const event = newsData.find(e => e.id === id);

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
                            alt={event.title}
                            className="img-fluid rounded"
                            style={{ maxHeight: '680px', objectFit: 'cover' }}
                        />
                    </div>
                    <p>Ngày đăng: {event.date}</p>
                    <p>
                        <h1 class="detail-title" data-role="title">Sẽ có gần 290 nghìn biển số xe ô tô trong đợt đấu giá lần 2</h1>
                        <h3 class="detail-sapo" data-role="sapo">SKĐS - Trong phiên đấu giá biển số xe ô tô lần 2, Bộ Công an chính thức phê duyệt danh sách 288.668 biển số xe ô tô được đưa ra đấu giá.</h3>
                        <p>Cục Cảnh sát giao thông (CSGT) chính thức thông báo về việc tổ chức phiên đấu giá biển số xe ô tô lần 2 theo Quyết định Số: 4653/QĐ-BCA-CSGT của Bộ Công An.</p>
                        <p>Theo đó, phiên đấu giá lần 2 sẽ có sự xuất hiện của 288.668 biển số ô tô tại 63 tỉnh thành, danh sách biển số được đưa ra đấu giá trực tuyến sẽ công bố trên cổng thông tin đấu giá trực tuyến trong thời gian tới.</p>
                        <p>Theo thống kê, các biển số đến từ Hà Nội và thành phố Hồ Chí Minh vẫn sẽ chiếm đa số (lần lượt là 49.689 và 41.989 biển số xe) trong phiên đấu giá lần 2, trong khi đó các biển số đến từ Bạc Liêu, Bắc Kạn, Điện Biên, Lai Châu chiếm thiểu số với chỉ dưới 1.000 biển.</p>
                        <p>Giống như phiên đấu giá đầu tiên, phiên đấu giá biển số xe ô tô lần 2 vẫn do Công ty Đấu giá hợp Danh Việt Nam tổ chức thực hiện. Giá khởi điểm của 1 biển số xe ô tô đưa ra đấu giá là vẫn là 40.000.000 đồng. Tương tự, tiền đặt trước bằng giá khởi điểm của 1 biển số xe ô tô đưa ra đấu giá và bước giá vẫn sẽ được giữ nguyên.</p>
                        <p>Liên quan đến thù lao dịch vụ đấu giá, chi phí đấu giá thanh toán cho tổ chức đấu giá, Cục CSGT cho biết, đối với mỗi biển số xe ô tô đấu giá thành công, thù lao dịch vụ đấu giá thanh toán cho tổ chức đấu giá tài sản được tính bằng 8% giá khởi điểm. Ngoài thù lao dịch vụ đấu giá, chi phí đấu giá thanh toán cho tổ chức đấu giá tài sản là 10.000 đồng trên một biển số xe ô tô đưa ra đấu giá.</p>
                        <p>Đơn vị được giao quản lý, giám sát thực hiện việc thực hiện phiên đấu giá biển số xe ô tô lần 2 là Cục Cảnh sát giao thông - Bộ Công an. Trong khi đó, đơn vị được giao kiểm tra, giám sát an ninh, an toàn thông tin, bảo đảm an ninh mạng, chống xâm nhập trong quá trình đấu giá là Cục An ninh mạng và phòng, chống tội phạm sử dụng công nghệ cao, Cục Viễn thông và Cơ yếu, Cục Công nghệ thông tin, Cục Kỹ thuật nghiệp vụ - Bộ Công an.</p>

                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default Article;
