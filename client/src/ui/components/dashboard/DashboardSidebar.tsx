import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../dashboard/css/sidebars.module.css";

type SidebarProps = {
  isOpen: boolean;
};

export default function DashboardSidebar({ isOpen }: SidebarProps) {
  const [activeLink, setActiveLink] = useState("jobs"); // Default active page

  return (
    <>
      <main className="d-flex">
        <div className="b-example-divider b-example-vr"></div>

        <div
          className={`flex-column flex-shrink-0 p-3 bg-body-tertiary ${styles.sidebar} ${
            isOpen ? styles.open : styles.closed
          }`}
        >
          <a
            href="/home"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <span className="fs-4">Home</span>
          </a>

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
                <i className="bi bi-briefcase"></i>&nbsp; Get Jobs
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
                <i className="bi bi-speedometer2"></i>&nbsp; Dashboard
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
                <i className="bi bi-folder"></i>&nbsp; Create a Project
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
                <i className="bi bi-person-workspace"></i>&nbsp; View Posts
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
                <i className="bi bi-cash-coin"></i>&nbsp; View Payments
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
                src="https://github.com/mdo.png"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>Profile Name</strong>
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
                <a className="dropdown-item" href="#">
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
