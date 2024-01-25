"use client";

import React from "react";
import { ProductsHerb } from "../../constant/daftarProductHerbal";
import Link from "next/link";
import { useGlobalContext } from "../../context/global";
import { useEffect } from "react";
import AOS from "aos";


interface Props {
  id?: number
}

export default function CProduk(props:any) {
  const products = ProductsHerb.filter((datas)=> datas.id != props.id);
  const context = useGlobalContext();
  // const router = useRouter();

  const detailProducts = (produk: any): void => {
    // console.log(produk.id)
    // router.push(produk.href)
    context.setIdTemp(produk.id);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onClick={() => detailProducts(product)}
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              {/* <div key={product.id} className="group relative" onClick={()=>detailProducts(products.href)}> */}
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full md:h-50% md:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name} */}
                    <Link href={{ pathname: product.href }}>
                      {/* <Link href={{ pathname: product.href, query: {produk: product.id} }}> */}
                      {/* <Link href={"/terapi/detail"}> */}
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                {/* <p className="text-sm font-medium text-gray-900">{product.price}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
