import React from 'react'
import pic from '../images/thirdYearImg.jpg'
import pic1 from '../images/sem5.png'
import pic2 from '../images/sem4.png'
import pic3 from '../images/contactUs.png'
export default function thirdYrCSE() {
  return (
    <>
    <div className="third">
     <div className="mainPic"><img src={pic} alt="" style={{width:"100%", height: "500px", opacity:'0.9'}}/></div>
        <div className="sem5 py-4">
      <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Sem-5
    </h5>
      <div className="row">
        <div className="col-3 my-2 px-5"><img src={pic1} alt="loading..." style={{width:"500px", height:"300px"}}/></div>
        <div className="col-6">  
              <button className="button-lg mx-4">FLT/TOC (Automata thory)</button> 
              <button className="button-lg mx-4">DBMS (Database management System)</button> 
              <button className="button-lg mx-4 my-4">DCCN (Computer Networks)</button> 
              <button className="button-lg mx-4">Software Engineering</button>
              <button className="button-lg mx-4">CLOUD COMPUTING (PE-1)</button>  
              <button className="button-lg mx-4">FRENCH (OE-2)</button>  
        </div>
      </div>
        </div>
        <div className="sem4">
      <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Sem-6
    </h5>
    <div className="mainContent px-5 py-2 mx-5" style={{fontFamily: "Cursive, sans-serif", fontSize: "50px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970"}}>Coming soon</div>
    </div>
        </div>
        <div className="row">
        <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Contact Us
    </h5>
        <div className="col-6 mx-5" style={{border: "black"}}>  
              <div><div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Contact Us
                </h5>
                <p className="card-text">
                  <form
                    className="row g-3 py-4"
                  >
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputNamel4"
                        placeholder="Your First Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputNamel4"
                        placeholder="Your Last Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputUserName4"
                        placeholder="Your email Id"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="Number"
                        className="form-control"
                        id="inputNumber4"
                        placeholder="Your Whatsapp number"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputStream4"
                        placeholder="Your Stream"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputStream4"
                        placeholder="Your Graduation Year"
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="button"
                        class="btn btn-outline-success btn-lg"
                        id="buttonCss"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </p>
              </div>
            </div>
        </div>
        <div className="col-3 my-2 py-5 my-5 ml-auto"><img src={pic3} alt="loading..." style={{width:"400px", height:"450px"}}/></div>
      </div>
    
    </>
  )
}
