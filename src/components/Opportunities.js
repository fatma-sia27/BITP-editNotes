import React from 'react'
import pic from '../images/OPPORTUNITY.png'
import pic2 from '../images/opportunitysecYr.png'
export default function Opportunities() {
  return (
    <>
    <div className="opportunity">
        <div className="image"><img src={pic} alt="loading..." style={{width: "100%", height: "500px"}}/></div>
        <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Opportunities for 1st Year students...
    </h5>
    <div className="first">
    <div className="row">
    <div className="col-3 my-2 mx-2"><img src={pic2} alt="loading..." style={{width:"500px", height:"400px"}}/></div>
        <div className="col-6">  
              <button className="button-lg mx-4 my-2 ml-5 px-5">WE(Women Engineers) Program</button> 
              <button className="button-lg mx-4 my-2 ml-5 px-5">Codess Cafe</button>   
              <button className="button-lg mx-4 my-2 ml-5 px-5">Grass Hooper Celebration (GHC)</button>
              <button className="button-lg mx-4 my-2 ml-5 px-5">Girl Script summer of code</button>      
        </div>
      </div>
    </div>
    <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Opportunities for 2nd Year students...
    </h5>
    <div className="second">
    <div className="row">
    <div className="col-3 my-2 mx-2"><img src={pic2} alt="loading..." style={{width:"500px", height:"400px"}}/></div>
        <div className="col-6">  
              <button className="button-lg mx-4 my-2 ml-5 px-5">Flipkart Runway</button> 
              <button className="button-lg mx-4 my-2 ml-5 px-5">Generation Google Scolarship</button> 
              <button className="button-lg mx-4 my-2 ml-5 px-5">Flipkart Girls Wanna Code</button> 
              <button className="button-lg mx-4 my-2 ml-5 px-5">LinkedIn Coachin Program</button> 
              <button className="button-lg mx-4 my-2 ml-5 px-5">Microsoft Engage</button> 
              <button className="button-lg mx-4 my-2 ml-5 px-5">Codeathon</button>
              <button className="button-lg mx-4 my-2 ml-5 px-5">Microsoft Tech-set-go</button>  
              <button className="button-lg mx-4 my-2 ml-5 px-5">Flipkart Grid</button>  
              <button className="button-lg mx-4 my-2 ml-5 px-5">Girl Script summer of code</button>
              <button className="button-lg mx-4 my-2 ml-5 px-5">Google summer of code</button>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
