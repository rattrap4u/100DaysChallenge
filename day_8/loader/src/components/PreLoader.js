import React, { useEffect } from "react";
import "./preloader.css";
import gsap from 'gsap';
import image from '../../src/components/wallpaperflare.com_wallpaper(2).jpg'

const PreLoader = () => {
  useEffect(() => {
    startLoader();
  }, []);

  function startLoader() {
    let counterElement = document.querySelector(".counter");
    if (counterElement) {
      let currentValue = 0;

      function updateCounter() {
        if (currentValue === 100) {
          return;
        }
        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100) {
          currentValue = 100;
        }
        counterElement.textContent = `${currentValue}%`;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
      }
      updateCounter();

      gsap.to(".counter", 0.25, {
        delay: 3.5,
        opacity: 0,
      });

      gsap.to(".bar", 1.5, {
        delay: 3.5,
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut"
      });
      gsap.from(".h1", 1.5, {
        delay: 4,
        y: 700,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
      });
      gsap.from(".hero", 2, {
        delay: 4.5,
        y: 400,
        ease: "power4.inOut",
      });
    }
  }

  return (
    <>
      <h1 className="counter">0</h1>
      <div className="overlay">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="container">
        <nav>
          <div>
            <a href="/">About</a>
            <a href="/">Project</a>
            <a href="/">Contact</a>
          </div>
          <div>
            <a href="/">Playground</a>
          </div>
        </nav>
        <div className="header">
          <div className="h1">T</div>
          <div className="h1">u</div>
          <div className="h1">s</div>
          <div className="h1">h</div>
          <div className="h1">a</div>
          <div className="h1">r</div>
          <div className="h1">.</div>

        </div>
        <div className="hero">
          <img
            src={image}
            alt="world map"
          />
        </div>
      </div>
      
    </>
  );
};

export default PreLoader;
