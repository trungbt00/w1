import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice'; 
import { useTranslation } from 'react-i18next';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();

        const validUser = [
        {
            email: "user@example.com",
            password: "123456",
            name: "Nguyen Van A",
            phonenumber: "0123456789",
            id: "1"
        },
        {
            email: "admin@example.com",
            password: "admin123",
            name: "Admin User",
            phonenumber: "0987654321",
            id: "2"
        },
        {
            email: "guest@example.com",
            password: "guestpass",
            name: "Guest User",
            phonenumber: "0999999999",
            id: "3"
        }
    ];


            const foundUser = validUser.find(
                (user) => user.email === email && user.password === password
            );

            if (foundUser) {
                dispatch(login({
                    email: foundUser.email,
                    name: foundUser.name,
                    phonenumber: foundUser.phonenumber,
                    id: foundUser.id
                }));
                navigate("/home");
            } else {
                setError("Email hoặc mật khẩu không đúng.");
            }
        };


    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={6} className="p-4" style={{ height: 'auto' }}>
                    <h2 className="text-center mb-3">{t('login')}</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label text-md-end">{t('email')}</label>
                            <div className="col-sm-7">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="inputEmail3"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-3 col-form-label text-md-end">{t('password')}</label>
                            <div className="col-sm-7">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="inputPassword3"
                                    placeholder={t('password')}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-8 offset-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        {t('remember')}
                                    </label>
                                </div>
                            </div>
                        </div>
                        {error && (
                            <div className="form-group row">
                                <div className="col-sm-12 text-danger text-center">
                                    {error}
                                </div>
                            </div>
                        )}
                        <div className="form-group row mt-3">
                            <div className="col-sm-8 offset-md-5">
                                <button type="submit" className="btn btn-primary">{t('login')}</button>
                            </div>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
