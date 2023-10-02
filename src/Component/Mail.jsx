import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function Mail() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const sendMail =()=>{
        alert("Your Mail Sucessfully Send");
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Send To Mail
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Form onSubmit={sendMail}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                        E-Shopping
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>To</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Form</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" value={"P@E-shope.gmail.com"} readOnly required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control as="textarea" rows={3} required  />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button type='submit' variant="primary">
                            Submit
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default Mail;