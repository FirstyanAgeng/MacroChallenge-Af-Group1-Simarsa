import { Container, Card, Row, Col, Nav,} from "react-bootstrap";
import AdminLayout from "../../components/AdminLayout";
import { NavLink } from "react-router-dom";
import { ADMIN_DASHBOARD, DETAIL_DOKTER} from "../../router";
import { useNavigate } from "react-router-dom";
import "../../styles/admin.css";


const DataPoliklinik = () =>{
    const navigate = useNavigate();
    return(
    <AdminLayout>
        <div className="DataPoliklinik">
        <Container className="container2 container mb-4">
        <Row>
            <Nav className="me-auto">
            <Nav.Item>
                <NavLink className="nav-link nv" to={ADMIN_DASHBOARD}>Home</NavLink>
                <NavLink className="nav-link nv">Data Poliklinik</NavLink>
            </Nav.Item>
            </Nav>
        </Row>
        </Container>
        
        <Container className="cont">
            <Row>
                <Card className="CardDataDokter card">
                    <Card.Body>
                        <Row>
                        <Col>
                        <Card.Title className="card-title pl-4">
                            <h5>Data Poliklinik</h5>
                        </Card.Title>
                        </Col>
                        </Row>
                        

                        {/* card poli dokter */}
                        <Container className="container-fluid text-center mb-5">
                        <Row>
                            <Col sm={6}>
                                <Card className="card2 content mt-4">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI PARU</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Wahyu Mustiadi, Sp.P. M. Kes</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-3">
                                    <button class="btnDataDokter btn btnpad"  onClick={() => navigate(DETAIL_DOKTER)}>Lihat data</button>
                                    <h4 className="prog">13/20 kuota terisi</h4>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>
                            
                            <Col sm={6}>
                                <Card className="card2 content mt-3">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI RADIOLOGI</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Anisah Amalia, Sp.P.Rad</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-4">
                                    <button class="btnDataDokter btn btnpad" onClick={() => navigate(DETAIL_DOKTER)}>Lihat data</button>
                                    <h4 className="prog prog3">7/20 kuota terisi</h4>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>

                        </Row>
                        <Row className="mt-5">
                            <Col sm={6}>
                                <Card className="card2 content mt-3">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI ANAK</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Tiara Nurlita Sari, Sp.A.</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-4">
                                    <button class="btnDataDokter btn btnpad " onClick={() => navigate(DETAIL_DOKTER)}>Lihat data</button>
                                    <h4 className="prog prog1">20/20 kuota terisi</h4>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>
                            
                            <Col sm={6}>
                                <Card className="card2 content mt-3">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI SARAF</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Yohanes Wiliam Prasetyo, Sp.S</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-4">
                                    <button class="btnDataDokter btn btnpad" onClick={() => navigate(DETAIL_DOKTER)}>Lihat data</button>
                                    <h4 className="prog prog3">7/20 kuota terisi</h4>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col sm={6}>
                                <Card className="card2 content mt-3">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI ANAK</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Imade Dikky Kalsa, Sp.A.</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-4">
                                    <button class="btnDataDokter btnpad btn" onClick={() => navigate(DETAIL_DOKTER)}>Lihat data</button>
                                    <h4 className="prog prog1">20/20 kuota terisi</h4>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>
                            
                            <Col sm={6}>
                                <Card className="card2 content mt-3">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI P.DALAM</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.I Gede Arinton, Sp.PD-KGEH,M.Kom,MMR</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-4">
                                    <button class="btnDataDokter btn btnpad" onClick={() => navigate(DETAIL_DOKTER)}>Lihat data</button>
                                    <h4 className="prog prog2">3/20 kuota terisi</h4>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col sm={6}>
                                <Card className="card2 content mt-3">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI KANDUNGAN</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Sutrisno, M.Kes., SP.OG,Subsp.ONK</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-4">
                                    <button class="btnDataDokter btnpad btn" onClick={() => navigate(DETAIL_DOKTER)}>Lihat data</button>
                                    <h4 className="prog prog2">3/20 kuota terisi</h4>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>
                            
                            <Col sm={6}>
                                <Card className="card2 content mt-3">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI P.DALAM</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Achmad Happy Oktavianto, M.Sc, Sp.PD</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-4">
                                    <button class="btnDataDokter btn btnpad"onClick={() => navigate(DETAIL_DOKTER)}>Lihat data</button>
                                    <h4 className="prog prog2">3/20 kuota terisi</h4>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                        <Col sm={6}>
                                <Card className="cardDo1 content mt-3">
                                <Row>
                                    <Col  className="mt-4">
                                        <h6><strong>POLI KANDUNGAN</strong></h6>
                                        <h6 className="text mt-2 mb-5">dr.Budi Irawan, M.Sc, Sp.OG</h6>
                                    </Col>
                                    <Col className="mt-3 text-center mt-4">
                                    <button class="btnDataDokter btn btnpad" onClick={() => navigate(DETAIL_DOKTER)}>Lihat data</button>
                                    <h4 className="prog prog2">3/20 kuota terisi</h4>
                                    </Col>
                                </Row>
                                </Card>
                            </Col>
                        </Row>

                        </Container>
                    </Card.Body>
                </Card>
            </Row>
            
        </Container>
        </div>
      </AdminLayout>  
    );
};

export default DataPoliklinik;