import { addCartValue } from "./addCartValue";
import { getCartProductFromLS } from "./getCartProdutFromLS";

export const addToCart = (event, id, stock) => {
  const arrLocalStorageProduct = getCartProductFromLS();
  const currentCardElement = document.querySelector(`#card${id}`);

  let quantity = Number(
    currentCardElement.querySelector(".productQuantity").innerHTML
  );
  let priceText = currentCardElement.querySelector(".productPrice").innerHTML;

  // Remove "$" and convert to number
  let unitPrice = Number(priceText.replace("$", ""));
  let totalPrice = unitPrice * quantity;

  let existingProd = arrLocalStorageProduct.find(
    (curProd) => curProd.id === id
  );

  if (existingProd) {
    const updatedCart = arrLocalStorageProduct.map((element) => {
      if (element.id === id) {
        return {
          id,
          quantity,
          price: totalPrice,
        };
      }
      return element;
    });

    localStorage.setItem("cartProductLS", JSON.stringify(updatedCart));
    addCartValue(updatedCart);
    return;
  }

  // New product
  const newProduct = { id, quantity, price: totalPrice };
  arrLocalStorageProduct.push(newProduct);
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
  addCartValue(arrLocalStorageProduct);
};
