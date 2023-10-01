import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import '../Component/OrderForm.css';
function OrderForm(selectedItem) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(selectedItem.paraData.title);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [itemName, setitemName] = useState('');
    const [otp, setOtp] = useState('');
    const [otpGenerated, setOtpGenerated] = useState(false);

    const generateOtp = () => {
        const generatedOtp = Math.floor(1000 + Math.random() * 9000);
        setOtp(generatedOtp.toString());
        setOtpGenerated(true);
        alert(`system has send an OTP to Your Mobile Number And Email`);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!otpGenerated) {
            alert("Please generate OTP first.");
            return;
        }

        const details = {
            Iteme : selectedItem.paraData.title,
            Name: name,
            Email: email,
            Address: address,
            Mobile : phone,
            Amount : selectedItem.paraData.price,
        };
        alert("Your payment is succesfully:\n" + JSON.stringify(details, null, 2));
    };


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Buy Now
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className='bg'
            >

                <Form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedItem.paraData.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" required onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Item Name</Form.Label>
                            <Form.Control type="text" value={selectedItem.paraData.title} readOnly onChange={(e) => setitemName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="text" value={selectedItem.paraData.price} readOnly onChange={(e) => setAmount(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder='Enter Your Full Nmae' required onChange={(e) => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea" rows={3} required onChange={(e) => setAddress(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="tel" placeholder='Enter Your Mobile Number' pattern="[0-9]{10}" onChange={(e) => setPhone(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control type="text" placeholder='Enter Your Account Number' pattern="[0-9]{10,12}" title="Account number must be 10 digits long." required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>OTP</Form.Label>
                            <Form.Control type="text" placeholder='Auto Generate OTP' value={otp} readOnly required />
                        </Form.Group>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="success" onClick={generateOtp}>OTP</Button>
                        <Button type="submit" variant="primary">Pay Now</Button>
                    </Modal.Footer>
                </Form>
            </Modal>

        </>
    );
}

export default OrderForm;