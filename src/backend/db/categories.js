import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "ChuckTaylor",
    color: "#f88d6b",
    image:"https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/Chuck-taylor-removebg-preview.png",
    
  },
  {
    _id: uuid(),
    categoryName:"BasketBall",
    color: "#e3d2ff",
    image:"https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/basketballwhite-removebg-preview.png"
  },
  {
    _id: uuid(),
    categoryName:"Running",
    color: "#fce8e9",
    image:"https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/Running_Shoes_Purple-removebg-preview.png"
  },
  {
    _id: uuid(),
    categoryName:"SlipOn",
    color:  "#d7faff",
    image:"https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/Slipon_prev_ui.png"
  },
  {
    _id: uuid(),
    categoryName:"Authentic",
    color: "#fde9ea",
    image:"https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/authentic%20shoes_prev_ui.png"
  },
];
