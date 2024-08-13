"use client"
import styles from "./about.module.css";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
        We create digital ideas that are bigger, bolder, braver and better. We belive in good ideas flexibility and precission We are world&apos;s Our Special Team best consulting & finance solution provider. Wide range of web and software development service.
        </p>

        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>02</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>02</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>02</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/about.png" alt="about png" fill/>
      </div>
    </div>
  );
};
export default AboutPage;