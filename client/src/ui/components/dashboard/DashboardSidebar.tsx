import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../dashboard/css/sidebars.module.css";
import { useUserContext } from "../../../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";
import axios from "axios";

export default function DashboardSidebar() {
  const [activeLink, setActiveLink] = useState("jobs"); // Default active page
  const [isOpen, setIsOpen] = useState(true);
  const { currentUser } = useUserContext();
  const [photoUrl, setPhotoUrl] = useState("");
  const user = currentUser;
  const navigate = useNavigate();
  const fetchPhotoUrl = async () => {
    const res = await axios.get(
      `http://localhost:8000/api/v1/auth/photo_url/${user?.uid}`
    );
    setPhotoUrl(res.data.profile_picurl);
  };
  useEffect(() => {
    if (user?.uid) fetchPhotoUrl();
  }, [user?.uid]);

  useEffect(() => {
    if (currentUser === null) {
      navigate("/auth_login", { replace: true });
    }
  }, [currentUser]);

  const signOutHandler = async () => {
    await signOut(auth);
  };
  return (
    <>
      <main className="d-flex">
        <div className="b-example-divider b-example-vr"></div>

        <div
          className={`flex-column flex-shrink-0 p-3 bg-body-tertiary ${
            styles.sidebar
          } ${isOpen ? styles.open : styles.closed}`}
        >
          <div className="d-flex flex-row align-items-center justify-content-left">
            <button
              type="button"
              className="btn"
              style={{
                width: "fit-content",
                color: "#009e84",
                marginTop: "10px",
                fontSize: "30px",
              }}
              onClick={() => setIsOpen((prev): any => !prev)}
            >
              <i className="bi bi-caret-left-fill"></i>
            </button>
            <Link
              to={"/home"}
              className="d-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <span className="fs-4">{isOpen ? "Home" : ""}</span>
            </Link>
          </div>

          <hr />

          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <Link
                to="jobs"
                className={`nav-link ${
                  activeLink === "jobs" ? "active" : "link-body-emphasis"
                }`}
                onClick={() => setActiveLink("jobs")}
              >
                <i className="bi bi-briefcase"></i>&nbsp;{" "}
                {isOpen ? "Get Jobs" : ""}
              </Link>
            </li>
            <li>
              <Link
                to="dashboard"
                className={`nav-link ${
                  activeLink === "dashboard" ? "active" : "link-body-emphasis"
                }`}
                onClick={() => setActiveLink("dashboard")}
              >
                <i className="bi bi-speedometer2"></i>&nbsp;{" "}
                {isOpen ? "Dashboard" : ""}
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                className={`nav-link ${
                  activeLink === "projects" ? "active" : "link-body-emphasis"
                }`}
                onClick={() => setActiveLink("projects")}
              >
                <i className="bi bi-folder"></i>&nbsp;{" "}
                {isOpen ? "Projects" : ""}
              </Link>
            </li>
            <li>
              <Link
                to="posts"
                className={`nav-link ${
                  activeLink === "posts" ? "active" : "link-body-emphasis"
                }`}
                onClick={() => setActiveLink("posts")}
              >
                <i className="bi bi-person-workspace"></i>&nbsp;{" "}
                {isOpen ? "View Posts" : ""}
              </Link>
            </li>
            <li>
              <Link
                to="payment"
                className={`nav-link ${
                  activeLink === "payment" ? "active" : "link-body-emphasis"
                }`}
                onClick={() => setActiveLink("payment")}
              >
                <i className="bi bi-cash-coin"></i>&nbsp;{" "}
                {isOpen ? "Payments" : ""}
              </Link>
            </li>
          </ul>

          <hr />

          <div className="dropdown">
            <a
              href="#"
              className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={photoUrl || ""}
                alt="Photo Url"
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>{isOpen ? user?.displayName : ""}</strong>
            </a>
            <ul className="dropdown-menu text-small shadow">
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#" onClick={signOutHandler}>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
