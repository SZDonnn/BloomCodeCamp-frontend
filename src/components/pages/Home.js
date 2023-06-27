import { Link } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DummyImg from '../../img/dummy-img.jpg';


export const Home = () => {
     const { user, logout } = AuthData()

     return (
          <div className="page">

               <Container>
                    <Row>
                         <Col className="mb-4">
                              <h3>Welcome to the</h3>
                              <h2>Assignment Review App</h2>
                         </Col>
                    </Row>
                    <Row>
                         <Col>
                              <div className="home-card">
                                   <img src={DummyImg} className="dummy-image" alt="Dummy" />
                                   <div className="home-container">
                                        <h4><b>Lorem Ipsum</b></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                   </div>
                              </div>
                         </Col>
                         <Col>
                              <div className="home-card">
                                   <img src={DummyImg} className="dummy-image" alt="Dummy" />
                                   <div className="home-container">
                                        <h4><b>Lorem Ipsum</b></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                   </div>
                              </div>
                         </Col>
                         <Col>
                              <div className="home-card">
                                   <img src={DummyImg} className="dummy-image" alt="Dummy" />
                                   <div className="home-container">
                                        <h4><b>Lorem Ipsum</b></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                   </div>
                              </div>
                         </Col>
                    </Row>
                    <Row>
                         <Col className="text-center mt-4">
                              {user.isAuthenticated ? (
                                   <div className="logout-btn">
                                        <Link style={{ color: '#FFF', textDecoration: 'none' }} to={'/'} onClick={logout}>Log out</Link>
                                   </div>
                              ) : (
                                   <div className="login-btn">
                                        <Link style={{ color: '#FFF', textDecoration: 'none' }} to={'login'}>Log in</Link>
                                   </div>
                              )}
                         </Col>
                    </Row>
               </Container>
          </div>
     )
}