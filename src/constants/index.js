import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigGuitar1,
  bigGuitar2,
  bigGuitar3,
  customer1,
  customer2,
  guitar4,
  guitar5,
  guitar6,
  guitar7,
  thumbnailGuitar1,
  thumbnailGuitar2,
  thumbnailGuitar3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const guitars = [
  {
    thumbnail: thumbnailGuitar1,
    bigGuitar: bigGuitar1,
  },
  {
    thumbnail: thumbnailGuitar2,
    bigGuitar: bigGuitar2,
  },
  {
    thumbnail: thumbnailGuitar3,
    bigGuitar: bigGuitar3,
  },
];

export const statistics = [
  { value: "25+", label: "Brands" },
  { value: "30+", label: "Shops" },
  { value: "150k+", label: "Customers" },
];

export const products = [
  {
    imgURL: guitar4,
    name: "Squier Sonic Telecaster IL",
    price: "$179.00",
  },
  {
    imgURL: guitar5,
    name: "Fender Player Telecaster MN Capri",
    price: "$769.00",
  },
  {
    imgURL: guitar6,
    name: "Godin Radium RW Winchester",
    price: "$1249.00",
  },
  {
    imgURL: guitar7,
    name: "Yamaha Pacifica 1611 Mike Stern",
    price: "$1999.00",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Guitars",
    links: [
      { name: "Electric Guitar Sets", link: "/" },
      { name: "ST Electric Guitars", link: "/" },
      { name: "T Electric Guitars", link: "/" },
      { name: "Premium Guitars", link: "/" },
      { name: "Signature Guitars", link: "/" },
      { name: "Double Cut Electric Guitars", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@fretfire.info", link: "mailto:customer@fretfire.info" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
