import { Link } from "react-router-dom";
import { AuthContext } from "../../auth/AuthWrapper";
import React, { useContext, useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const AddAssignment = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const userAuthority = user?.authority;

  const [branch, setBranch] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [reviewVideoUrl, setReviewVideoUrl] = useState("");
  const [assignments, setAssignments] = useState([]);

  const isReviewer = userAuthority === "ROLE_REVIEWER";

  useEffect(() => {
    // Fetch assignments from the server
    fetchAssignments();
  }, []);

  const fetchAssignments = () => {
    fetch("/api/assignments")
      .then((response) => response.json())
      .then((data) => {
        setAssignments(data);
      })
      .catch((error) => {
        console.error("Error fetching assignments", error);
      });
  };

  const handleBranchChange = (event) => {
    setBranch(event.target.value);
  };

  const handleGithubUrlChange = (event) => {
    setGithubUrl(event.target.value);
  };

  const handleReviewVideoUrlChange = (event) => {
    setReviewVideoUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const assignmentData = {
      branch,
      githubUrl,
      reviewVideoUrl,
    };

    // Make an HTTP POST request to create the assignment
    fetch("/api/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(assignmentData),
    })
      .then((response) => {
        if (response.ok) {
          // Assignment created successfully
          console.log("Assignment created successfully");
          // Perform any necessary actions (e.g., redirect to another page)
        } else {
          // Failed to create assignment
          console.error("Failed to create assignment");
        }
      })
      .catch((error) => {
        console.error("Error creating assignment", error);
      });
  };

  return (
    <div className="page">
      <Container
        style={{
          padding: "10px",
          border: "2px solid black",
          width: "fit-content",
        }}
      >
        <Row>
          <Col>
            {userAuthority === "ROLE_LEARNER" && (
              <h2>
                Assignments (<small>Needs Work</small>)
              </h2>
            )}
            {userAuthority === "ROLE_REVIEWER" && (
              <h2>
                Assignment (<small>In Review</small>)
              </h2>
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="inputs">
              {userAuthority === "ROLE_LEARNER" && (
                <div className="input">
                  <select onChange={handleBranchChange}>
                    <option value="#">Select Assignment</option>
                    {assignments.map((assignment) => (
                      <option key={assignment.id} value={assignment.branch}>
                        {assignment.number}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              <div className="input">
                <input
                  required
                  placeholder="Github URL"
                  type="text"
                  value={githubUrl}
                  onChange={handleGithubUrlChange}
                  disabled={isReviewer}
                />
              </div>
              <div className="input">
                <input
                  required
                  placeholder="Branch"
                  type="text"
                  value={branch}
                  onChange={handleBranchChange}
                  disabled={isReviewer}
                />
              </div>
              {userAuthority === "ROLE_REVIEWER" && (
                <div className="input">
                  <input
                    required
                    placeholder="Review Video URL"
                    type="text"
                    value={reviewVideoUrl}
                    onChange={handleReviewVideoUrlChange}
                  />
                </div>
              )}
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-2">
          <div className="inputs">
            <button className="success-button" onClick={handleSubmit}>
              Submit
            </button>
            {userAuthority === "ROLE_REVIEWER" && (
              <button className="logout-btn">
                <Link
                  style={{ color: "#FFF", textDecoration: "none" }}
                  to={"/"}
                >
                  Reject
                </Link>
              </button>
            )}
            <button className="normal-button">
              <Link
                style={{ color: "#FFF", textDecoration: "none" }}
                to={"/dashboard"}
              >
                Back to Dashboard
              </Link>
            </button>
          </div>
        </Row>
      </Container>
    </div>
  );
};
