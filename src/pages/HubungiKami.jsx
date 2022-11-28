import map from "../assets/images/map.png";
import { Container, Card, Form, Row, Col } from "react-bootstrap";
import Telp from "../assets/images/logo-telp.png";
import Map from "../assets/images/logo-map.png";
import Message from "../assets/images/logo-sms.png";
import Jam from "../assets/images/logo-jam.png";
import deskDok from "../assets/images/deskdok.png";
import Layout from "../components/Layout";

const HubungiKami = () => {
  return (
    <Layout>
      <div className="hubungi">
        <Card className="text-dark">
          <Card.Img src={deskDok} alt="Card image" />
          <Card.ImgOverlay className="background-filter">
            <Container>
              <h1>Hubungi Kami</h1>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <Container>
          <div className="mt-5 text-center">
            <img src={map} className="img-fluid" width="100%" alt="" />
          </div>
          <div className="my-5">
            <Row>
              {/* 1 */}
              <Col xs="5" className="me-5">
                <h2>Saran</h2>
                <Form className="form">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Subjek</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Pesan</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                </Form>
                <button class="tombol-kirim">SUBMIT</button>
              </Col>
              {/* 2 */}
              <Col xs="3">
                <h2>Hubungi Kami</h2>
                <Card className="card-kami2 mb-3 ">
                  <Card.Body>
                    <img src={Telp} alt="" className="logo-layanan mb-2 " />
                    <Card.Title>GAWAT DARURAT</Card.Title>
                    <Card.Text className="mt-5">
                      <p>(237) 681-812-255</p>
                      <p>(237) 666-331-89</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card-kami2 ">
                  <Card.Body>
                    <img src={Message} alt="" className="logo-layanan mb-2 " />
                    <Card.Title>EMAIL KAMI</Card.Title>
                    <Card.Text>
                      <p>
                        rsu.bunda@gmail.com / bundacare@rsb-pwt.com /
                        mgm@rsb-pwt.com
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              {/* 3 */}
              <Col xs="2">
                <Card className="card-kami mb-3" id="card">
                  <Card.Body>
                    <img src={Map} alt="" className="logo-layanan mb-2 " />
                    <Card.Title>LOKASI</Card.Title>
                    <Card.Text>
                      <p>
                        Jl. Pramuka No.249, Pertabatan, Purwokerto Kidul, Kec.
                        Purwokerto
                      </p>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="card-kami2">
                  <Card.Body>
                    <img src={Jam} alt="" className="logo-layanan mb-2 " />
                    <Card.Title>JAM KERJA</Card.Title>
                    <Card.Text>
                      <p>Mon-Sat 09:00-20:00</p>
                      <p>Sunday Emergency only</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default HubungiKami;
