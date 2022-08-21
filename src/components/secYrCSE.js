import React from 'react'
import pic from '../images/secYearImg.jpg'
import pic1 from '../images/sem3.png'
import pic2 from '../images/sem4.png'
import pic3 from '../images/contactUs.png'
export default function secYrCSE() {
  return (
   <>
   <div className="second">
     <div className="mainPic"><img src={pic} alt="" style={{width:"100%", height: "400px", opacity:'0.9'}}/></div>
        <div className="sem3 py-4">
      <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Sem-3
    </h5>
      <div className="row">
        <div className="col-3 my-2 px-5"><img src={pic1} alt="loading..." style={{width:"500px", height:"300px"}}/></div>
        <div className="col-6">  
              <button className="button-lg mx-4">DM (Discrete Mathematics)</button> 
              <button className="button-lg mx-4">OOPs (Java)</button> 
              <button className="button-lg mx-4 my-4">OOPs (C++)</button> 
              <button className="button-lg mx-4">DSD (Digital System Design)</button>
              <button className="button-lg mx-4">BIOLOGY</button>  
              <button className="button-lg mx-4">BIC</button>  
        </div>
      </div>
        </div>
        <div className="sem4">
      <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Sem-4
    </h5>
      <div className="row">
        <div className="col-6">  
              <button className="button-lg mx-4 my-2 ml-5 px-5">NM (Numerical Methods)</button> 
              <button className="button-lg mx-4 my-2 ml-5 px-5">OS (Operating System)</button> 
              <button className="button-lg mx-4 my-2 ml-5 px-5">COA</button> 
              <button className="button-lg mx-4 my-2 ml-5 px-5">DAA</button> 
              <button className="button-lg mx-4 my-2 ml-5 px-5">UH</button> 
              <button className="button-lg mx-4 my-2 ml-5 px-5">EEGC (OE-1)</button>
              <button className="button-lg mx-4 my-2 ml-5 px-5">EVS</button>  
              <button className="button-lg mx-4 my-2 ml-5 px-5">ItWs (IT Workshop)</button>  
        </div>
        <div className="col-3 my-2 ml-auto"><img src={pic2} alt="loading..." style={{width:"500px", height:"300px"}}/></div>
      </div>
        </div>
        <div className="row">
        <h5 className="center card-title shadow-lg p-3 mb-5 bg-body rounded" style={{display: "flex", justifyContent: "center", fontFamily: "Cursive, sans-serif", fontSize: "30px",textTransform: "uppercase",
  letterSpacing: "1.0px", color: "#191970" , backgroundColor: "#d8bfd8"}}>
          Contact Us
    </h5>
        <div className="col-6 px-5 mx-5 py-5 my-5" style={{border: "black"}}>  
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
    </div>
   </>
  )
}
