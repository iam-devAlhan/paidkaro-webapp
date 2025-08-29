import postPlaceholder from "../../../assets/post-image-placeholder.webp";
import postPlaceholder2 from "../../../assets/post-image-placeholder-2.webp";
import postPlaceholder3 from "../../../assets/post-placeholder-3.jpg";
import styles from "./css/posts.module.css"
export default function Projects() {
  return (
    <>
      <h3>Your Projects</h3>
      <button type="button" className="btn btn-primary"><i className="bi bi-plus-circle"></i> Create Project</button>
      <div className="row mt-4">
        <div className="col-12 col-md-4 col-sm-6 col-lg-3">
          <div
            className={`card h-100 ${styles["post-card"]}`}
          >
            <img
              src={postPlaceholder}
              className={`card-img-top ${styles["post-image"]}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Minimalist Logo Design</h5>
              <p className="card-text">
                Want these type of minimalist designs for our new startups, If you have good portfolio, feel free to send proposal
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
        <div className="col-12 col-md-4 col-sm-6 col-lg-3">
          <div
            className={`card h-100 ${styles["post-card"]}`}
          >
            <img
              src={postPlaceholder2}
              className={`card-img-top ${styles["post-image"]}`}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Twitch Gaming Banners</h5>
              <p className="card-text">
                Yo, i want a good person who can design gaming banner like this for me on Twitch, I stream live videos of Fortnite Gameplays, Send your proposal so that I can look
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
        <div className="col-12 col-md-4 col-sm-6 col-lg-3">
          <div
            className={`card h-100 ${styles["post-card"]}`}
          >
            <img
              src={postPlaceholder3}
              className={`card-img-top ${styles["post-image"]}`}
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
