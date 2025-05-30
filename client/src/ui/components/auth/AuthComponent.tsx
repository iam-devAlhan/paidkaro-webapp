import styles from "../auth/css/authcomponent.module.css"
import { useRef, useState } from "react"
import { auth } from "../../../config/firebase"
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function AuthComponent() {
  const navigate = useNavigate()
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
     
    }
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser((prev): any => {
      return {...prev, [e.target.name] : e.target.value}
    })
  }

  const onSignUpHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // Step 1: Check user password confirmation
    if (user.password !== user.confirmPassword) {
      alert("Passwords don't match")
      return
    }
    // Update user state
    setUser(new_user)
    try {
      // Create user with email and password using firebase
      const createUser = await createUserWithEmailAndPassword(auth, user.userEmail, user.confirmPassword)
      // Get the created user
      const currentUser = createUser.user
      // Upload file image and get it using reference
      const file = fileUploadRef.current?.files?.[0]
      if (!file) {
        alert("Please upload your profile image")
        return
      }
      // Update the username with the created profile name to continue
      await updateProfile(currentUser, {
        displayName: user.userName
      })
      await currentUser.reload()
      
      console.log(currentUser)
      setTimeout(async () => {
        // Get Firebase JWT Token of the created user
        const authToken = await createUser.user.getIdToken()
        // Initialize formdata to send whole user data to backend
        const data = new FormData()
        data.append("firebase_token", authToken)
        data.append("profile_pic", file)
        data.append("user_name", user.userName)
        const response = await axios.post("http://localhost:8000/api/v1/auth/signup_user", data , {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        if (response.data.message == "User Created Successfully")
          navigate("/auth_login", {replace: true})

      }, 2000)
    }
    catch (error: any) {
      console.log("Signup failed", error.message)
    }
    
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
                    Note: Image should be 800 x 800 px
                  </div>
                  <img
                    src={profile_url}
                    width={100}
                    height={100}
                    alt="Picture Preview"
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
