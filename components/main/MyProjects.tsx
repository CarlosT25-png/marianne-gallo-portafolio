'use client'

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Poppins } from "next/font/google";
import { gsap } from "gsap";
import styles from "./MyProjects.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: "700" });

const images = [1, 2, 3, 4, 5]
let idx = 1

const MyProjects = () => {
  const imgRef = useRef<HTMLImageElement>(null)
  
  const [imgSrc, setImgSrc] = useState(images[0])

  useEffect(() => {
    const updateImg =() => {
      setImgSrc(idx)
      if(idx === images.length){
        idx = 1
      } else {
        idx++
      }
    }

    const intervalId = setInterval(updateImg, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className={styles['section-container']}>
      <div className={styles['container']}>
        <h1 className={`${poppins.className} ${styles.title}`}>My Projects</h1>
        <img ref={imgRef} className={styles.img} src={`/images/my-projects/${imgSrc}.png`} />
      </div>
    </section>
  );
}

export default MyProjects;