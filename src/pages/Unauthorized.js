import React from 'react';
import { Container } from 'react-bootstrap';

const Unauthorized = () => {
    return (
        <Container className="text-center mt-5">
            <h2>403 - Không có quyền truy cập</h2>
            <p>Bạn không có quyền để xem nội dung này.</p>
        </Container>
    );
};

export default Unauthorized;
