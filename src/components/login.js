import React from 'react'
import pic2 from '../images/google.png'
import pic3 from '../images/linkedin.png'
import pic4 from '../images/github.png'
export default function login() {
    const myStyle = {
        width: "50px",  
      }
  return (
    <>
   {/* form Login */}


<div className="body">
<h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
          BIT'P editNotes
    </h5>
<div id="Form">
<div className="center px-2 py-2" style={{ top: "30px", justifyContent:"center", alignItems:"center", display:"flex", textAlign:"center"}}>
            <div className="card border border-success bg secondary" style={{backgroundColor: "#c0c0c0"}}>
              <div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Login Here...
                </h5>
                <p className="card-text">
                <form
                    className="row g-3 py-4"
                  >
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        id="inputUserName4"
                        placeholder="Your User Name"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="Password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Your Password"
                      />
                    </div>
                    <div className="col-12">
                      <span>Or</span>
                      <button className='btn btn-outline-link'><img className="px-2" src={pic2} alt="" style={myStyle}/></button>
                      <button className='btn btn-outline-link'><img className="px-2" src={pic3} alt="" style={myStyle}/></button>
                      <button className='btn btn-outline-link'><img className="px-2" src={pic4} alt="" style={myStyle}/></button>
                    </div>
                    <div className="col-12">
                      <button
                        type="button"
                        class="buttonCss"
                        id="buttonCss"
                      >
                       Login
                      </button>
                    </div>
                  </form>
                </p>
              </div>
            </div>
            </div>
</div>
</div>
    </>
  )
}
