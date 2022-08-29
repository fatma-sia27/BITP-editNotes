import React , {useState} from 'react'
import pic from '../images/mainBg.png'
import pic1 from '../images/about.png'
import pic2 from '../images/aasPic.png'
import pic3  from '../images/tannuPic.png'
import pic4 from '../images/contactUs.png'
import pic5 from '../images/logo.png'
import {BrowserRouter as Router, Link} from 'react-router-dom';
export default function main() {
  const [user , setUser] = useState({
    firname:"" , lasname:"" , email:"" ,wsp:"" , str:"" , grad:""  
  })

  let name , value ;
  const handleInputs = (e) =>{
      console.log(e)
      name = e.target.name
      value = e.target.value
      setUser ({...user , [name]:value})
  }

  const PostData = async(e) =>{
    e.preventDefault()
    const {firname , lasname , email , wsp, str, grad} = user
    const res  = await fetch("/BITP-editNotes" , {
        method : "POST" ,
        headers: {
            "Content-Type" : "application/json"
        }, 
        body : JSON.stringify({
          
          firname , lasname , email , wsp, str, grad
          
          
        })
    })
  
    const data = await res.json()
  
    if(res.status===422 || !data){
       window.alert("invalid submission")
       console.log("invalid submission")
    } else{
       window.alert("valid submission")
       console.log("valid submission")
       
        
    }
  }





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
           <div class="row shadow py-2 mx-2 bg-white rounded" style={{cursor: "pointer" , fontFamily: "Alumni Sans Collegiate One", fontSize: "20px", letterSpacing: "1.0px", fontWeight: "900"}}>
      <div className="col-1"><img src={pic5} alt="" style={{width: "50px"}}/></div> 
      <div className="col-2 px-0 p-0">BITP editNotes</div>
        <div className="wrap py-0" style={{display: "flex", alignItems: "end", justifyContent: "end"}}>



        {/* <button className="button" >Log In</button>
  <button className="button" >SignUp</button> */}
  <Link to="/login">
        <button className="button"  >Log In</button>
        </Link>
        <Link to = "/signup">
   <button className="button" >SignUp</button> 
</Link>
</div>
</div>
      </div>
</div>
<div className="row chose px-4 py-4 ms-5">
 <div className='col-sm-8 mt-5 px-4 py-4'><h1 className='p-3' style={{fontFamily: "Cursive, sans-serif", fontSize: "50px",textTransform: "uppercase",
  letterSpacing: "1.5px", fontWeight: "500"}}>About Us</h1>
  <br />
  <br />
  <div className='text' style={{fontSize: "20px"}}>As we know that we face a lot of issue when we are in 2nd year (specially in 3rd sem) as this is the first time where we get to study our core papers. We don't have proper guidance and also notes. Everyone try to connect to senior and ask for notes so that they will get help in end-semester exams.
  We too faced this issue and thus came up with the solution to collect all the notes at the same place so that students don't have to ask for notes here and there.</div>
  <br />
  <br />
<div className="text" style={{fontSize: "20px"}}> We at, BITP editNotes, hace collection of almost notes of all the subject related to CSE(Computer science and engg) , we will soon expand this to different branches.</div></div>
 <div className="col-sm-4 mt-5 px-2 py-4"> <img src={pic1} alt="" style={{width:"350px"}}/></div>
</div>
<div className="card card-1 px-4 py-4 ms-5 center">
<div> <h1 className='p-3' style={{fontFamily: "Cursive, sans-serif", fontSize: "50px",textTransform: "uppercase",
  letterSpacing: "1.5px", fontWeight: "500"}}>TEAM <span>&#129309;</span></h1>
  <br />
  <br /> <div className="row row-cols-1 row-cols-md-3 g-4 px-4 py-4 ms-5" style={{justifyContent:"center", alignItems:"center", display:"flex", textAlign:"center"}}>
          {/* Aasia fatma details */}

          <div className="col center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pic2}
                className="card-img-top"
                alt="..."
                style={{ width: "285px" }}
              />
              <div className="card-body" style={{ backgroundColor: "#2f4f4f" }}>
                <h4
                  className="card-title"
                  style={{ backgroundColor: "#2f4f4f", color: "#deb887" }}
                >
                  Aasia Fatma
                </h4>
                <p
                  className="card-text"
                  style={{
                    backgroundColor: "#2f4f4f",
                    color: "white",
                    fontFamily: "Cochin",
                  }}
                >
                  A 3rd year Undergraduate student at BIT Mesra. A coding
                  enthusists. A React Js developer. 
                </p>
                <button type="button" class="btn btn-light">
                  Connect with Aasia
                </button>
              </div>
            </div>
          </div>

          {/* Tannu pria details */}

          <div className="col center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={pic3}
                className="card-img-top"
                alt="..."
                style={{ width: "350px", height: "250px" }}
              />
              <div className="card-body" style={{ backgroundColor: "#2f4f4f" }}>
                <h4
                  className="card-title"
                  style={{ backgroundColor: "#2f4f4f", color: "#deb887" }}
                >
                  Tannu Priya
                </h4>
                <p
                  className="card-text"
                  style={{
                    backgroundColor: "#2f4f4f",
                    color: "white",
                    fontFamily: "Cochin",
                  }}
                >
                  A 3rd year Undergraduate student at BIT Mesra. A coding
                  enthusists. A MERN developer. 
                </p>
                <button type="button" class="btn btn-light">
                <a href="https://www.linkedin.com/in/tannu-priya-14907b21b" style={{color: "black"}}>Connect with Tannu</a>
                </button>
              </div>
            </div>
          </div>
        </div>
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
                   method = "POST"
                    className="row g-3"
                  >
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputNamel4"
                        placeholder="Your First Name"
                        name = "firname"
                        value = {user.firname}
                        onChange = {handleInputs}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputNamel4"
                        placeholder="Your Last Name"
                        name = "lasname"
                        value = {user.lasname}
                        onChange = {handleInputs}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputUserName4"
                        placeholder="Your email Id"

                        name = "email"
                        value = {user.email}
                        onChange = {handleInputs}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="Number"
                        className="form-control"
                        id="inputNumber4"
                        placeholder="Your Whatsapp number"
                        name = "wsp"
                        value = {user.wsp}
                        onChange = {handleInputs}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputStream4"
                        placeholder="Your Stream"
                        name = "str"
                        value = {user.str}
                        onChange = {handleInputs}
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        id="inputStream4"
                        placeholder="Your Graduation Year"
                        name = "grad"
                        value = {user.grad}
                        onChange = {handleInputs}
                      />
                    </div>
                    <div className="col-12">
                      <button
                      
                        type="button"
                        onClick={PostData}
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
        <div className="col-3 my-2 ml-auto"><img src={pic4} alt="loading..." style={{width:"400px", height:"450px"}}/></div>
      </div>
   </>
  )
}

