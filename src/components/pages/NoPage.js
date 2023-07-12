import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const NoPage = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="text-center">
          <h1>Error 404: Page Not Found.</h1>
        </Col>
      </Row>
    </Container>
  );
};
