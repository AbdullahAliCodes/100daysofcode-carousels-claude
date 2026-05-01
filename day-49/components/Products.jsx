import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

import "./Products.css";

const Products = () => {
  return (
    <>
      <div className="products-row">
        <Product
          id={2}
          title="Skytech Gaming Crystal Gaming PC, AMD Ryzen 7 5700 3.7GHz, NVIDIA RTX 5060, 1TB NVMe SSD, 32GB DDR4 RAM 3200, 650W Gold PSU, Wi-Fi, Win 11, Desktop"
          imgSrc="https://m.media-amazon.com/images/I/61efBrp-MeL._AC_UL640_FMwebp_QL65_.jpg"
          rating={4.5}
          price="$1,119.99"
        />
        <Product
          id={1}
          title="Xbox Wireless Gaming Controller | Electric Volt | Console, PC, & Android | Textured Grip | Wireless, Bluetooth, USB-C Connectivity"
          imgSrc="https://m.media-amazon.com/images/I/511p8oS7pPL._AC_UL640_FMwebp_QL65_.jpg"
          rating={4.6}
          price="$59.99"
        />
      </div>
      <div className="products-row">
        <Product
          id={2}
          title="Wired Gaming Earbuds, Ak3file in Ear Monitors, Deep Bass Sound Wired Earbuds, HiFi in Ear Headphones with 1DD 10mm Dynamic Driver, IEM for Music Gaming Video Calling (Black)"
          imgSrc="https://m.media-amazon.com/images/I/619bBByro4L._AC_UL640_FMwebp_QL65_.jpg"
          rating={4.2}
          price="$8.49"
        />
        <Product
          id={2}
          title="ASUS ROG Strix 27” 1440P OLED Gaming Monitor (XG27AQDMG) - QHD, Glossy OLED, 240Hz, 0.03ms, Custom Heatsink, Anti-flicker,Uniform Brightness, G-SYNC Compatible, 99% DCI-P3, DisplayWidget, 3yr warranty"
          imgSrc="https://m.media-amazon.com/images/I/91x1-f09emL._AC_UL640_FMwebp_QL65_.jpg"
          rating={4.4}
          price="$549.00"
        />
        <Product
          id={1}
          title="Razer DeathAdder V4 Pro Wireless Gaming Mouse: 57g Lightweight -
          HyperSpeed Wireless Gen-2 - Optical Scroll Wheel - Optical Switches
          Gen-4 - Focus Pro 45K Sensor Gen-2 - Up to 150 Hr Battery - White"
          imgSrc="https://m.media-amazon.com/images/I/61r4lrp65bL._AC_UL640_FMwebp_QL65_.jpg"
          rating={4.4}
          price="$59.99"
        />
      </div>
      <div className="products-row">
        <Product
          id={2}
          title='HOOBRO Gaming Floating Shelves with LED Lights, 28.7" LED Wall Mounted Shelf, 3-Tier Display Rack for Wall Storage, Floating Rack with Hanging Rod and 6 S-Hooks, for Gaming Room, Black BB70DBJ01'
          imgSrc="https://m.media-amazon.com/images/I/71ZxwQJ32NL._AC_UL640_FMwebp_QL65_.jpg"
          rating={4.3}
          price="$47.99"
        />
      </div>
    </>
  );
};

export default Products;
