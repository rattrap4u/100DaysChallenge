'use client'
import styles from "./page.module.scss";
import { useState } from "react";
import { motion } from 'framer-motion';
import useMousePosition from "./utils/useMousePosition";


export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 500 : 40;

  return (
    <main className={styles.main}>
      
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{type: "tween", ease: "backOut"}}
      >
        <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>
        A DevOps Engineer thriving in the AI era by embracing cutting-edge practices and continuously evolving skillsets.
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>
          A <span>Frontend Developer</span> mastering the art of survival in the AI-driven world through ongoing skill enhancement and adaptability.
        </p>

      </div>
    </main>
  );
}
