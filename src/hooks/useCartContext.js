import { useContext } from "react";
import { CartContext } from "../context/cartContext";

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw Error(
      "useCartContext hook must be used inside an CartContextProvider"
    );
  }
  return context;
};