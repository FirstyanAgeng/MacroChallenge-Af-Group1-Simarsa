import React from "react";
import Layanan1 from "../assets/images/layanan1.png";
import Dok from "../assets/images/dok1.png";
import { Row, Col, Container, Card, Stack } from "react-bootstrap";
import Layout from "../components/Layout";

const Beranda = () => {
  return (
    <Layout>
      <div className="beranda">
        <h1 className="ms-5 judul">
          Selamat Datang Di Website Resmi <br />
          Rumah Sakit Bunda Purwokerto
        </h1>
      </div>
      <div className="beranda-content">
        <Container>
          <h2 className="pt-5">Sejarah Rumah Sakit Bunda</h2>
          <p>
            Rumah Sakit Bunda Purwokerto merupakan Rumah sakit swasta di bawah
            naungan Yayasan Bunda Purwokerto. Di bangun sejak 09 Agustus 1989
            dan beroperasi sebagai Rumah Bersalin pada 14 juni 1990 yang
            diresmikan oleh Bapak Kepala Kandep Kesehatan Banyumas (Bapak dr.
            Koentoro)
          </p>
          <p>
            <a href="/tentang">Baca Selengkapnya</a>
          </p>
        </Container>
      </div>
      <div className="beranda-layanan container my-5 h-50">
        <h2 className="text-center p-2">Layanan</h2>
        <Container>
          <Row className="container">
            <Col>
              <h3>Layanan Unggulan Kandungan</h3>
              <p>USG Obsetri Ginekologi</p>
              <p>USG Skrining Kelainan Kongenital Janin dan Detail Jantung</p>
              <p>USG 4 Dimensi HD Live Studio</p>
              <p>Penanganan Kehamilan Resiko Tinggi</p>
              <p>
                <a href="/layanan">Baca Selengkapnya</a>
              </p>
            </Col>
            <Col>
              <img src={Layanan1} width="400px" height="220px" />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="beranda-jadwal pb-5">
        <Container>
          <h2 className="pt-5 text-center">Jadwal Dokter</h2>
          <Row className="justify-content-center tengah mt-5">
            <Card style={{ width: "17rem" }} className="isi-kartu me-5">
              <Card.Img variant="top" src={Dok} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
              </Card.Body>
            </Card>

            <Card style={{ width: "17rem" }} className="isi-kartu ms-5">
              <Card.Img variant="top" src={Dok} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Beranda;
