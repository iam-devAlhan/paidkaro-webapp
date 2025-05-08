import styles from "../landing/css/section.module.css";
import softwareEngineering from "../../../assets/software-engineering.jpg";
import uiDesign from "../../../assets/ui-design.jpg";
import gfxDesign from "../../../assets/graphic-design.jpg";
import electronics from "../../../assets/electronics.jpg";
export default function SkillSection() {
  return (
    <>
      <section className={`container-fluid ${styles["section-three"]}`}>
        <div className={styles.container}>
          <div className="container text-center">
            <div className="row mb-5">
              <div className="col">
                <div className={styles.box}>
                  <h1 style={{ letterSpacing: "-3px", fontSize: "4rem" }}>
                    Find right talent of your need
                  </h1>
                </div>
              </div>
            </div>
            <div className="row gap-3">
              <div className="col d-flex align-items-center justify-content-center">
                <img
                  src={softwareEngineering}
                  width={380}
                  height={214}
                  id={styles.card}
                />
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                <img src={uiDesign} width={380} height={214} id={styles.card} />
              </div>
            </div>
            <div className="row gap-3 mt-3">
              <div className="col gap-2 d-flex align-items-center justify-content-center">
                <img
                  src={gfxDesign}
                  width={380}
                  height={214}
                  id={styles.card}
                />
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                <img
                  src={electronics}
                  width={380}
                  height={214}
                  id={styles.card}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
