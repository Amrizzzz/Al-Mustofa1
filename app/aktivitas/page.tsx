"use client";

import React from "react";
import Link from "next/link";
import Header from "../component/header";
import { useGlobalContext } from "../context/global";
import Footer from "../component/footer/footer";
import CTerapi from "../component/terapi/page";

export default function ProductDraft() {
  const context = useGlobalContext();
  // const router = useRouter();
  const foto = [
    "/baksos/baksos1.jpg",
    "/baksos/baksos2.jpg",
    "/baksos/baksos3.jpg",
    "/baksos/baksos4.jpg",
    "/baksos/baksos5.jpg",
    "/baksos/baksos6.jpg",
    "/baksos/baksos7.jpg",
    "/baksos/baksos8.jpg",
    "/baksos/baksos9.jpg",
    "/baksos/baksos10.jpg",
    "/baksos/baksos11.jpg",
    "/baksos/baksos12.jpg",
    "/baksos/baksos13.jpg",
    "/baksos/baksos14.jpg",
  ];

  const detailProducts = (produk: any): void => {
    // console.log(produk.id)

    // router.push(produk.href)
    context.setIdTemp(produk.id);
  };

  return (
    <div className="bg-white">
      <Header />
      <br />
      <br />
      {/* <br/>
            <br/>
            <br/> */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2
          className="text-2xl font-bold tracking-tight text-gray-900"
          data-aos="fade-right"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
        >
          Aktivitas Al-Mustofa
        </h2>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {foto.map((imageSrc, index) => (
                <div
                  key={index}
                  className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay="500"
                >
                  <img
                    src={imageSrc}
                    alt="..."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    // onClick={() => openModal(imageSrc)}
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
