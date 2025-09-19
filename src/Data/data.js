const bannerCategoryItems = [
  {
    id: 0,
    name: "Women's Fashion",
    dropDown: true,
  },
  {
    id: 1,
    name: "Men's Fashion",
    dropDown: true,
  },
  {
    id: 2,
    name: "Electronics",
    dropDown: false,
  },
  {
    id: 3,
    name: "Home & Lifestyle",
    dropDown: false,
  },
  {
    id: 4,
    name: "Medicine",
    dropDown: false,
  },
  {
    id: 5,
    name: "Sports & Outdoor",
    dropDown: false,
  },
  {
    id: 6,
    name: "Baby's & Toys",
    dropDown: false,
  },
  {
    id: 7,
    name: "Groceries & Pets",
    dropDown: false,
  },
  {
    id: 8,
    name: "Health & Beauty",
    dropDown: false,
  },
];

export { bannerCategoryItems };

import productJoystick from "../assets/productAssets/productJoystick.png";
import productKeyboard from "../assets/productAssets/productKeyboard.png";
import productMonitor from "../assets/productAssets/productMonitor.png";
import productChair from "../assets/productAssets/productChair.png";
import productHeadphone from "../assets/productAssets/productHeadphone.png";
import productGPU from "../assets/productAssets/productGPU.png";
import {
  HiOutlineComputerDesktop,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";
import { TbDeviceGamepad } from "react-icons/tb";
import { PiHeadphonesLight } from "react-icons/pi";
import { CiCamera } from "react-icons/ci";
import { IoWatchOutline } from "react-icons/io5";

const flashSaleProducts = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    image: productJoystick,
    isDiscount: true,
    discountPercentage: "40%",
    currentPrice: 120,
    beforePrice: 160,
    rating: 5,
    totalReviewers: 88,
    isBestSellingProduct: true,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    image: productKeyboard,
    isDiscount: true,
    discountPercentage: "35%",
    currentPrice: 960,
    beforePrice: 1160,
    rating: 4,
    totalReviewers: 75,
    isBestSellingProduct: true,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    image: productMonitor,
    isDiscount: true,
    discountPercentage: "30%",
    currentPrice: 370,
    beforePrice: 400,
    rating: 4,
    totalReviewers: 99,
    isBestSellingProduct: true,
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    image: productChair,
    isDiscount: true,
    discountPercentage: "25%",
    currentPrice: 375,
    beforePrice: 400,
    rating: 4.5,
    totalReviewers: 99,
    isBestSellingProduct: true,
  },
  {
    id: 5,
    name: "Redragon M908 Gaming Mouse",
    image: productJoystick,
    isDiscount: true,
    discountPercentage: "20%",
    currentPrice: 45,
    beforePrice: 56,
    rating: 4.3,
    totalReviewers: 120,
  },
  {
    id: 6,
    name: "Logitech G Pro Headset",
    image: productHeadphone,
    isDiscount: true,
    discountPercentage: "28%",
    currentPrice: 72,
    beforePrice: 100,
    rating: 4.7,
    totalReviewers: 210,
  },
  {
    id: 7,
    name: "Razer BlackWidow V3 Keyboard",
    image: productChair,
    isDiscount: true,
    discountPercentage: "22%",
    currentPrice: 140,
    beforePrice: 180,
    rating: 4.6,
    totalReviewers: 150,
  },
  {
    id: 8,
    name: "SteelSeries Arctis 5",
    image: productChair,
    isDiscount: true,
    discountPercentage: "18%",
    currentPrice: 82,
    beforePrice: 100,
    rating: 4.4,
    totalReviewers: 190,
  },
  {
    id: 9,
    name: "MSI GeForce GTX 1660 Super",
    image: productGPU,
    isDiscount: true,
    discountPercentage: "15%",
    currentPrice: 320,
    beforePrice: 380,
    rating: 4.8,
    totalReviewers: 240,
  },
  {
    id: 10,
    name: "HyperX Alloy FPS Keyboard",
    image: productKeyboard,
    isDiscount: true,
    discountPercentage: "27%",
    currentPrice: 95,
    beforePrice: 130,
    rating: 4.5,
    totalReviewers: 175,
  },
];

export { flashSaleProducts };

const bestSellingProducts = flashSaleProducts.filter(
  (item) => item.isBestSellingProduct
);
export { bestSellingProducts };

const browserCategory = [
  {
    id: 1,
    icon: HiOutlineDevicePhoneMobile, // 👈 no JSX here
    title: "Phones",
  },
  {
    id: 2,
    icon: HiOutlineComputerDesktop,
    title: "Computers",
  },
  {
    id: 3,
    icon: IoWatchOutline,
    title: "Smartwatch",
  },
  {
    id: 4,
    icon: CiCamera,
    title: "Camera",
  },
  {
    id: 5,
    icon: PiHeadphonesLight,
    title: "Headphones",
  },
  {
    id: 6,
    icon: TbDeviceGamepad,
    title: "Gaming",
  },
];

export { browserCategory };
