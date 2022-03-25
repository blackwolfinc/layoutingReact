import React, { useState } from 'react'
import { Link  ,useNavigate } from 'react-router-dom'
import './Hompage.css'
export const Hompage = () => {
  let handleInput = ""
  let Navigate = useNavigate ();
  // use State React hook
  const [first, setFirst] = useState(false)
  const [nama, setNama] = useState("")
  const [kota, setKota] = useState("Blitar")



  let Showmodal = false 


  const PindahHalaman =()=>{
    // window.location.href="/about"
    // Navigate("../about", { replace: true });
    setKota("Jember")
    kota = "jember"
    setFirst("")
    Showmodal= true
  }

  const HandleInput = (e)=>{
    console.log(e.target.value)
    handleInput= e.target.value
  }




  return (
    <div className='tes'>
  {console.log(first)}
  {Showmodal ? <h1>Ini Alert</h1>: null}
  {first ? <h1>Ini Alert 2</h1>: null}

    <button onClick={()=>{PindahHalaman()}}>Sign Up</button>

    

    </div>
  )
}
