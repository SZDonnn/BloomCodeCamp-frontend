import { Link, useLocation } from "react-router-dom";
import { AuthData, AuthContext } from "../../auth/AuthWrapper";
import React, { useContext } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import DummyImg from "../../img/dummy-img.jpg";

export const Dashboard = () => {
  const { logout } = AuthData();
  const location = useLocation();
  const isRegistered = location?.state?.isRegistered || false;

  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const userAuthority = user?.authority;

  return (
    <div className="page">
      {isRegistered && (
        <div className="success-message">Registration successful!</div>
      )}

      <Container>
        <Row>
          <Row className="text-center">
            {userAuthority === "ROLE_LEARNER" ? (
              <Col>
                <h1>Learner Dashboard</h1>
              </Col>
            ) : (
              <Col>
                <h1>Reviewer Dashboard</h1>
              </Col>
            )}
          </Row>
          <Row className="mb-4">
            <Stack
              className="justify-content-center"
              direction="horizontal"
              gap={3}
            >
              {userAuthority === "ROLE_LEARNER" && (
                <div className="normal-button">
                  <Link
                    style={{ color: "#FFF", textDecoration: "none" }}
                    to={"/add-assignment"}
                  >
                    Add New Assignment
                  </Link>
                </div>
              )}

              <div className="logout-btn">
                <Link
                  style={{ color: "#FFF", textDecoration: "none" }}
                  to={"/"}
                  onClick={logout}
                >
                  Log out
                </Link>
              </div>
            </Stack>
          </Row>
          <Row>
            {userAuthority === "ROLE_LEARNER" ? (
              <Col>
                <h4>Needs Work</h4>
              </Col>
            ) : (
              <Col>
                <h4>In Review</h4>
              </Col>
            )}
          </Row>
          <Row
            style={{
              border: "2px solid black",
              width: "fit-content",
              padding: "10px 0",
              margin: "0 0 20px 0",
            }}
          >
            <Col className="d-xs-none d-sm-none d-md-block">
              <div className="home-card">
                <img src={DummyImg} className="dummy-image" alt="Dummy" />
                <div className="home-container">
                  <h6>
                    <b>Lorem Ipsum</b>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col className="d-xs-none d-sm-none d-md-block">
              <div className="home-card">
                <img src={DummyImg} className="dummy-image" alt="Dummy" />
                <div className="home-container">
                  <h6>
                    <b>Lorem Ipsum</b>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="home-card">
                <img src={DummyImg} className="dummy-image" alt="Dummy" />
                <div className="home-container">
                  <h6>
                    <b>Lorem Ipsum</b>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="home-card">
                <img src={DummyImg} className="dummy-image" alt="Dummy" />
                <div className="home-container">
                  <h6>
                    <b>Lorem Ipsum</b>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
        <Row>
          <Row>
            {userAuthority === "ROLE_LEARNER" ? (
              <Col>
                <h4>Completed</h4>
              </Col>
            ) : (
              <Col>
                <h4>Submitted for Review / Resubmitted</h4>
              </Col>
            )}
          </Row>
          <Row
            style={{
              border: "2px solid black",
              width: "fit-content",
              padding: "10px 0",
              margin: "0 0 20px 0",
            }}
          >
            <Col>
              <div className="home-card">
                <img src={DummyImg} className="dummy-image" alt="Dummy" />
                <div className="home-container">
                  <h6>
                    <b>Lorem Ipsum</b>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="home-card">
                <img src={DummyImg} className="dummy-image" alt="Dummy" />
                <div className="home-container">
                  <h6>
                    <b>Lorem Ipsum</b>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="home-card">
                <img src={DummyImg} className="dummy-image" alt="Dummy" />
                <div className="home-container">
                  <h6>
                    <b>Lorem Ipsum</b>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="home-card">
                <img src={DummyImg} className="dummy-image" alt="Dummy" />
                <div className="home-container">
                  <h6>
                    <b>Lorem Ipsum</b>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
        <Row>
          <Row>
            {userAuthority === "ROLE_LEARNER" ? (
              <Col>
                <h4>In Review</h4>
              </Col>
            ) : (
              <Col>
                <h4>Completed</h4>
              </Col>
            )}
          </Row>
          <Row
            style={{
              border: "2px solid black",
              width: "fit-content",
              padding: "10px 0",
              margin: "0 0 20px 0",
            }}
          >
            <Col>
              <div className="home-card">
                <img src={DummyImg} className="dummy-image" alt="Dummy" />
                <div className="home-container">
                  <h6>
                    <b>Lorem Ipsum</b>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="home-card">
                <img src={DummyImg} className="dummy-image" alt="Dummy" />
                <div className="home-container">
                  <h6>
                    <b>Lorem Ipsum</b>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="home-card">
                <img src={DummyImg} className="dummy-image" alt="Dummy" />
                <div className="home-container">
                  <h6>
                    <b>Lorem Ipsum</b>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Col>
            <Col>
              <div className="home-card">
                <img src={DummyImg} className="dummy-image" alt="Dummy" />
                <div className="home-container">
                  <h6>
                    <b>Lorem Ipsum</b>
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};
