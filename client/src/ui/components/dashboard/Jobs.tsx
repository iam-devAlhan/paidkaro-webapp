export default function Jobs() {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h3>Jobs</h3>
        <button type="button" className="btn" style={{backgroundColor: "#009e84", color: "#ffff"}}>Create Job Ad</button>
      </div>
      
      <div className="container">
        
        <div className="row">
          <div className="col-12">
            <div
              className="card mb-3"
              style={{width: "100%", backgroundColor: "#ffffffff"}}
            >
              <div className="card-header">Meta</div>
              <div className="card-body">
                <h5 className="card-title">AI Engineer</h5>
                <p className="card-text">
                  We are hiring motivated individual to develop and deploy ML Models and host it on HuggingFace Endpoint and develop Agents using LangChain, llamaIndex
                </p>
                <p className="card-text">
                  Experience: 3.5 Years
                </p>
                <p className="card-text">
                  Skills: Python, Pandas, FastAPI, Sci-kit Learn or TensorFlow, Transformers, LangChain or llamaindex
                </p>
                <button type="button" className="btn btn-dark">Apply Job</button>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div
              className="card mb-3"
              style={{width: "100%", backgroundColor: "#ffffffff"}}
            >
              <div className="card-header">Uber Inc.</div>
              <div className="card-body">
                <h5 className="card-title">Senior Mobile Application Engineer</h5>
                <p className="card-text">
                  We are hiring a senior mobile application developer that can contribute for the development of Uber App. The candidate must have the ability to solve real world problems
                </p>
                <p className="card-text">
                  Experience: 4 Years
                </p>
                <p className="card-text">
                  Skills: React Native, Redux, MongoDB, Express JS, REST Api
                </p>
                <button type="button" className="btn btn-dark">Apply Job</button>
              </div>
            </div>
            <div className="col-12">
            <div
              className="card mb-3"
              style={{width: "100%", backgroundColor: "#ffffffff"}}
            >
              <div className="card-header"></div>
              <div className="card-body">
                <h5 className="card-title">Senior Mobile Application Engineer</h5>
                <p className="card-text">
                  We are hiring a senior mobile application developer that can contribute for the development of Uber App. The candidate must have the ability to solve real world problems
                </p>
                <p className="card-text">
                  Experience: 4 Years
                </p>
                <p className="card-text">
                  Skills: React Native, Redux, MongoDB, Express JS, REST Api
                </p>
                <button type="button" className="btn btn-dark">Apply Job</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
