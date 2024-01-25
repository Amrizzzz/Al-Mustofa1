"use client";

import React from "react";
import Header from "../component/header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGlobalContext } from "../context/global";
import { tProduct } from "@/type/tproduct";
import Footer from "../component/footer/footer";
import CProduk from "../component/produk/page";
import AOS from "aos";
import { useEffect } from "react";

export default function ProductDraft() {
  const context = useGlobalContext();
  // const router = useRouter();

  const detailProducts = (produk: any): void => {
    // console.log(produk.id)

    // router.push(produk.href)
    context.setIdTemp(produk.id);
  };

  useEffect(()=>{
    AOS.init
  }, [])

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
          Daftar Produk Herbal Al-Mustofa
        </h2>
        <CProduk />
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
