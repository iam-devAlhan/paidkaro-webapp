import postPlaceholder from "../../../assets/post-image-placeholder.webp";
import postPlaceholder2 from "../../../assets/post-image-placeholder-2.webp";
import postPlaceholder3 from "../../../assets/post-placeholder-3.jpg";

export default function Projects() {
  return (
    <>
      <h3>Your Projects</h3>
      <button type="button" className="btn btn-primary"><i className="bi bi-plus-circle"></i> Create Project</button>
      <div className="row row-cols-3 mt-4">
        <div className="col">
          <div
            className="card h-100"
            style={{ width: "18rem", border: "2px solid #009e84" }}
          >
            <img
              src={postPlaceholder}
              width={300}
              height={169}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Minimalist Logo Design</h5>
              <p className="card-text">
                I am looking for any one who can design minimalist logos like that
              </p>
              <a
                href="#"
                className="btn"
                style={{ backgroundColor: "#009e84", color: "#ffff" }}
              >
                Send Proposal
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card h-100"
            style={{ width: "18rem", border: "2px solid #009e84" }}
          >
            <img
              src={postPlaceholder2}
              width={300}
              height={169}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">GFX Banner Design</h5>
              <p className="card-text">
                Hey, I want someone to design gfx banner for twitch streaming like fortnite gaming ones. If interested send proposals by clicking it.
              </p>
              <a
                href="#"
                className="btn"
                style={{ backgroundColor: "#009e84", color: "#ffff" }}
              >
                Send Proposal
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card h-100"
            style={{ width: "18rem", border: "2px solid #009e84" }}
          >
            <img
              src={postPlaceholder3}
              width={300}
              height={169}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Mobile App UI Design</h5>
              <p className="card-text">
                I am CEO of Exa, LLC located in US and I want experienced UI Designer to design workflows and UI on Figma for our mobile app, interested one send proposals
              </p>
              <a
                href="#"
                className="btn"
                style={{ backgroundColor: "#009e84", color: "#ffff" }}
              >
                Send Proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
