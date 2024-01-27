import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Restcard from '../components/Restcard';
import { useDispatch, useSelector } from 'react-redux';
import { ResturanntApi } from '../redux/resturantslice';
const Home = () => {
  const dispatch = useDispatch()

  const ResturanntArray = useSelector((state) => state.resturantslice.resturantArray)
  console.log(ResturanntArray);

  const array = ResturanntArray.restaurants
  console.log(array);

  useEffect(() => {
    dispatch(ResturanntApi())
  }, [])

  return (

    <div>
      <Container>
        <Row>
          {array?.length > 0 ? array?.map((items) => (


            <Col lg={4} md={4} sm={6}>
              <Restcard ResturanntArray={items} />
            </Col>



          )) : <p>Nothing To Display</p>
          }
        </Row>
      </Container>

    </div>
  )
}

export default Home