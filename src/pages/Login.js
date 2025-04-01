import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Login = () => {
    return (
        <Container className="mt-4">
            <Row className="justify-content-center"> 
                <Col md={6} className="p-4" style={{ height: 'auto' }}>
                    <h2 className="text-center mb-3  ">Đăng Nhập</h2> 
                    <form className="form-horizontal">
                        <div className="form-group row"> 
                            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label text-md-end">Email</label> 
                            <div className="col-sm-7"> 
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-3 col-form-label text-md-end">Password</label> 
                            <div className="col-sm-7">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-8 offset-md-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                        Remember me
                                    </label>
                                </div>  
                            </div>
                        </div>
                        <div className="mb-4"></div>
                        <div className="form-group row">
                            <div className="col-sm-8 offset-md-5">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;