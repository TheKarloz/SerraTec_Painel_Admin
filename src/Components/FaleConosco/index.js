import Footer from "../Footer"
import Header from "../Header"
import {Form, Button, Modal } from "react-bootstrap"
import React, {useState} from "react"

const FaleConosco = () => {
      const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => {
            setShow(true);
        }
    return (
        <>
        <Header/>
            <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Formulário</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Form>
            <Button variant="dark" onClick={handleShow}>
        Enviar Formulário
      </Button>
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>CONFIRMAR ENVIO?</Modal.Title>
                </Modal.Header>
               
                <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                    Sair
                </Button>
                <Button variant="dark" onClick={handleClose}>
                    Enviar
                </Button>
                </Modal.Footer>
            </Modal>
        <Footer className="footer"/>
        </>
       
    )
}

export default FaleConosco