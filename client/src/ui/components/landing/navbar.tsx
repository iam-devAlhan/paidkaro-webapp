import styles from "../landing/css/navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#009E84" }}
        data-bs-theme="dark"
      >
        <div className="container-fluid align-items-center">
          <a className="navbar-brand" href="#">
            <h2>LOGO</h2>
          </a>
          <button
            className={`navbar-toggler ${styles["navbar-toggler-custom"]}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-start justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-lg-center align-items-start">
              <li className="nav-item">
                <a
                  className={`nav-link ${styles["nav-link-custom"]}`}
                  aria-current="page"
                  href="#"
                >
                  Get Hired
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${styles["nav-link-custom"]}`} href="#">
                  Start Business
                </a>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles["nav-link-custom"]}`} to={"/auth_signup"}>
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  <button
                    type="button"
                    className="btn btn-light"
                    style={{ color: "#009E84", fontWeight: "bold" }}
                    onClick={() => navigate("/auth_login")}
                  >
                    Log in
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
