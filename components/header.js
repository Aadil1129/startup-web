import React from "react";
import Image from "next/image";
import Logo from "../public/images/logo.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Header() {
  return (
    <main>
      <header>
        <div className="logo">
          <a href="/">
            <Image src={Logo} width="120" alt="header logo" />
          </a>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/" style={{ display: "flex", alignItems: "center" }}>
                Feature
                <MdKeyboardArrowDown />
              </a>
              <ul className="submenu">
                <li>
                  <a href="/">Material</a>
                </li>
                <li>
                  <a href="/">Cost Effective</a>
                </li>
                <li>
                  <a href="/">Color Combination</a>
                </li>
                <li>
                  <a href="/">Nearby Location</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/" style={{ display: "flex", alignItems: "center" }}>
                Product
                <MdKeyboardArrowDown />
              </a>
              <ul className="submenu">
                <li>
                  <a href="/">Beds</a>
                </li>
                <li>
                  <a href="/">Chairs</a>
                </li>
                <li>
                  <a href="/">Cebinets</a>
                </li>
                <li>
                  <a href="/">Desk & Table</a>
                </li>
                <li>
                  <a href="/">Bookcase</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/">Store</a>
            </li>
            <li>
              <a href="/">Gallery</a>
            </li>
            <li>
              <a href="/">Review</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
