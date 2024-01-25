"use client";
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import Header from "../../component/header";
import People from "@/app/home/people";
import { Router, useRouter } from "next/router";
// import {useRouter} from 'next/router'
import { ProductsHerb } from "@/app/constant/daftarProductHerbal";
import { useGlobalContext } from "@/app/context/global";
import Image from "next/image";
import Link from "next/link";
import ProductDraft from "../page";
import Lost404 from "@/app/component/404/page";
import { tProduct } from "@/type/tproduct";
import Footer from "@/app/component/footer/footer";
import CProduk from "@/app/component/produk/page";


const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Page() {
  // export default function Page({params: { id },}: {params: { id: number }}) {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0])
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const context = useGlobalContext();
  const data = ProductsHerb;
  let product = data.filter((datas) => datas.id === context.idTemp)[0];
  //   let product:any = [];
  //   const product = Products[context.idTemp];

  const onSubmit: () => void = () => {
    window.open(
      "https://wa.me/6281210220182?text=Assalamu'alaikum%20saya%20ingin%20bertanya%20terkait%20pengobatan%20thibbun%20nabawi",
      "_blank"
    );
  };

  useEffect(() => {
    // console.log(product)
    // console.log(context.idTemp)

    if (context.idTemp != 99) {
      if (data != null) {
        // data.filter((datas) => datas.id === context.idTemp)
        //   .map((row, i) => {
        //     product = row;
        //     console.log(row);
        //   });
      }
    } else {
      window.history.back();
    }
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* <div>{dataProduct}</div> */}
      {product != null || undefined ? (
        <div>
          <div className="pt-6">
            <nav aria-label="Breadcrumb">
              <ol
                role="list"
                className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
              >
                {product.breadcrumbs.map((breadcrumb: any, i: any) => (
                  <li key={i}>
                    <div className="flex items-center">
                      <Link
                        href={breadcrumb.href}
                        className="mr-2 text-sm font-medium text-gray-900"
                      >
                        {breadcrumb.name}
                      </Link>
                      <svg
                        width={16}
                        height={20}
                        viewBox="0 0 16 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-4 text-gray-300"
                      >
                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                      </svg>
                    </div>
                  </li>
                ))}
                <li className="text-sm">
                  <a
                    href={product.href}
                    aria-current="page"
                    className="font-medium text-gray-500 hover:text-gray-600"
                  >
                    {product.name}
                  </a>
                </li>
              </ol>
            </nav>

            {/* Image gallery */}
            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
              <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                  src={product.imageGallery[0]}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <img
                    src={product.imageGallery[1]}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                  <img
                    src={product.imageGallery[2]}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <img
                  src={product.imageGallery[3]}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {product.name}
                </h1>
              </div>

              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  {product.price}
                </p>

                {/* Reviews */}
                <div className="mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating
                              ? "text-green-900"
                              : "text-green-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                    <a
                      href={reviews.href}
                      className="ml-3 text-sm font-medium text-green-600 hover:text-green-500"
                    >
                      {reviews.totalCount} reviews
                    </a>
                  </div>
                </div>

                <form className="mt-10">
                  {/* <h3 className="text-sm font-medium text-gray-900">Review</h3>
                  <People />
                  <h3 className="text-sm font-medium text-green-600 hover:cursor-pointer hover:text-white hover:bg-green-600 hover:mx-20 hover:rounded-md border-green-600 text-center mt-5">
                    Show More
                  </h3> */}

                  <button
                    type="submit"
                    className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    onClick={() => onSubmit()}
                  >
                    Pesan Sekarang Melalui{" "}
                    <img
                      src="/whatsapp.png"
                      width="24px"
                      height="24px"
                      alt=""
                    />
                  </button>
                </form>
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                {/* Description and details */}
                <div>
                  <h3 className="sr-only">Description</h3>
                  <div className="space-y-6">
                    <p className="text-base text-gray-900">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* <div className="mt-10">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.judulHightLight}
                  </h3>

                  <div className="mt-4">
                    <span className="text-gray-600">{product.highLights}</span>
                  </div>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">
                    {product.name} Mengatasi
                  </h2>

                  <div className="mt-4 space-y-6">
                    <p className="text-sm text-gray-600">{product.details}</p>
                  </div>
                </div> */}
              </div>
            </div>
            <hr />
            <br />
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
              <h2
                className="text-2xl font-bold tracking-tight text-gray-900"
                data-aos="fade-right"
                data-aos-easing="ease-in-out"
                data-aos-duration="800"
              >
                Daftar Produk Herbal Al-Mustofa
              </h2>
              {/* <CProduks id={context.idTemp}/> */}
              <CProduk id={context.idTemp}/>
            </div>
            <br />
            <br />
            <br />
            <Footer />
          </div>
        </div>
      ) : (
        // <>ada</>
        <>
          <Lost404 />
        </>
      )}
    </div>
  );
}
