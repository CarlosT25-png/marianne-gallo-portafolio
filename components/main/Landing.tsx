import { Poppins } from "next/font/google";
import styles from "./Landing.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

const Landing = () => {
  return (
    <>
      <video autoPlay muted loop className={styles.video}>
        <source src="/videos/background.mp4" />
      </video>
      <div className={styles['title-container']}>
        <div className={styles['title-container__flex']}>
          <h1 className={poppins.className}>Welcome</h1>
          <h1 className={`${poppins.className} ${styles['title-container__static-text']} ${styles['title-container__static-text-1'] }`}> to my</h1>
        </div>
        <h1 className={`${poppins.className} ${styles['title-container__static-text']}`}>Creative Space</h1>
      </div>
    </>
  );
};

export default Landing;
