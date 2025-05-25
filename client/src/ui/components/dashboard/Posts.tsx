import postPlaceholder from "../../../assets/post-image-placeholder.webp";
import postPlaceholder2 from "../../../assets/post-image-placeholder-2.webp";
import postPlaceholder3 from "../../../assets/post-placeholder-3.jpg";
export default function Posts() {
  return (
    <>
      <h3>Posts</h3>
      <div className="row row-cols-3">
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
                I will design minimalist logo in just $12. For anything just dm
                me on my profile
              </p>
              <a
                href="#"
                className="btn"
                style={{ backgroundColor: "#009e84", color: "#ffff" }}
              >
                Check Post
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
                I will design banner for gaming channels twitch, youtube for
                just $7
              </p>
              <a
                href="#"
                className="btn"
                style={{ backgroundColor: "#009e84", color: "#ffff" }}
              >
                Check Post
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
              <h5 className="card-title">UI/UX Design</h5>
              <p className="card-text">
                I will design UI for the mobile application on figma or Adobe XD
                in just $30
              </p>
              <a
                href="#"
                className="btn"
                style={{ backgroundColor: "#009e84", color: "#ffff" }}
              >
                Check Post
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
