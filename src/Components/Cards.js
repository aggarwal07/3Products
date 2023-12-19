import React from 'react'

export default function Cards(props) {
  return (
    <div className='d-flex d-flex justify-content-center mt-5' >
      <div style={{width:"35vw"}}>
        <img className='img-fluid' src={`${props.img1}`} alt="..." />
        <img className='img-fluid' src={`${props.img2}`} alt="..." />
        

      </div>
      <div style={{width:"35vw"}}>
        <p>Home/Category</p>
        <div className='d-flex justify-content-between mt-5'>
        <h2>Product {props.number} Name</h2>
        <button type="button" class="btn btn-dark">Category</button>
        </div>
        <div className='d-flex mt-3'>
        <p className = "ms-2"style={{border:"1px solid black"}}>{props.info1}</p>
        <p className = "ms-2" style={{border:"1px solid black"}}>{props.info2}</p>

        </div>
        <p className='mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam aliquid nihil a nemo tenetur officiis quos, ullam similique repellat esse culpa iusto quia facilis facere.</p>

        <div className='mt-5 d-flex justify-content-between'>
        <button type="button" class="btn btn-success">Call Author</button>
        <button type="button" class="btn btn-light">Share</button>
        </div>
        <div className='d-flex mt-3'>
            <p className = "ms-2" style={{border:"1px solid black"}}>{props.specifications}</p>
            <p  className = "ms-2" style={{border:"1px solid black"}}>{props.specifications}</p>

        </div>

      </div>
    </div>
  )
}
