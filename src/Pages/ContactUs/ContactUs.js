import React from 'react'
import { CardDefault } from '../../Assets/Components/Card/CardDefault'

export const ContactUs = () => {


  const setTitle =()=>{
      document.title = "aku adalah supermen "
  }


  return (
    <div>
     {setTitle()}
     <CardDefault title={"aku ganteng 2"}  isi={"aku adalah supermen 2"}/></div>
  )
}
