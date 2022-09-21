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
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/996133ff-3007-4990-b855-9ea563041c011643276727223-Air-Jordan-5-Retro-Mens-Shoe-4481643276726732-1.webp",
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
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/lebron.webp",
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
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/98534d33-4a2e-418c-a730-bd592b5f0f471648201191652-AIR-FORCE-1-07-LV8-2-2351648201191379-1.webp",
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
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/0b9d4295-8267-4afa-9216-094d9e4905fd1597823276694-4.webp",
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
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/17b51932-84de-4b72-89a9-328d43036a761644548424153VansUnisexBlackSneakers4.webp",
              discount: Math.floor(Math.random() * 100),
              categoryName: "Authentic",
              inStock: false,
              description: "UNISEX HIGH TOP SHOE",
            },
            {
              _id: uuid(),
              title: "Ultraboost 22W",
              brand: "Adidas",
              price: "18999",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/Ultraboost%20X11.jpg",
              discount: Math.floor(Math.random() * 100),
              categoryName: "Running",
              inStock: true,
              description: "White & Red Woven Design",

            },
            {
              _id: uuid(),
              title: "Air Jordan 5 Retro",
              brand: "Nike",
              price: "13796",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/Air%20Jordon%20silver%20Retro.webp",
              discount: Math.floor(Math.random() * 100),
              categoryName: "BasketBall",
              inStock: true,
              description: "Men Black Air Jordon 5",

            },
            {
              _id: uuid(),
              title: "Tan Brown",
              brand: "Converse",
              price: "3379",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/Brown%20Shoes.webp",
              discount: Math.floor(Math.random() * 100),
              categoryName: "ChuckTaylor",
              inStock: true,
              description: "Unisex Tan Sneakers",

            },
            {
              _id: uuid(),
              title: "Solar Boost 3",
              brand: "Adidas",
              price: "15999",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/Solar%20Boost%203.jpg",
              discount: Math.floor(Math.random() * 100),
              categoryName: "Running",
              inStock: true,
              description: "Men Woven Design",

            },
            {
              _id: uuid(),
              title: "Karlie X9000",
              brand: "Adidas",
              price: "9099",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/Karlie%20Kloss%20X9000.jpg",
              discount: Math.floor(Math.random() * 100),
              categoryName: "Running",
              inStock: true,
              description: "Women Colourblocked",

            },

            {
              _id: uuid(),
              title: "Printed Slip-On",
              brand: "Vans",
              price: "4599",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/VAns%20NAtional.webp",
              discount: Math.floor(Math.random() * 100),
              categoryName: "SlipOn",
              inStock: true,
              description: "Unisex Printed ",

            },
            {
              _id: uuid(),
              title: "Colourblocked",
              brand: "Vans",
              price: "3149",
              image:
                "https://raw.githubusercontent.com/TheAmlanSaikia/ImageHost/main/VAns%20Violet.webp",
              discount: Math.floor(Math.random() * 100),
              categoryName: "Authentic",
              inStock: true,
              description: "Blue Colourblocked",

            },


          ];
      
