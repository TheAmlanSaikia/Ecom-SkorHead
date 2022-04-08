import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categoriesdata, setCategoriesdata] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        const {
          data: { categories },
        } = response;
        setCategoriesdata(categories);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <CategoryContext.Provider value={{ categoriesdata }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
