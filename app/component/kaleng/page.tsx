"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./FlipImage.module.css";
import Link from "next/link";
import Kaleng1 from "./kaleng2/page";
import Header from "../header";

export default function Kaleng() {
  const [leci, setLeci] = useState(true);
  const [sarangB, setSarangB] = useState(false);

  //   const onScroll = () => {
  //     if (leci === true) {
  //       setLeci(false);
  //       setSarangB(true);
  //     } else {
  //       setLeci(true);
  //       setSarangB(false);
  //     }
  //   };

  useEffect(() => {
    AOS.init();

    // const handleScroll = () => {
    //   const scrollY = window.scrollY;
    //   const element = document.getElementById("flip-image");

    //   if (element) {
    //     const elementOffset = element.offsetTop;
    //     const elementHeight = element.offsetHeight;
    //     const windowHeight = window.innerHeight;

    //     if (
    //       scrollY > elementOffset - windowHeight &&
    //       scrollY < elementOffset + elementHeight
    //     ) {
    //       const progress =
    //         (scrollY - elementOffset + windowHeight) /
    //         (elementHeight + windowHeight);
    //       element.style.transform = `rotateY(${progress * 180}deg)`; // Mengubah menjadi rotateY
    //     }
    //   }
    // };

    // window.addEventListener("scroll", handleScroll);
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  return (
    <>
      <Header />
      <main className="bg-red-300 grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="bg-red-300 text-center"
          style={{ position: "relative" }}
        //   data-aos="fade-left"
        //   data-aos-duration="1400"
        >
          <div
            className="z-index-999"
            style={{ position: "relative", display: "inline-block" }}
          >
            <img
              src="/kaleng/Leci.png"
              width="290px"
              height="290px"
              alt=""
              style={{ position: "relative", zIndex: 1 }}
              data-aos="flip-right"
              data-aos-duration="800"
            />
            <h1
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                margin: 0,
                zIndex: 0,
                fontWeight: 700,
                fontSize: 600,
                color: "white",
              }}
              data-aos="fade-right"
              data-aos-duration="1400"
            >
              Leci
            </h1>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <Link href="./kaleng/sarang">
            <div>Next</div>
          </Link>
        </div>
      </main>
    </>
  );
}
