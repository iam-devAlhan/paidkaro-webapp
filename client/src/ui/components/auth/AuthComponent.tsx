import styles from "../auth/css/authcomponent.module.css";
import { useRef, useState } from "react";
import { auth } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function AuthComponent() {

  interface User {
      userName: string
      userEmail: string
      profileURL: string
      password: string
      confirmPassword: string
  }

  const fileUploadRef = useRef<HTMLInputElement>(null);
  const new_user: User = {
      userName: "",
      userEmail: "",
      profileURL: "",
      password: "",
      confirmPassword: ""
  }
  const [user, setUser] = useState(new_user)

  const [profile_url, set_profile_url] = useState<string>("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileURL = URL.createObjectURL(file)
      set_profile_url(fileURL);
      setUser((prev): any => {
        return {...prev, profileURL: fileURL}
      })
      console.log(user)
    }
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev): any => {
      return {...prev, [e.target.name] : e.target.value}
    })
  }

  const onSignUpHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }
  
  return (
    <>
      <main className={`p-5 ${styles.bg}`}>
        <div className={styles.container}>
          <div className={styles.box}>
            <form className={styles.form}>
              <h1 style={{ letterSpacing: "-2px" }}>Create an Account</h1>
              <div className="row">
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="text"
                      className={`form-control ${styles.form_field}`}
                      id="floatingInput"
                      name="userName"
                      placeholder="your username"
                      value={user.userName}
                      onChange={onChangeHandler}
                    />
                    <label htmlFor="floatingInput">Username</label>
                    <div className="form-floating mt-2">
                      <input
                        type="email"
                        className={`form-control ${styles.form_field}`}
                        id="floatingInput"
                        name="userEmail"
                        placeholder="youremail@example.com"
                        value={user.userEmail}
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
                      name="password"
                      value={user.password}
                      onChange={onChangeHandler}
                    />
                    <label htmlFor="floatingPassword">Create Password</label>
                  </div>
                </div>
                <div className="col">
                  <div className="form-floating">
                    <input
                      type="password"
                      className={`form-control ${styles.form_field}`}
                      id="floatingInput"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      onChange={onChangeHandler}
                      value={user.confirmPassword}
                    />
                    <label htmlFor="floatingPassword">Retype Password</label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div>
                    Note: Image should be 800 x 800 px, Preview Image here
                  </div>
                  <img
                    src={profile_url}
                    width={100}
                    height={100}
                    style={{ borderRadius: "50px", marginRight: "10px" }}
                  />
                </div>
                <div className="col">
                  <input
                    type="file"
                    ref={fileUploadRef}
                    onChange={handleFileUpload}
                    accept=".jpg, .jpeg, .png"
                    style={{ display: "none" }}
                  ></input>
                  <button
                    type="button"
                    className="btn"
                    style={{ backgroundColor: "#009e84", color: "#ffff" }}
                    onClick={() => fileUploadRef.current?.click()}
                  >
                    Upload profile pic
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "#009e84", color: "#ffff" }}
                onClick={onSignUpHandler}
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
