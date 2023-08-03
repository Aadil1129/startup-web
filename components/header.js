import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  return (
    <main>
      <header>
        <div className="logo">
          <Link href="/">
            <Image src={Logo} width="120" alt="header logo" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                Feature
                <MdKeyboardArrowDown />
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/">Material</Link>
                </li>
                <li>
                  <Link href="/">Cost Effective</Link>
                </li>
                <li>
                  <Link href="/">Color Combination</Link>
                </li>
                <li>
                  <Link href="/">Nearby Location</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/" style={{ display: "flex", alignItems: "center" }}>
                Product
                <MdKeyboardArrowDown />
              </Link>
              <ul className="submenu">
                <li>
                  <Link href="/">Beds</Link>
                </li>
                <li>
                  <Link href="/">Chairs</Link>
                </li>
                <li>
                  <Link href="/">Cebinets</Link>
                </li>
                <li>
                  <Link href="/">Desk & Table</Link>
                </li>
                <li>
                  <Link href="/">Bookcase</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">Store</Link>
            </li>
            <li>
              <Link href="/">Gallery</Link>
            </li>
            <li>
              <Link href="/">Review</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
