"use client";

import React from "react";
import { Products } from "../constant/daftarProduct";
import Header from "../component/header";
import Link from "next/link";
import { useRouter } from "next/router";
import { useGlobalContext } from "../context/global";
import { tProduct } from "@/type/tproduct";
import Footer from "../component/footer/footer";
import CTerapi from "../component/terapi/page";

export default function ProductDraft() {
  const products = Products;
  const context = useGlobalContext();
  // const router = useRouter();

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
          Daftar Layanan Terapi Al-Mustofa
        </h2>
        <CTerapi/>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
