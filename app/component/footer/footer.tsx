import React from 'react'
// import { Link } from "react-scroll";
import Link from 'next/link';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <ul>
                    <li className="nav-item">
                        <Link
                            href={"/"}
                        >
                            Beranda
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href={"/terapi"}
                        >
                            Terapi
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href={"/produk"}
                        >
                            Produk
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            href={"/aktivitas"}
                        >
                            Aktivitas
                        </Link>
                    </li>
                </ul>
                <div className="bottom">
                    <p>&copy; 2023 Rumah Sehat Al-Mustofa. All rights reserved</p>
                    <span className="line"></span>
                </div>
            </div>
        </div>
    );
}

export default Footer
