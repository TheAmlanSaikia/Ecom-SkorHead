          import { v4 as uuid } from "uuid";

          /**
           * Product Database can be added here.
           * You can add products of your wish with different attributes
           * */

          export const products = [
            {
              _id: uuid(),
              title: "Air Jordan 1 Mid",
              brand: "Nike",
              price: "10298",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/air%20Jordon%20Myntra.webp",
              discount: Math.floor(Math.random() * 100),
              categoryName: "BasketBall",
              inStock: true,
              description: "Limited Edition Red Soles",
            },
            {
              _id: uuid(),
              title: "Chuck Taylor",
              brand: "Converse",
              price: "5000",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/Chuck%20Taylor%20Second%20Myatra.jpg",
              discount: Math.floor(Math.random() * 100),
              categoryName: "ChuckTaylor",
              inStock: true,
              description: "UNISEX HIGH TOP SHOE",
            },
            {
              _id: uuid(),
              title: "Floral Chuck",
              brand: "Converse",
              price: "7999",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/Floral%20Chuck%20Myntra.jpg",
              discount: Math.floor(Math.random() * 100),
              categoryName: "ChuckTaylor",
              inStock: true,
              description: "UNISEX HIGH TOP SHOE",
            },
            {
              _id: uuid(),
              title: "Hybrid Taylor",
              brand: "Converse",
              price: "8950",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/Hybrid%20Chuck%20Myntra.webp",
              discount: Math.floor(Math.random() * 100),
              categoryName: "ChuckTaylor",
              inStock: false,
              description: "UNISEX HYBRID HIGH TOP SHOE",
            },
            {
              _id: uuid(),
              title: "Dunk High Retro",
              brand: "Nike",
              price: "15000",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/9142d4aa-ef07-40b9-bb64-0a057cf8a1a3.webp",
              discount: Math.floor(Math.random() * 100),
              categoryName: "BasketBall",
              inStock: true,
              description: "UNISEX HIGH RETRO SHOE",
            },
            {
              _id: uuid(),
              title: "Lebron 9",
              brand: "Nike",
              price: "12499",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/Nike%20Floral.webp",
              discount: Math.floor(Math.random() * 100),
              categoryName: "Running",
              inStock: true,
              description: "FLORAL HIGH TOP SHOE",
            },
            {
              _id: uuid(),
              title: "Air Force 1 '07",
              brand: "Nike",
              price: "2000",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/NIKE%20air%20force%201.webp",
              discount: Math.floor(Math.random() * 100),
              categoryName: "Running",
              inStock: false,
              description: "UNISEX HIGH TOP SHOE",
            },
            {
              _id: uuid(),
              title: "CLASSIC SLIP-ON",
              brand: "Vans",
              price: "8000",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/vans%20slipon%20new.webp",
              discount: Math.floor(Math.random() * 100),
              categoryName: "SlipOn",
              inStock: true,
              description: "UNISEX HIGH TOP SHOE",
            },
            {
              _id: uuid(),
              title: "Authentic Black",
              brand: "Vans",
              price: "6000",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/vans%20authentic.png",
              discount: Math.floor(Math.random() * 100),
              categoryName: "Authentic",
              inStock: false,
              description: "UNISEX HIGH TOP SHOE",
            },
          ];
