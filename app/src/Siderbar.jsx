import React from 'react'
import { FaClipboardList, FaAlignLeft, FaUsers, FaRegUserCircle } from "react-icons/fa";



function Siderbar(){
   return( 
   <div className='container'>
        <nav>
            <ul className='ul'>
                <li className='list'><FaClipboardList className='icons'/></li>
                <li className='list'><FaUsers className='icons'/></li>
                <li className='list'><FaAlignLeft className='icons'/></li>
                <div className='prueba'>
                    <li className='list'><FaRegUserCircle className='icons'/></li>
                </div>
                
            </ul>
        </nav>
    </div>
    )
}

export default Siderbar;