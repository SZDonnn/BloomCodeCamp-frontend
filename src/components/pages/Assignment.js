import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DummyImg from "../../img/dummy-img.jpg";

import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthWrapper";

export const Assignment = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    // Fetch assignment data from the API
    fetch("http://localhost:8080/api/assignments")
      .then((response) => response.json())
      .then((data) => {
        // Set the retrieved assignments in the state
        setAssignments(data);
      })
      .catch((error) => {
        console.error("Error fetching assignments", error);
      });
  }, []);



  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const userAuthority = user?.authority;

  return (
    <div className="page">
      <Container>
        <h2>List of Assignment</h2>

        <Row className="justify-content-center text-center">
          {assignments.map((assignment) => (
            <Col key={assignment.id} sm={6} md={4} lg={3} xl={2}>
              <Card className="assignment-card" style={{ height: "auto", minWidth: "180px" }}>
                <Card.Img variant="top" src={assignment.imageSrc} />
                <Card.Body>
                  <Card.Title>Assignment {assignment.id}</Card.Title>
                  <img src={DummyImg} className="dummy-image p-0 m-0" alt="Dummy" />
                  <Card.Link>{assignment.githubUrl}</Card.Link>
                  <Card.Text>{assignment.branch}</Card.Text>
                  {userAuthority === "ROLE_REVIEWER" && (
                    <div className="normal-button">
                      <Link
                        style={{ color: "#FFF", textDecoration: "none" }}
                        to={"/add-assignment"}
                      >
                        Add New Assignment
                      </Link>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
