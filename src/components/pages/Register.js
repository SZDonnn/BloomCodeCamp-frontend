import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useReducer(
    (formData, newItem) => {
      return { ...formData, ...newItem };
    },
    { username: "", password: "", role: "" }
  );
  const [errorMessage, setErrorMessage] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const doRegister = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsRegistered(true);
        navigate("/dashboard", { state: { isRegistered: true } });
      } else {
        setErrorMessage("Failed to register. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="page">
      <Container style={{ border: "2px solid black", width: "fit-content" }}>
        <Row>
          <Col>
            <h2>Register</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="inputs">
              <div className="input">
                <input
                  required
                  placeholder="Username"
                  value={formData.username}
                  onChange={(e) => setFormData({ username: e.target.value })}
                  type="text"
                />
              </div>
              <div className="input">
                <input
                  required
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ password: e.target.value })}
                  type="password"
                />
              </div>
              <div className="input">
                <select
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ role: e.target.value })}
                >
                  <option value="">Select Role</option>
                  <option value="reviewer">Reviewer</option>
                  <option value="learner">Learner</option>
                </select>
              </div>
              {errorMessage && <div className="error">{errorMessage}</div>}
            </div>
          </Col>
        </Row>
        <Row>
          <div className="inputs">
            <div className="button">
              <button onClick={doRegister}>Register</button>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
