import React from 'react'
import { FaClipboardList } from "react-icons/fa";
import { IoEyeOutline, IoPencilSharp, IoTrashOutline,IoLogoUsd, IoClose, IoAdd } from "react-icons/io5";

export  function ButtonClip() {
    return (
      <div className='buttonPequeño'>
          <a href="#" ><FaClipboardList className='icons2'/></a>
      </div>
    )
  } 

  export  function ButtonShow() {
    return (
      <div className='buttonPequeño'>
          <a href="#" ><IoEyeOutline className='icons2'/></a>
      </div>
    )
  } 

  export  function ButtonPencil() {
    return (
      <div className='buttonPequeño'>
          <a href="#" ><IoPencilSharp className='icons2'/></a>
      </div>
    )
  } 

  export  function ButtonTrash() {
    return (
      <div className='buttonPequeño'>
          <a href="#" ><IoTrashOutline className='icons2'/></a>
      </div>
    )
  } 

  export  function ButtonMoney() {
    return (
      <div className='buttonPequeño'>
          <a href="#" ><IoLogoUsd className='icons2'/></a>
      </div>
    )
  } 

  export  function ButtonPlus() {
    return (
      <div className='buttonPequeño'>
          <a href="#" ><IoAdd className='icons2'/></a>
      </div>
    )
  } 


  export  function ButtonClose() {
    return (
      <div className='buttonPequeño'>
          <a href="#" ><IoClose className='icons2'/></a>
      </div>
    )
  } 

  