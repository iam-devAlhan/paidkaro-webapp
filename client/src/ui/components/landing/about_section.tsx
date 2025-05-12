import styles from "../landing/css/section.module.css";
import timelapse from "../../../assets/timelapse.svg";
import currency from "../../../assets/currency.svg";
import groups from "../../../assets/groups.svg";
import handshake from "../../../assets/handshake.svg";
import psychology from "../../../assets/psychology.svg";
import storeFront from "../../../assets/storefront.svg";

export default function AboutSection() {
  return (
    <>
      <section className={`container-fluid ${styles["section-two"]}`}>
        <div className={styles.container}>
          <div className="container text-center">
            <div className="row mb-5">
              <div className="col">
                <div className={styles.box}>
                  <h1 style={{ letterSpacing: "-3px", fontSize: "4rem" }}>
                    Why we choose it?
                  </h1>
                </div>
              </div>
            </div>
            <div className="row gap-5 p-5">
              <div className="col">
                <img src={timelapse} alt="timelapse" width={100} height={100} />
                <p style={{ color: "#009E84", fontWeight: "500" }}>
                  Get Jobs in Flexible Hours and at your working hours
                </p>
              </div>
              <div className="col">
                <img src={currency} alt="timelapse" width={100} height={100} />
                <p style={{ color: "#009E84", fontWeight: "500" }}>
                  Payment from International Client becomes easy
                </p>
              </div>
              <div className="col">
                <img
                  src={storeFront}
                  alt="timelapse"
                  width={100}
                  height={100}
                  style={{ color: "#009E84" }}
                />
                <p style={{ color: "#009E84", fontWeight: "500" }}>
                  Remote Jobs and onsite jobs at reachable locations
                </p>
              </div>
            </div>
            <div className="row gap-5 p-5">
              <div className="col">
                <img
                  src={groups}
                  alt="timelapse"
                  width={100}
                  height={100}
                  style={{ color: "#009E84" }}
                />
                <p style={{ color: "#009E84", fontWeight: "500" }}>
                  Support for Newbies from our team and community
                </p>
              </div>
              <div className="col">
                <img
                  src={psychology}
                  alt="timelapse"
                  width={100}
                  height={100}
                  style={{ color: "#009E84" }}
                />
                <p style={{ color: "#009E84", fontWeight: "500" }}>
                  Skillful Environment, Learn and grow and create services
                </p>
              </div>
              <div className="col">
                <img
                  src={handshake}
                  alt="timelapse"
                  width={100}
                  height={100}
                  style={{ color: "#009E84" }}
                />
                <p style={{ color: "#009E84", fontWeight: "500" }}>
                  We keep our promise and your trust across the globe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
