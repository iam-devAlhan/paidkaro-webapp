import styles from "../auth/css/authcomponent.module.css";
import { useRef, useState } from "react";

export default function AuthLoginComponent() {
  return (
    <>
      <main className={`p-5 ${styles.bg}`}>
        <div className={styles.container}>
          <div className={styles.box}>
            <form className={styles.form}>
              <h1 style={{ letterSpacing: "-2px" }}>Login into your account</h1>
              <div className="row">
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className={`form-control ${styles.form_field}`}
                      id="floatingInput"
                      placeholder="your username"
                    />
                    <label htmlFor="floatingInput">Username</label>
                    <div className="form-floating mt-2">
                      <input
                        type="email"
                        className={`form-control ${styles.form_field}`}
                        id="floatingInput"
                        placeholder="youremail@example.com"
                      />
                      <label htmlFor="floatingInput">Email Address</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="password"
                      className={`form-control ${styles.form_field}`}
                      id="floatingInput"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Enter Password</label>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "#009e84", color: "#ffff" }}
              >
                Login
              </button>
              <div>Or Sign in using :</div>

              <button type="button" className="btn btn-primary">
                <i className="bi bi-google"></i> Login with Google
              </button>

              <button type="button" className="btn btn-dark">
                <i className="bi bi-github"></i> Login with Github
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
