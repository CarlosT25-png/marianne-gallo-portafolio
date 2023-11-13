import { Oswald, Poppins } from "next/font/google";
import localFont from "@next/font/local";
import { texts } from '../../../utils/constants/texts'
import styles from "./Slide.module.css";

const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });
const handwrittingFont = localFont({
  src: "../../../public/fonts/handwritting.ttf",
});

const Slide = (props: typeof texts[0]) => {
  return (
    <div className={styles["full-container"]}>
      <div className={styles["img-container"]}>
        <img src={props.urlImg} />
      </div>
      <div className={`${styles["text-container"]}`}>
        <div className={`${styles["title-container"]}`}>
          <h2 className={oswald.className}>{props.title}</h2>
          <h3 className={handwrittingFont.className}>{props.subtitle}</h3>
        </div>
        <p className={`${styles["paragraph"]} ${poppins.className}`}>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Slide;
