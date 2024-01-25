"use client";

import Link from "next/link";
import Header from "../../header";

export default function Kaleng2() {
  return (
    <>
      <Header />
      <main className="bg-blue-300 grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div
          className="bg-blue-300 text-center"
          style={{ position: "relative" }}
          // data-aos="fade-left"
          // data-aos-duration="1400"
        >
          <div
            className="z-index-999"
            style={{ position: "relative", display: "inline-block" }}
          >
            <img
              src="/kaleng/sarangB.png"
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
                fontSize: 300,
                color: "white",
              }}
              data-aos="fade-right"
              data-aos-duration="800"
            >
              Sarang
            </h1>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="flex justify-between px-18">
          <div>
            <Link href="/component/kaleng">
              <span>Before</span>
            </Link>
          </div>
          &nbsp;
          <div>
            <Link href="/component/kaleng/kaleng2">
              <span>Next</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
