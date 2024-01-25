"use client";

import React from "react";
// import {useState} from 'react'
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect } from "react";
import Bubble from "@/partikel/bubbleChat/bubblechat";
// import Modal from 'react-modal'
import Modal from "react-modal";
import { AnyARecord } from "dns";
import Header from "../component/header";
import { useGlobalContext } from "../context/global";
import Footer from "../component/footer/footer";
// import {motion} from 'framer-motion'
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

export default function Home3() {
  const router = useRouter();
  const context = useGlobalContext();
  const [isMobile, setIsMobile] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = (imageSrc: any) => {
    // console.log(imageSrc)
    if (isMobile != true) {
      setSelectedImage(imageSrc);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  const directTo = () => {
    router.push("/aktivitas");
  };

  useEffect(() => {
    // console.log(context)

    // Gunakan window.innerWidth untuk mendeteksi lebar layar
    AOS.init();
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ganti angka 768 sesuai kebutuhan
    };

    // Panggil handleResize saat komponen dipasang
    handleResize();

    // Tambahkan event listener untuk mendeteksi perubahan ukuran layar
    window.addEventListener("resize", handleResize);

    // Bersihkan event listener saat komponen dilepas
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-white">
      <Header />
      <Bubble />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* Hero */}
        {/* <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"> */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Assalamu&apos;alaikum
              </h1>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Segala penyakit pasti ada obatnya dan hanya Allah Subhanahu
                Wata&apos;ala sajalah yang dapat memberikan kesembuhan dan
                insya&apos;allah dengan melalui kami, kesembuhan itu
                tersampaikan kepada anda.
              </p>
            </div>
            <br />
            <div
              className="sm:mb-8 sm:flex sm:justify-center"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="1000"
            >
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Silahkan hubungi kami untuk.{" "}
                <a
                  href="https://wa.me/6281210220182?text=Assalamu'alaikum%20saya%20ingin%20bertanya%20terkait%20pengobatan%20sunah%20sunnah%20ala%20nabi"
                  className="font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Info Pengobatan Lebih Lanjut{" "}
                  <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div> */}
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />

          <div>
            {/* terpai thibbun nabawi */}
            <div
              className="text-center"
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Therapy Thibbun Nabawi
              </h1>
            </div>
            <div className="text-center">
              <p
                className="mt-6 text-lg leading-8 text-gray-600"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                Kami hadir sebagai solusi kesehatan masyarakat dengan prinsip
                pengobatan yang islami dan alami
              </p>
              <p
                className="mt-6 text-lg leading-8 text-gray-600"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="800"
              >
                Didukung oleh tenaga handal dan profesional, kami berpengalaman
                melayani dan memberi solusi kesehatan ala sunah NaBI serta obat
                - obatan herbal dan alami
              </p>
              <p
                className="mt-6 text-lg leading-8 text-gray-600"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="900"
              >
                Pengobatan islami, bukan lagi pengobatan alternatif namun sudah
                menjadi pengobatan utama yang aman dan nyaman bagi masyarakat
              </p>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* Alasan */}
            <div
              className="text-center"
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Mengapa rumah sehat Al-Mustofa ?
              </h1>
            </div>
            <ul className="mt-6 text-lg leading-8 text-gray-600">
              <li
                className="mt-5"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Berpedoman pada syariat islam (Al-Qur&lsquo;an dan Sunnah)
              </li>
              <li
                className="mt-5"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Bebas dari mistik & kemusyrikan
              </li>
              <li
                className="mt-5"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Tidak menggunakan obat berbahaya / kimia
              </li>
              <li
                className="mt-5"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Peralatan modern & higenis sesuai standart medis
              </li>
              <li
                className="mt-5"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Therapist yang berpengalaman, serta ahli dibidangnya dan
                PROFESIONAL
              </li>
            </ul>
          </div>
        </div>

        {/* Kegiatan */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div
            className="text-center"
            data-aos="fade-down"
            data-aos-easing="ease-in-out"
            data-aos-duration="800"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Kegiatan Al-Mustofa
            </h1>
            <p
              className="mt-6 text-lg leading-8 text-gray-600"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              Al-Mustofa tidak hanya melayani di klinik saja, kami pun ikut
              turut serta melayani masyarakat dalam rangka baksos kepada
              masyarakat
            </p>
            <br />
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {[
                "/baksos/baksos1.jpg",
                "/baksos/baksos2.jpg",
                "/baksos/baksos3.jpg",
                "/baksos/baksos4.jpg",
              ].map((imageSrc, index) => (
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
                    onClick={() => openModal(imageSrc)}
                  />
                </div>
              ))}

              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
              >
                <button onClick={closeModal}>X</button>
                {selectedImage && (
                  <div style={{ textAlign: "center" }}>
                    <img
                      src={selectedImage}
                      alt="..."
                      className="max-w-full max-h-full"
                    />
                  </div>
                )}
              </Modal>
            </div>
            <h3
              onClick={directTo}
              className="text-sm font-medium text-green-600 hover:cursor-pointer hover:text-white hover:bg-green-600 hover:mx-20 hover:rounded-md border-green-600 text-center mt-5"
            >
              Show More {">"}
            </h3>

            {/* <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div> */}
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              data-aos="fade-down"
              data-aos-easing="ease-in-out"
              data-aos-duration="800"
            >
              Lokasi Al-Mustofa
            </h1>
            <a
              href="https://www.google.com/maps/place/Rumah+Sehat+Al+-+Mustofa/@-6.2242917,106.6856676,20z/data=!4m9!1m2!2m1!1sbpkp!3m5!1s0x2e69fb854664edc1:0x967832ad5270d748!8m2!3d-6.2242917!4d106.6859841!16s%2Fg%2F11trn0pyzj?entry=ttu"
              target="__blank"
            >
              <p
                className="mt-6 text-lg leading-8 text-blue-600 cur-pointer hover:underline"
                data-aos="zoom-in"
                data-aos-duration="800"
                data-aos-delay="300"
              >
                Jl. Sejahtera No.46, RT., 03/RW.03, Sudimara Pinang, Kec.
                Pinang, Kota Tangerang, Banten 15151
              </p>
            </a>
            <br />

            <div
              data-aos="flip-right"
              data-aos-duration="1500"
              data-aos-delay="300"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.78733559365486!2d106.68566761755743!3d-6.2242917270679845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb854664edc1%3A0x967832ad5270d748!2sRumah%20Sehat%20Al%20-%20Mustofa!5e0!3m2!1sid!2sid!4v1705286824556!5m2!1sid!2sid"
                width={isMobile ? "100%" : "672"}
                height={isMobile ? "350" : "450"}
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            {/* {isMobile ? (
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.78733559365486!2d106.68566761755743!3d-6.2242917270679845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb854664edc1%3A0x967832ad5270d748!2sRumah%20Sehat%20Al%20-%20Mustofa!5e0!3m2!1sid!2sid!4v1705286824556!5m2!1sid!2sid"
                                width="350"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">

                            </iframe>

                        ) : (
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d495.78733559365486!2d106.68566761755743!3d-6.2242917270679845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb854664edc1%3A0x967832ad5270d748!2sRumah%20Sehat%20Al%20-%20Mustofa!5e0!3m2!1sid!2sid!4v1705286824556!5m2!1sid!2sid"
                                width="672"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">

                            </iframe>
                        )} */}
            {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                Silahkan hubungi kami untuk.{' '}
                                <a href="#" className="font-semibold text-indigo-600">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Info Pengobatan Lebih Lanjut <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div> */}
          </div>
        </div>
        {/* <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div> */}
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
