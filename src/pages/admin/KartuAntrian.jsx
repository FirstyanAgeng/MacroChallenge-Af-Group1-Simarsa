import { Container, Card, Row } from "react-bootstrap";
import "../../styles/admin.css";

const KartuAntrian = () =>{
    return(
        <div className="kartuAntrian pageAntrian">
            <Container className="cont9 text-center">
            <h3 className="t9 bold">
                KARTU ANTRIAN
            </h3>
            <Card className="cardAntrian card mt-5">
            <Card.Title className="cardTA">
                <h4>No Antrian</h4>
            </Card.Title>
                
            <Card.Body>
                <Row className="content9">
                <h2 className="mt-5 mb-4" style={{color:"black"}}>
                <strong>UM01</strong>
                <span>
                  <h3 style={{color:"black"}}>
                    Kamis
                  </h3>
                </span>
              </h2>
                </Row>
                <Row className="content9">
                <h2 className="mt-5 mb-4" style={{color:"black"}}>
                <strong>Dokter</strong>
                <span>
                  <h3 style={{color:"black"}}>
                dr. Wahyu Mustiadi, Sp. P. M.Kes 
                  </h3>
                </span>
              </h2>
                </Row>

            </Card.Body>
            </Card>
            </Container>
        </div>
    );
};

export default KartuAntrian;