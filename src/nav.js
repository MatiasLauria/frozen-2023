import React from 'react'
import { FaTruckMoving } from 'react-icons/fa';
import './nav.css'

const Nav = () => {
  return (
    <><div className='free'>
        
            <div className='icon'>
            <FaTruckMoving/>
            </div> 
            <p>Envío gratis en compras mayores a $10.000</p>
        
    </div>
    </>
  )
}

export default Nav