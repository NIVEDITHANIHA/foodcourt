import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
const Restreview = ({ reviews }) => {
  console.log("reviews", reviews);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(!open)} className='bg-primary text-white rounded border border-white w-50  text-center' style={{ height: '2.5rem' }}>Click here to see the Review</button>

      <hr />
      <Collapse in={open}>

        <div >{reviews?.length > 0 ? reviews?.map((items) => (<>
          <h6>Date :{items.date}</h6>
          <h6>Name :{items.name}</h6>
          <p>Rating : {items.rating}</p>
          <p>Comment : {items.comments}</p>

        </>)) :
          <p>No More Reeviews fin</p>
        }</div>
      </Collapse>
    </>
  )
}

export default Restreview