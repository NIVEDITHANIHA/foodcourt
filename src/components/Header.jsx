import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { searchNeighbour } from '../redux/resturantslice';
import { useDispatch } from 'react-redux';
const Header = () => {
  const dispatch = useDispatch()
  return (
    <div>



      <Navbar className=" container-fluid bg-primary d-flex justify-content-between px-5 w-100">

        <div>
          <img src="https://th.bing.com/th/id/R.890ce293ddef4caaa8ae6022102f18a8?rik=JIgJzV9In%2fkhIQ&riu=http%3a%2f%2fclipartmag.com%2fimages%2ffood-plate-clipart-39.jpg&ehk=3Jj0EGAJ0N5Ju5g7HE3zbg1f2mHpwe1b2Qy4DVWC06g%3d&risl=&pid=ImgRaw&r=0"
            alt="No Image" className="img-fluid rounded-circle" width={'100px'} height={'100px'} />

          <h1 className='text-white '>FOOD COURT</h1>
        </div>


        <input onChange={(e) => dispatch(searchNeighbour(e.target.value))} type="text" className="form-control w-25 rounded ms-5 " placeholder='Search Neighbour' />

      </Navbar>





    </div>
  )
}

export default Header