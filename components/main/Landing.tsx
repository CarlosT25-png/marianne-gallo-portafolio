import { Poppins } from "next/font/google";
import styles from "./Landing.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

const Landing = () => {
  return (
    <>
      <img src="/images/landing/Background.gif" alt="Background gif"  className={styles['bg-image']}/>
      <div className={styles['title-container']}>
        <div className={styles['title-container__flex']}>
          <div className={`${poppins.className} ${styles['words']}`}>
            <span>Welcome</span>
            <span>Bienvenido</span>
            <span>Bienvenue</span>
            <span>ようこそ</span>
            <span>स्वागत है</span>
          </div>
          <h1 className={`${poppins.className} ${styles['title-container__static-text']} ${styles['title-container__static-text-1'] }`}> to my</h1>
        </div>
        <h1 className={`${poppins.className} ${styles['title-container__static-text']}`}>Creative Space</h1>
      </div>
    </>
  );
};

export default Landing;
