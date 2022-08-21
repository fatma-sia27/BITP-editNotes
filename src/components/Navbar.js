import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
  return (
    <>
    <div class="shadow p-3 bg-white rounded" style={{cursor: "pointer"}}>BITP editNotes
        <div className="wrap " style={{display: "flex", alignItems: "end", justifyContent: "end"}}>
        <button className="button">Log In</button>
  <button className="button" >SignUp</button>
</div>
        </div>
    </>
  )
}

