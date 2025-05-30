import postPlaceholder from "../../../assets/post-image-placeholder.webp";
import postPlaceholder2 from "../../../assets/post-image-placeholder-2.webp";
import postPlaceholder3 from "../../../assets/post-placeholder-3.jpg";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { auth } from "../../../config/firebase";


export default function Posts() {
  
  interface Post {
    post_title: string,
    description: string,
    budget: string, // for now we are assuming string but for server side we will typecast its value
    currency: string,
    post_imgurl: string
  }
  
  const new_post: Post = {
    post_title: "",
    description: "",
    budget: "",
    currency: "",
    post_imgurl: ""
  }
  const [loading, isLoading] = useState(false)
  useEffect(()=> {
    fetchAllPosts()
  },[])

  useEffect(()=> {
    console.log(posts)
  }, [])
  const fetchAllPosts = async () => {
    try {
      isLoading(true)
      const res = await axios.get("http://localhost:8000/api/v1/posts/get_all_posts")
      setPosts(res.data)
      // console.log(res.data)
    } catch (error) {
      console.log("Failed to get posts")
    } finally {
      isLoading(false)
    }
    
  }

  const postImgRef = useRef<HTMLInputElement>(null)
  const [posts, setPosts] = useState<Array<Post>>([])
  const [post, setPost] = useState(new_post)

  const onFileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const fileUrl = URL.createObjectURL(file)
      setPost((prev: any) => {
        return {...prev, post_img: fileUrl}
      })
    }
  }
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setPost((prev: any) => {
        return {...prev, [e.target.name] : e.target.value}
      })
  }
  const submitHandler = async () => {
    setPost(new_post)
    const file = postImgRef.current?.files?.[0]
    if (!file) {
      alert("Please upload post image")
      return
    }
    const formdata = new FormData()
    formdata.append("firebase_id", auth.currentUser?.uid || "")
    formdata.append("title", post.post_title)
    formdata.append("post_img", file)
    formdata.append("description", post.description)
    formdata.append("budget", post.budget)
    formdata.append("currency", post.currency)
    const res = await axios.post("http://localhost:8000/api/v1/posts/create_posts", formdata, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    console.log(res)
    await fetchAllPosts()
  }
  return (
    <>
      <h3>Posts</h3>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <i className="bi bi-plus-circle"></i> Create Posts
      </button>
      {/* Modal starting from here */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Create Post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Post Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Title"
                  name="title"
                  onChange={onChangeHandler}
                  value={post.post_title}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Write Description about Post"
                  name="description"
                  onChange={onChangeHandler}
                  value={post.description}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Budget
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Write Budget around $5-$30"
                  name="budget"
                  onChange={onChangeHandler}
                  value={post.budget}
                ></input>
              </div>
              <div>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Select Currency
                </label>

                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={onChangeHandler}
                  name="currency"
                  value={post.currency}
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="PKR">PKR</option>
                  <option value="INR">INR</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Upload Image for Post
                </label>
                <br />
                <button type="button" className="btn btn-dark" onClick={() => postImgRef.current?.click()}>Upload File</button>
                <input type="file" ref={postImgRef} onChange={onFileHandler} style={{display: "none"}}/>
                <br />
                <img src={post.post_imgurl} alt="Preview Image" width={300} height={169} />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-success" onClick={submitHandler}>
                Create Post
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal ends here and cards display start from here */}
      <div className="row row-cols-3 mt-4">
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
              <p className="card-text">Price: $11.99</p>
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
              <p className="card-text">Price: $6.99</p>
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
              <p className="card-text">Price: $29.99</p>
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
        {loading ? <div>Loading</div> :  posts.map((post) => {
          return (
            <>
              <div className="col">
          <div
            className="card h-100"
            style={{ width: "18rem", border: "2px solid #009e84" }}
          >
            <img
              src={post.post_imgurl}
              width={300}
              height={169}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{post.post_title}</h5>
              <p className="card-text">
                {post.description}
              </p>
              <p className="card-text">Price: {post.currency}{post.budget}</p>
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
            </>
          )
        })}
      </div>
    </>
  );
}
