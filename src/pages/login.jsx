import {Container, Card, Form, Button} from "react-bootstrap";
import React from "react";
import Logo1 from "../assets/img/logo1.png";
import AdminHome from "../pages/adminHome";
import Header from "../components/header";


const Login = () => {
    const [admin, setLogin] = React.useState(false);
    if (admin){
        return <>
        <Header/>
        <AdminHome/>
        {/* <AdminHome/> */}
        {/* <h1>halo selamat datang</h1> */}
        </>
      }

  return (
    <>
      <section className="login">
        <Container style={{ width: '500px'}} className="mt-3 p-5">
            <Card>
            <Card.Img variant="top" src={Logo1} />
            <Card.Body>
        <Card.Title className="log">LOGIN</Card.Title>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="hdua">ID</Form.Label>
        <Form.Control type="email" placeholder="Masukkan ID kamu" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="hdua">Password</Form.Label>
        <Form.Control type="password" placeholder="Masukkan Password" />
      </Form.Group>
      <div className="d-grid gap-2">
      <Button variant="primary" size="lg" onClick= {function(){
  return setLogin(true);
}} >
        MASUK
      </Button></div>
    </Form>
      </Card.Body>
            </Card>
        </Container>
      </section>
    </>
  );
};

export default Login;
