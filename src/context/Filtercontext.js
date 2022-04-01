import { createContext, useContext, useReducer } from "react";
import { ReducerFunction } from "../reducer/ReducerFunction";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerFunction, {
    sortBy: "",
    categories: {
      ChuckTaylor: false,
      BasketBall: false,
      Running: false,
      SlipOn: false,
      Authentic: false,
    },
    brands: {
      Nike: false,
      Converse: false,
      Vans: false,
      Adidas: false,
    },
  });

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
