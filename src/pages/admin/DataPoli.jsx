import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Nav,
  Table,
  ToggleButton,
  ToggleButtonGroup,
  Navbar,
} from "react-bootstrap";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { ADMIN_DASHBOARD, DATA_POLIKLINIK, DATA_PASIEN } from "../../router";
import { AiFillHome, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FaSort } from "react-icons/fa";
import AdminLayout from "../../components/AdminLayout";

const DataPoli = () => {
  const navigate = useNavigate();
  return (
    <AdminLayout>
      <div className="dataPoli">
        <Container className="container2 container mb-4">
          <Row>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <AiFillHome size="25px" className="ho" />
                    <Nav.Link href={ADMIN_DASHBOARD}>Home</Nav.Link>
                    <AiOutlineRight className="ho1" />
                    <Nav.Link href={DATA_POLIKLINIK}>Data Poliklinik</Nav.Link>
                    <AiOutlineRight className="ho1" />
                    <Nav.Link style={{ color: "black" }}>Data Poli</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Row>
        </Container>

        <Container className="cont">
          <Row>
            <Card className="CardDataDokter card">
              <Card.Body>
                <Row className="mb-4">
                  <Col>
                    <Card.Title className="card-title pl-4">
                      <h4>Data Poli Paru</h4>
                    </Card.Title>
                  </Col>
                </Row>

                <Container className="container-fluid text-center mb-5">
                  <Table bordered responsive>
                    <thead className="table-light">
                      <tr>
                        <th>
                          Status
                          <FaSort />
                        </th>
                        <th>Antrian</th>
                        <th>Nama Lengkap</th>
                        <th>Jadwal</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          <p className="sed">Sedang diproses</p>
                        </th>
                        <td>UM01</td>
                        <td>Tengku Mahmudi</td>
                        <td>24/11/2022</td>
                        <td className="ad">
                          <Button
                            className="sed sed1"
                            onClick={() => navigate(DATA_PASIEN)}
                          >
                            Lihat
                          </Button>
                          <Button className="sed sed2" variant="danger">
                            Hapus
                          </Button>
                        </td>
                      </tr>

                      <tr>
                        <th>
                          <p className="sed">Sedang diproses</p>
                        </th>
                        <td>UM01</td>
                        <td>Tengku Mahmudi</td>
                        <td>24/11/2022</td>
                        <td className="ad">
                          <Button
                            className="sed sed1"
                            onClick={() => navigate(DATA_PASIEN)}
                          >
                            Lihat
                          </Button>
                          <Button className="sed sed2" variant="danger">
                            Hapus
                          </Button>
                        </td>
                      </tr>

                      <tr>
                        <th>
                          <p className="sed">Sedang diproses</p>
                        </th>
                        <td>UM02</td>
                        <td>Wahyu Tia</td>
                        <td>24/11/2022</td>
                        <td className="ad">
                          <Button
                            className="sed sed1"
                            onClick={() => navigate(DATA_PASIEN)}
                          >
                            Lihat
                          </Button>
                          <Button className="sed sed2" variant="danger">
                            Hapus
                          </Button>
                        </td>
                      </tr>

                      <tr>
                        <th>
                          <p className="sed">Sedang diproses</p>
                        </th>
                        <td>UM03</td>
                        <td>Zepi Rara</td>
                        <td>24/11/2022</td>
                        <td className="ad">
                          <Button
                            className="sed sed1"
                            onClick={() => navigate(DATA_PASIEN)}
                          >
                            Lihat
                          </Button>
                          <Button className="sed sed2" variant="danger">
                            Hapus
                          </Button>
                        </td>
                      </tr>

                      <tr>
                        <th>
                          <p className="sed">Sedang diproses</p>
                        </th>
                        <td>UM04</td>
                        <td>Rian</td>
                        <td>23/11/2022</td>
                        <td className="ad">
                          <Button
                            className="sed sed1"
                            onClick={() => navigate(DATA_PASIEN)}
                          >
                            Lihat
                          </Button>
                          <Button className="sed sed2" variant="danger">
                            Hapus
                          </Button>
                        </td>
                      </tr>

                      <tr>
                        <th>
                          <p className="sed">Sedang diproses</p>
                        </th>
                        <td>UM05</td>
                        <td>Wahyu</td>
                        <td>23/11/2022</td>
                        <td className="ad">
                          <Button
                            className="sed sed1"
                            onClick={() => navigate(DATA_PASIEN)}
                          >
                            Lihat
                          </Button>
                          <Button className="sed sed2" variant="danger">
                            Hapus
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p className="sed">Sedang diproses</p>
                        </th>
                        <td>UM06</td>
                        <td>Mamat</td>
                        <td>23/11/2022</td>
                        <td className="ad">
                          <Button
                            className="sed sed1"
                            onClick={() => navigate(DATA_PASIEN)}
                          >
                            Lihat
                          </Button>
                          <Button className="sed sed2" variant="danger">
                            Hapus
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p className="sed">Sedang diproses</p>
                        </th>
                        <td>UM07</td>
                        <td>adi</td>
                        <td>23/11/2022</td>
                        <td className="ad">
                          <Button
                            className="sed sed1"
                            onClick={() => navigate(DATA_PASIEN)}
                          >
                            Lihat
                          </Button>
                          <Button className="sed sed2" variant="danger">
                            Hapus
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <p className="sed">Sedang diproses</p>
                        </th>
                        <td>UM08</td>
                        <td>Anton</td>
                        <td>23/11/2022</td>
                        <td className="ad">
                          <Button
                            className="sed sed1"
                            onClick={() => navigate(DATA_PASIEN)}
                          >
                            Lihat
                          </Button>
                          <Button className="sed sed2" variant="danger">
                            Hapus
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <div class="d-flex justify-content-end">
                    <BsFillArrowLeftCircleFill size="35px" className="kir" />
                    <ToggleButtonGroup
                      type="radio"
                      name="options"
                      className="left flex-row mb-3 ms-1"
                    >
                      <ToggleButton id="tbg-radio-1" className="clr">
                        1
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-2" className="wt">
                        /
                      </ToggleButton>
                      <ToggleButton id="tbg-radio-3" className="clr">
                        2
                      </ToggleButton>
                    </ToggleButtonGroup>
                    <BsFillArrowRightCircleFill size="35px" className="kan" />
                  </div>
                </Container>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </AdminLayout>
  );
};

export default DataPoli;
