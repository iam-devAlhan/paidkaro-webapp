import styles from "../landing/css/section.module.css"
import profilePic from "../../../assets/profile.jpg"
import profilePic02 from "../../../assets/profile-2.jpg"
import profilePic03 from "../../../assets/profile-3.jpg"
export default function ReviewSection() {
  return (
    <>
      <section className={`container-fluid ${styles["section-three"]}`}>
        <div className={styles.container}>
          <div className="container text-center">
            <div className="row mb-5">
              <div className="col d-flex align-items-center">
                <div className={styles.heading}>
                  <h1 style={{ letterSpacing: "-3px", fontSize: "4rem" }}>
                    What our People say about it
                  </h1>
                </div>
              </div>
              <div
                id="carouselExampleDark"
                className="carousel carousel-dark slide mt-5"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className={`col ${styles["review-card"]}`}>
                      <div className="row container-fluid ">
                        <div className="col">
                          <img
                            src={profilePic03}
                            width={200}
                            height={200}
                            id={styles.review}
                          />
                          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Name
                          </div>
                          <div>Freelancer</div>
                        </div>
                        <div className="col d-flex align-items-center" style={{fontSize: "25px", fontStyle: "italic"}}>
                          "I think this is the right time to influence new freelancers to use this platform, enjoyed while working here"
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className={`col ${styles["review-card"]}`}>
                      <div className="row container-fluid ">
                        <div className="col">
                          <img
                            src={profilePic02}
                            width={200}
                            height={200}
                            id={styles.review}
                          />
                          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Name
                          </div>
                          <div>HR Of Company, Ltd</div>
                        </div>
                        <div className="col d-flex align-items-center" style={{fontSize: "25px", fontStyle: "italic"}}>
                          "We hire freelancers not the basis of the qualifications only but the talent they posses and hard work they do"
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className={`col ${styles["review-card"]}`}>
                      <div className="row container-fluid ">
                        <div className="col">
                          <img
                            src={profilePic}
                            width={200}
                            height={200}
                            id={styles.review}
                          />
                          <div style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Name
                          </div>
                          <div>CEO Of Company, Ltd</div>
                        </div>
                        <div className="col d-flex align-items-center" style={{fontSize: "25px", fontStyle: "italic"}}>
                          "It has been pleasure for me, to work here. As a
                          client, I find it more easier to use this platform"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
