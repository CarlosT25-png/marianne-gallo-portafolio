import { Poppins } from "next/font/google";
import styles from "./Landing.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

const Landing = () => {
  return (
    <>
      <img
        src="/images/landing/Background.gif"
        alt="Background gif"
        className={styles["bg-image"]}
      />
      <div className={styles["title-container"]}>
        <div className={styles["title-container__flex"]}>
          <h1
            className={`${poppins.className} ${styles["title-container__static-text"]}`}
          >
            <div className={`${styles["inner-headings"]}`}>
                <span className={`${styles["celestin"]}`}>
                  Welcome <br />
                </span>
                <span className={`${styles["naranjin"]}`}>
                  Bienvenido <br />
                </span>
                <span className={`${styles["rosadin"]}`}>
                  Bienvenue <br />
                </span>
                <span className={`${styles["moradin"]}`}>
                  ようこそ <br />
                </span>
                <span className={`${styles["verdin"]}`}>
                  स्वागत <br />
                </span>
            </div>
          </h1>
          <h1 style={{ margin: 0}}>to my</h1>
        </div>
        <h1
          className={`${poppins.className} ${styles["title-container__static-text"]} ${styles["bottom-align"]}`}
        >
          Creative Space
        </h1>
      </div>
    </>
  );
};

export default Landing;
