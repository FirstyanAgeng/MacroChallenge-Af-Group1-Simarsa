import map from "../assets/images/map.png";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import deskDok from "../assets/images/deskdok.png";
import Layout from "../components/Layout";

const HubungiKami = () => {
  return (
    <Layout>
      <div className="hubungi">
        <Card className="text-dark">
          <Card.Img src={deskDok} alt="Card image" />
          <Card.ImgOverlay>
            <Container>
              <h1>Hubungi Kami</h1>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <Container>
          <div className="mt-5 text-center">
            <img src={map} className="img-fluid" width="100%" alt="" />
          </div>
          <div className="mt-5">
            <Row>
              <Col>
                <h2>Hubungi Kami</h2>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <Button>Submit</Button>
                </Form>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default HubungiKami;
