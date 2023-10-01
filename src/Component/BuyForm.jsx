import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OrderForm from './OrderForm';

function BuyForm({ orderId, orderData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Find the item that matches the orderId
  const selectedItem = orderData.find(item => item.id === orderId);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Order Now
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem ? selectedItem.title : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex justify-content-center align-items-center'><img src={selectedItem ? selectedItem.image : ''} alt="" srcset="" width={'250px'} height={'250px'}/></div>
          <p className='p-2' style={{textAlign:'justify'}}>{selectedItem ? selectedItem.description : ''}</p>
          <h4>PRICE : {selectedItem ? selectedItem.price : ''}</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <OrderForm paraData={selectedItem}/>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default BuyForm;
