import styles from "../auth/css/authcomponent.module.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

export default function AuthLoginComponent() {
  interface UserLogin {
    email: string,
    password: string
  }

  const user: UserLogin = {
    email: "",
    password: ""
  }
  const [loginUser, setLoginUser] = useState(user)
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginUser((prev): any => {
      ({...prev,[event.target.name]: event.target.value})
    })
  }

  const signInNormalUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginUser.email, loginUser.password)
      console.log(userCredential)
    } catch (error) {
      console.log(error)
    }
  }
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
                    
                    <div className="form-floating mt-2">
                      <input
                        type="email"
                        className={`form-control ${styles.form_field}`}
                        id="floatingInput"
                        placeholder="youremail@example.com"
                        value={loginUser.email}
                        onChange={onChangeHandler}
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
                      value={loginUser.password}
                      onChange={onChangeHandler}
                    />
                    <label htmlFor="floatingPassword">Enter Password</label>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="btn"
                onClick={signInNormalUser}
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
