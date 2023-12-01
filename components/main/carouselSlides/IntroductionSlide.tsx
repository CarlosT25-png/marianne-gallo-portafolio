import { Poppins } from "next/font/google";
import styles from "./IntroductionSlide.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const IntroductionSlide = () => {
  return (
    <div className={`${styles.container} ${poppins.className}`}>
      <img src="/images/about-me/introduction/1.gif"/>
      <div className={styles['content-container']}>
        <h2>Hey there!</h2>
        <p>
          I'm Marianne, a passionate individual driven to create meaningful
          solutions that address people's needs. I believe that thoughtful
          design can bridge the gap between human aspirations and technological
          capabilities.
        </p>
        <caption>Thanks for stopping by!</caption>
      </div>
    </div>
  );
};

export default IntroductionSlide;
