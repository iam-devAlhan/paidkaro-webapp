import styles from "../auth/css/authcomponent.module.css";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";
import axios from "axios";

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
    setLoginUser((prev): any => 
      ({...prev,[event.target.name]: event.target.value})
    )
  }

  const signInNormalUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginUser.email, loginUser.password)
      setTimeout(async () => {
        const token = await userCredential.user.getIdToken()
        await axios.post("http://localhost:8000/api/v1/auth/login_token", {
          firebase_token: token
        }).then((res: any) => console.log(res.data)).catch((error: any) => console.log(error.message))
        setLoginUser(user)
      }, 2000)
      
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
                        name="email"
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
                      name="password"
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
