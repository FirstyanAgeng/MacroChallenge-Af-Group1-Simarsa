import { Row, Col, Form, Container } from "react-bootstrap";

const Pendaftaran = () => {
  return (
    <>
      <section className="my-5">
        <Container>
          <Row>
            <h1>PENDAFTARAN</h1>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>NIK</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    *NIK harus 10 digit
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    *Sesuai dengan KTP
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>No Hp</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Masukan no.hp anda..."
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Select placeholder="masukan jenis kelamin anda">
                    <option>Pria</option>
                    <option>Wanita</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Poli</Form.Label>
                <Form.Select placeholder="masukan jenis kelamin anda">
                  <option>Poli Umum</option>
                  <option>Poli Gigi</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Dokter</Form.Label>
                <Form.Select placeholder="masukan jenis kelamin anda">
                  <option>Pria</option>
                  <option>Wanita</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Jadwal</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  *jadwal dokter belum tetap
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>JAM</Form.Label>
                <Form.Select placeholder="masukan jenis kelamin anda">
                  <option>Pria</option>
                  <option>Wanita</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Keluhan</Form.Label>
                <Form.Control as="textarea" rows={3} />
                <Form.Text className="text-muted">
                  *Pastikan data sudah terisi dengan benar
                </Form.Text>
              </Form.Group>
              <button type="submit" className="tombol-submit">
                KONFIRMASI
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Pendaftaran;
