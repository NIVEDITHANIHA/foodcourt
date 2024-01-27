import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Restcard = ({ ResturanntArray }) => {
  console.log(ResturanntArray);
  return (

    <div>
      <Link to={`/restview/${ResturanntArray.id}`} className='text-decoration-none'>
        <Card className='m-3' style={{ width: '20rem' }}>
          <Card.Img variant="top" className='img-fluid ' width={'100%'} height={'12rem'} src={ResturanntArray.photograph} />
          <Card.Body>
            <Card.Title className='text-center text-primary'>{ResturanntArray.name}</Card.Title>
            <hr />
            <Card.Text className='d-flex justify-content-between text-primary'>
              <p>{ResturanntArray.neighborhood}</p>
              <p>cuisine_type:{ResturanntArray.cuisine_type}</p>
            </Card.Text>
          </Card.Body>
        </Card>

      </Link>


    </div >

  )
}

export default Restcard