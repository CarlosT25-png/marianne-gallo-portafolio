"use client";

import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import styles from "./MyProjects.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

const images = [1, 2, 3, 4, 5];
let idx = 1;

const MyProjects = () => {
  const [imgSrc, setImgSrc] = useState(images[0]);

  useEffect(() => {
    const updateImg = () => {
      setImgSrc(idx);
      if (idx === images.length) {
        idx = 1;
      } else {
        idx++;
      }
    };

    const intervalId = setInterval(updateImg, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="work" className={styles["section-container"]}>
      {/* My Projects */}
      <div className={styles["cards-container"]}>
        <div className={`${styles["card"]} ${styles["card--1"]}`}>
          <h3>My Projects</h3>
          <p>Something awesome is coming your way. Get ready to be amazed!</p>
        </div>
      </div>
      <div className={styles["container"]}>
        <img className={styles.img} src={`/images/my-projects/${imgSrc}.png`} />
      </div>

      {/* Contact Form */}
      <div className={styles["cards-container"]}>
        <div className={`${styles["card"]} ${styles["card--2"]}`}>
          <h3>Contact Me</h3>
          <p>
            I'd love to hear from you, just remenber, I'm just a click away.
          </p>
        </div>
      </div>
      <div className={styles["container"]}>
        <form>
          <div>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>

          <textarea placeholder="message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default MyProjects;
