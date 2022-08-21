import React from 'react'
import pic from '../images/mainBg.png'
import pic1 from '../images/mainBg1.jpg'

export default function main() {
  return (
   <>
    <div>
        <div className='somesection'
          style={{
            height: "100vh",
            width: "100vw",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: `url(${pic})`,
            dataOverlay: "8",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            marginTop: "0px",
          }}
          
        >
      </div>
</div>
   </>
  )
}

