export default function Jobs() {
  return (
    <>
      <div className="d-flex justify-content-between p-3">
        <h3>Jobs</h3>
        <button type="button" className="btn btn-dark">Create Job Ad</button>
      </div>
      
      <div className="container">
        
        <div className="row">
          <div className="col-12">
            <div className="card mb-3 border border-dark border-1">
              <div className="card-header bg-dark text-white">Meta</div>
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
              className="card mb-3 border border-dark border-1"
       
            >
              <div className="card-header bg-dark text-white">Uber Inc.</div>
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
              className="card mb-3 border border-dark border-1"
            >
              <div className="card-header bg-dark text-white">OpenAI</div>
              <div className="card-body">
                <h5 className="card-title">Associate AI Engineer</h5>
                <p className="card-text">
                  We are hiring an associate AI Engineer who can work improving GPT-4o-Mini by fine-tuning LLMs</p>
                <p className="card-text">
                  Experience: 4 Years
                </p>
                <p className="card-text">
                  Skills: Tensorflow, PyTorch
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
