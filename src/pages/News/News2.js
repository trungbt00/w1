import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const News2 = () => {
    const { id = '7f4bb3a3-a9d4-d646-6b74-3a0ba2206539' } = useParams();
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
                        <h1 class="detail-title article-title" data-role="title">Bộ Công an đề xuất cấp và quản lý biển số xe theo mã định danh của chủ xe</h1>
                        <h3 class="detail-sapo" data-role="sapo">
                            Trong dự thảo thông tư đang được lấy ý kiến, Bộ Công an đề xuất cấp và quản lý biển số xe máy, ô tô theo mã số định danh của chủ xe.
                        </h3>
                        <p>Bộ Công an vừa hoàn thành dự thảo thông tư quy định về cấp, thu hồi đăng ký, <a class="link-inline-content" href="https://tuoitre.vn/thi-diem-dau-gia-bien-so-xe-o-to-tu-1-7-2023-2022120108560031.htm" title="Biển số xe" data-rel="follow">biển số xe</a> cơ giới và đăng tải công khai để lấy ý kiến đóng góp của các đơn vị, cá nhân. Dự kiến, thông tư này có hiệu lực từ 1-7, thay thế thông tư 58/2020/TT-BCA.</p>
                        <p>Một trong những nội dung mới được quy định trong dự thảo thông tư, chủ xe là tổ chức, cá nhân có trụ sở, nơi cư trú ở đâu thì <a class="VCCTagItemInNews" data-zoneid="0" data-id="0" href="https://tuoitre.vn/dang-ky-xe.html" target="_blank" title="đăng ký xe">đăng ký xe</a> tại cơ quan đăng ký xe thuộc địa phương đó.</p>
                        <p>Điểm mới đáng chú ý nhất của dự thảo là biển số sẽ được cấp và quản lý theo mã định danh của chủ xe.</p>
                        <p>Cụ thể, chủ xe là người Việt Nam thì biển số được quản lý theo mã định danh cá nhân, hay còn gọi là "biển số định danh". Đối với người nước ngoài thì biển số xe được quản lý theo mã định danh của người nước ngoài</p>
                        <p>Với tổ chức, biển số được quản lý theo mã định danh của tổ chức hoặc mã số thuế.</p>
                        <p>Trường hợp xe hết niên hạn sử dụng, hư hỏng hoặc chuyển quyền sở hữu xe thì biển số xe đó được cơ quan đăng ký thu hồi và cấp lại khi chủ xe đăng ký xe khác thuộc sở hữu của mình.</p>
                        <p> Số biển số định danh này được giữ lại cho chủ xe trong thời hạn 5 năm, quá thời hạn nếu chủ xe không đăng ký, cơ quan chức năng sẽ thu hồi và đưa vào kho số để thực hiện đăng ký xe theo quy định.</p>
                        <p>Trường hợp chủ xe chuyển trụ sở, nơi cư trú đi tỉnh, thành phố trực thuộc trung ương khác (thì được giữ lại biển số xe đó.</p>
                        <p>Cũng theo dự thảo, mọi thủ tục đăng ký xe đều phải được kê khai trên&nbsp;
                            <a class="link-inline-content" href="https://tuoitre.vn/cong-dich-vu-cong-quoc-gia.html" target="_blank" title="cổng dịch vụ công quốc gia" data-rel="follow">Cổng dịch vụ công quốc gia
                            </a>.
                            Sau khi kê khai thành công, cổng dịch vụ công gửi tin nhắn thông báo mã hồ sơ để chủ xe làm thủ tục đăng ký xe tại cơ quan đăng ký xe có thẩm quyền.
                        </p>
                        <p>"Trường hợp không thực hiện được trên Cổng dịch vụ công quốc gia, do không có dữ liệu điện tử hoặc lỗi kỹ thuật, thì chủ xe kê khai làm thủ tục trực tiếp tại cơ quan đăng ký xe", dự thảo thông tư quy định.</p>
                        <p>So với thông tư 58/2020 đang có hiệu lực, dự thảo bổ sung đơn vị được quyền cấp biển số xe là công an cấp xã, phường. Đơn vị hành chính này sẽ thực hiện cấp biển xe máy. Công an quận, huyện cấp đăng ký cho ô tô.</p>
                        <p>Khi đăng ký xe mới, chủ xe sử dụng tài khoản định danh điện tử mức độ 2 để làm thủ tục trên cổng dịch vụ công hoặc xuất trình căn cước công dân cho cán bộ làm thủ tục.</p>

                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default News2;
