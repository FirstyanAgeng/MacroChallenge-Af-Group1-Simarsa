import { Row, Col, Form, Container } from "react-bootstrap";
import { DAFTAR_BERHASIL } from "../router";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const Pendaftaran = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <section className="my-5">
        <Container>
          <Row>
            <h1>PENDAFTARAN</h1>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="bold">NIK</Form.Label>
                  <Form.Control type="email" placeholder="Masukan NIK anda" />
                  <Form.Text className="text-muted">
                    *NIK harus 10 digit
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="bold">Nama Lengkap</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    *Sesuai dengan KTP
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="bold">No Hp</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukan no.hp anda..."
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
            <Col>
              <Form.Group className="mb-3">
                <Form.Label className="bold">Poli</Form.Label>
                <Form.Select placeholder="Pilih poliklinik yang akan dituju">
                  <option>Poli Umum</option>
                  <option>Poli Gigi</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Dokter</Form.Label>
                <Form.Select placeholder="Pilih Dokter">
                  <option>Pria</option>
                  <option>Wanita</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="bold">Jadwal</Form.Label>
                <Form.Control type="email" placeholder="masukan jadwal" />
                <Form.Text className="text-muted">
                  *Silahkan masukan jadwal
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="bold">JAM</Form.Label>
                <Form.Select placeholder="masukan jenis kelamin anda">
                  <option>Pagi</option>
                  <option>Siang</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="bold">Keluhan</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <Form.Text className="text-muted">
                  *Pastikan data sudah terisi dengan benar
                </Form.Text>
              </Form.Group>
              <button
                type="submit"
                className="tombol-submit"
                onClick={() => navigate(DAFTAR_BERHASIL)}
              >
                KONFIRMASI
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Pendaftaran;
