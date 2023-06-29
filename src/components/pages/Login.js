import { useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Login = () => {
    const navigate = useNavigate();
    const { login } = AuthData();
    const [formData, setFormData] = useReducer(
      (formData, newItem) => {
        return { ...formData, ...newItem };
      },
      { userName: "", password: "" }
    );
    const [errorMessage, setErrorMessage] = useState(null);

    const doLogin = async () => {
      try {
        await login(formData.userName, formData.password);
        navigate("/");
      } catch (error) {
        setErrorMessage("Invalid username or password");
      }
    };

    return (
      <div className="page">
        <Container style={{ border: '2px solid black', width: 'fit-content' }}>
          <Row>
            <Col>
              <h2>Login</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="inputs">
                <div className="input">
                  <input
                    placeholder="Username"
                    value={formData.userName}
                    onChange={(e) =>
                      setFormData({ userName: e.target.value })
                    }
                    type="text"
                  />
                </div>
                <div className="input">
                  <input
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ password: e.target.value })
                    }
                    type="password"
                  />
                </div>
                {errorMessage && <div className="error">{errorMessage}</div>}
              </div>
            </Col>
          </Row>
          <Row>
            <div className="inputs">
              <div className="button">
                <button onClick={doLogin}>Log in</button>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    );
};