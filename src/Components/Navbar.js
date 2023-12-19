import React from 'react'
import {
  
    Link
  } from "react-router-dom";

export default function navbar() {
  return (
    <div className='d-flex justify-content-center mt-3'>
        <button type="button" class="btn btn-light"><Link style={{textDecoration: 'none'}} to="/product1">Product 1</Link></button>
        <button type="button" class="btn btn-light ms-3"><Link style={{textDecoration: 'none'}} to="/product2">Product 2</Link></button>
        <button type="button" class="btn btn-light ms-3"><Link style={{textDecoration: 'none'}}to="/product3">Product 3</Link></button>
        
    </div>
  )
}
