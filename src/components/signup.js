import React from 'react'

export default function signup() {
  return (
    <>
    {/* form Login */}
   <div className="body">
   <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
          BIT'P editNotes
    </h5>
    <div >
    <div className="center px-2 py-2"  style={{top: "30px", justifyContent:"center", alignItems:"center", display:"flex", textAlign:"center"}}>
    <div className="col-sm-6 px-2 py-2">
            <div className="card border border-success" style={{maxWidth: "800px" , minWidth:"500px", maxHeight:"1000px",  width: "50%",
  height: "80%"}}>
              <div className="card-body">
                <h5 className="card-title shadow-lg p-3 mb-5 bg-body rounded">
                  Sign Up here
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
                        placeholder="Your User Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="Password"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Your Password"
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
            </div>
    </div>
   </div>
    </>
  )
}
