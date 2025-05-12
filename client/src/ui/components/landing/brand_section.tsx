import brandImage from "../../../assets/work-from-homework-from-home-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg";
import styles from "../landing/css/section.module.css";
export default function BrandSection() {
  return (
    <>
      <section className={`container-fluid ${styles["section"]}`}>
        <div className={styles.container}>
          <div className="d-flex align-items-left flex-column justify-content-center gap-3">
            <h1
              style={{
                fontSize: "4rem",
                lineHeight: "80%",
                letterSpacing: "-4px",
              }}
            >
              Let the world hire you
            </h1>
            <p style={{ fontSize: "20px" }}>
              PaidKaro is platform where you can start your freelancing services
              and compete with less competition
            </p>
            <div className="d-flex gap-4">
              <button
                type="button"
                style={{ backgroundColor: "#009E84", color: "#ffff" }}
                className="btn btn-lg"
              >
                Start Now
              </button>
              <button
                type="button"
                style={{ backgroundColor: "#009E84", color: "#ffff" }}
                className="btn btn-lg"
              >
                Start Hiring
              </button>
            </div>
          </div>
          <div id={styles.brandIcon} className="d-flex align-items-center justify-content-center">
            <img src={brandImage} width={500} height={500} className={styles.brandIcon}/>
          </div>
        </div>
      </section>
    </>
  );
}
