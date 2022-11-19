import { Card, Container, Row, Col } from "react-bootstrap";
import deskDok from "../assets/images/deskdok.png";
import Dok from "../assets/images/dok1.png";
import Layout from "../components/Layout";

const JadwalDokter = () => {
  return (
    <Layout>
      <div className="dokter">
        <Card className="text-dark">
          <Card.Img src={deskDok} alt="Card image" />
          <Card.ImgOverlay>
            <Container>
              <h1>Jadwal Dokter</h1>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <div className="p-5 dokter-content">
          <Container>
            <Row>
              <Col>
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={Dok} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={Dok} />
                  <Card.Body>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={Dok} />
                  <Card.Body>
                    <Card.Text className="isi-kartu">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={Dok} />
                  <Card.Body>
                    <Card.Text className="isi-kartu">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={Dok} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "17rem" }} className="isi-kartu">
                  <Card.Img variant="top" src={Dok} />
                  <Card.Body>
                    <Card.Text className="desk-card">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default JadwalDokter;
