import tourOne from "./images/tour-1.jpeg";
import tourTwo from "./images/tour-2.jpeg";
import tourThree from "./images/tour-3.jpeg";
import tourFour from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
      " Asperiores, official.",
  },
  {
    id: 2,
    icon: "fas fa-wallet fa-fw",
    title: "endless hiking",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
      " Asperiores, official.",
  },

  {
    id: 3,
    icon: "fas fa-wallet fa-fw",
    title: "amazing comfort",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
      " Asperiores, official.",
  },
];

export const tours = [
  {
    id: 1,
    image: tourOne,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "china",
    duration: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    image: tourTwo,
    date: "october 1th, 2020",
    title: "best of java",
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "indonesia",
    duration: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    image: tourThree,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "kenya",
    duration: "4 days",
    price: "from $1000",
  },
  {
    id: 4,
    image: tourFour,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    country: "hong kong",
    duration: "8 days",
    price: "from $5000",
  },
];
