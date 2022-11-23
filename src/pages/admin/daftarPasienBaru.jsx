import AdminLayout from "../../components/AdminLayout";
import { Row, Col, Form, Container, Nav, Navbar, Card } from "react-bootstrap";
import { ADMIN_DASHBOARD,  DATA_DOKTER} from "../../router";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";


import "../../styles/admin.css";

const DaftarPasienBaru = () => {
    return(
        <AdminLayout>
            <div className="daftarPasienBaru">
                <Container>
                    <Row>
                    <Navbar bg="light" expand="lg">
                        <Container className="container2 container mb-4">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <AiFillHome size="25px" className="ho"/>
                                <Nav.Link href={ADMIN_DASHBOARD}>Home</Nav.Link><AiOutlineRight className="ho1"/>
                                <Nav.Link style={{color: 'black'}}>Pendaftaran</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                        </Navbar>
                    </Row>
                </Container>

                <Container className="cont">
                    <Row>
                        <Card className="cardJadwalPraktik card">
                            <Card.Body>
                            <Row>
                            <Card.Title>
                                <h4 className="bold mb-4">PENDAFTARAN</h4>
                            </Card.Title>
                            </Row>
                        
                            <Container className="mb-4">
                            <Row>
                            <Col sm={6}>
                            <Form>
                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label className="bold">NIK</Form.Label>
                                <Form.Control type="email" placeholder="Masukkan nomor NIK" />
                                <Form.Text style={{color: 'black'}}>
                                    *NIK harus 16 Digit
                                </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label className="bold">Nama Lengkap</Form.Label>
                                <Form.Control type="email" placeholder="Masukkan Nama Pasien" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicEmail">
                                <Form.Label className="bold">No Hp</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Masukan No.HP Pasien"
                                />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                <Form.Label className="bold">Jenis Kelamin</Form.Label>
                                <Form.Select placeholder="masukan jenis kelamin anda">
                                    <option>Pria</option>
                                    <option>Wanita</option>
                                </Form.Select>
                                </Form.Group>
                            </Form>
                            </Col>

                            <Col sm={6} className="ps-5">
                                <Form>
                                <Form.Group className="mb-4">
                                <Form.Label className="bold">POLI</Form.Label>
                                <Form.Select placeholder="-- Pilih POLI --">
                                    <option>-- POLI PARU --</option>
                                    <option>-- POLI ANAK --</option>
                                    <option>-- POLI OBSTETRI & GINEKOLOGI --</option>
                                    <option>-- POLI RADIOLOGI --</option>
                                    <option>-- POLI SARAF --</option>
                                    <option>-- POLI PENYAKIT DALAM --</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                <Form.Label className="bold">Dokter</Form.Label>
                                <Form.Select placeholder="-- Pilih POLI --">
                                    <option>dr. Wahyu Mustiadi, Sp. P. M.Kes. (PARU)</option>
                                    <option>dr. Tiara Nurlita Sari, Sp.A. (ANAK)</option>
                                    <option>dr. I Made Dikky Kalsa, Sp. A.(ANAK)</option>
                                    <option>dr. Sutrisno, M.Kes, Sp. OG, Subsp.ONK. (KANDUNGAN)</option>
                                    <option>dr. Budi Irawan, SP.OG. (KANDUNGAN)</option>
                                    <option>dr. Anisah Amalia, Sp.Rad. (Radiologi)</option>
                                    <option>dr. Yohanes William Prasetyo, Sp.S. (Saraf)</option>
                                    <option>dr. I Gede Arintan, Sp.PD-KGEH, M.Kom, MMR. (P.DALAM)</option>
                                    <option>dr. Achmad Heppy Oktavianto, M.Sc, Sp.PD. (P.DALAM)</option>
                                </Form.Select>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                <Form.Label className="bold">Jadwal</Form.Label>
                                <Form.Control type="date">
                                </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                <Form.Label className="bold">Jam</Form.Label>
                                <Form.Select placeholder="------">
                                    <option>-- 08.00 - 11.00 --</option>
                                    <option>-- 09.00 - 11.00 --</option>
                                    <option>-- 10.00 - 11.00 --</option>
                                    <option>-- 13.00 - 17.00 --</option>
                                    <option>-- 14.00 - 17.00 --</option>
                                    <option>-- 15.00 - 17.00 --</option>
                                    <option>-- 16.00 - 17.00 --</option>
                                </Form.Select>
                                <Form.Text style={{color: 'black'}}>
                                    *Pastikan data terisi dengan benar
                                </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                <Form.Label className="bold">Keluhan</Form.Label>
                                <Form.Control as="textarea" rows={4} placeholder="Keluhan pasien">
                                </Form.Control>
                                </Form.Group>
                                <button type="submit" className="tombol-submit sub">
                                    KONFIRMASI
                                </button>
                                </Form>
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

export default DaftarPasienBaru;