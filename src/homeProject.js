import { addToCart } from "./addToCart";
import { homeQuentityToggle } from "./homeQuentityToggle";

const productContainer = document.getElementById("productContainer");
const productTemplate = document.getElementById("productTemplate");
export const showProductsContainer = (products) => {
  if (!products) {
    return false;
  }

  products.forEach((prodructElem) => {
    const { id, name, category, brand, price, stock, description, image } =
      prodructElem;

    const prodructClone = document.importNode(productTemplate.content, true);
    prodructClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    prodructClone.querySelector(".productName").textContent = name;
    prodructClone.querySelector(".category").textContent = category;
    prodructClone.querySelector(".productStock").textContent = stock;
    prodructClone.querySelector(".productDescription").textContent =
      description;
    prodructClone.querySelector(".productPrice").textContent = `$${price}`;
    prodructClone.querySelector(".productActualPrice").textContent = `$${
      price * 4
    } `;
    prodructClone.querySelector(".productImage").src = image;
    prodructClone.querySelector(".productImage").alt = name;

    prodructClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        homeQuentityToggle(event, id, stock);
      });

    prodructClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
      });

    productContainer.append(prodructClone);
  });
};
