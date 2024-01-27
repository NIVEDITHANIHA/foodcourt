import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Restreview from '../components/Restreview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Restview = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  const { id } = useParams()
  console.log(id);

  const Selector = useSelector((state) => state.resturantslice.resturantArray.restaurants)
  console.log(Selector);



  let setShowdata = []
  for (let i = 0; i < Selector.length; i++) {
    if (Selector[i].id == id) {
      console.log(Selector[i]);
      setShowdata.push(Selector[i])
    }

  }
  console.log(setShowdata);


  
  const Foodid = Selector.find((item) => {
    return item.id == id
  })
  console.log(Foodid);

  return (
    <div>
      <Row>
        <Col md={1}></Col>
        <Col md={3} className='mt-3'>
          <img src={Foodid.photograph} alt='imge' width={'100%'} height={'300px'} className='img-fluid' />
        </Col>
        <Col md={7}>
          <hr />
          <h1 className='text-center text-primary'>Resturant Details</h1>
          <ListGroup >
            <ListGroup.Item>Neighbourhood : {Foodid.neighborhood}</ListGroup.Item>
            <ListGroup.Item>Cusine Type : {Foodid.cuisine_type}</ListGroup.Item>
            <ListGroup.Item>Address : {Foodid.address}</ListGroup.Item>

            <ListGroup.Item className='text-center'>
              <button onClick={handleShow} className='bg-primary text-white rounded border border-white w-25' style={{ height: '2.5rem' }}>Operating Hours</button>
              <Restreview reviews={Foodid.reviews} />

            </ListGroup.Item>
          </ListGroup>


        </Col>
        <Col md={1}></Col>
      </Row>



      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-primary'>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>Monday : {Foodid.operating_hours.Monday}</ListGroup.Item>
            <ListGroup.Item>Tuesday :{Foodid.operating_hours.Tuesday}</ListGroup.Item>
            <ListGroup.Item>Wednesday :{Foodid.operating_hours.Wednesday}</ListGroup.Item>
            <ListGroup.Item>Thursday :{Foodid.operating_hours.Thursday}</ListGroup.Item>
            <ListGroup.Item>Friday :{Foodid.operating_hours.Friday}</ListGroup.Item>
            <ListGroup.Item>Saturday :{Foodid.operating_hours.Saturday}</ListGroup.Item>
            <ListGroup.Item>Sunday :{Foodid.operating_hours.Sunday}</ListGroup.Item>

          </ListGroup>
        </Modal.Body>

      </Modal>
    </div>
  )
}

export default Restview