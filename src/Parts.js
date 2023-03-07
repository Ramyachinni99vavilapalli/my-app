import React from 'react'
import { FaAddressBook, FaEnvelope, FaGlobe } from 'react-icons/fa';

const Parts = ({z,c1,p,e,w}) => {
  return (
    <>
    <div className='cards'>
         <div className='label'>
            <h2>{c1}</h2>
            </div>
            <div className='items'>
        <div className='avatars'>
    <img src={z} alt=""/>
    </div>
<div className='links'>
    <div className='d'>
    <div className='icons'><FaAddressBook/></div>
    <div className='contact'><h3> {p}</h3></div>
 </div>
  
 <div className='d'>
    <div className='icons'><FaEnvelope/></div>
    <div className='contact'><h3>{e} </h3></div>
 </div>
  
 <div className='d'>
    <div className='icons'><FaGlobe /></div>
    <div className='contact'><h3>{w} </h3></div>
 </div>
  </div>
             </div>
         </div>  

      </>

      );
}
export default Parts

