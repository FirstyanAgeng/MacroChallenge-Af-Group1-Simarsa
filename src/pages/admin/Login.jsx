import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React from "react";
import { ADMIN_DASHBOARD } from "../../router";
import Logo1 from "../../assets/images/logo1.png";
<<<<<<< HEAD
import "../../styles/admin.css";

const Login = () => {
  const navigate = useNavigate();
=======
import "../../styles/admin.css"
const Login = () => {
  const navigate = useNavigate();

>>>>>>> coba1

  return (
    <>
      <section className="login">
        <Container style={{ width: "500px" }} className="mt-3 p-5">
          <Card>
            <Card.Img variant="top" src={Logo1} />
            <Card.Body>
              <h3 className="log">LOGIN</h3>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="hdua">ID</Form.Label>
                  <Form.Control type="email" placeholder="Masukkan ID kamu" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="hdua">Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Masukkan Password"
                  />
                </Form.Group>
                <div className="d-grid gap-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => navigate(ADMIN_DASHBOARD)}
<<<<<<< HEAD
                  >
=======
                    >
>>>>>>> coba1
                    MASUK
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </section>
    </>
  );
};

export default Login;
