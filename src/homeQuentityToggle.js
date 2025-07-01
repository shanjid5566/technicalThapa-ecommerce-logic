export const homeQuentityToggle = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuentity = currentCardElement.querySelector(".productQuantity");
  let quentity = parseInt(productQuentity.getAttribute("data-quentity")) || 1;

  if (event.target.classList.contains("cartIncrement")) {
    if (quentity < stock) {
      quentity += 1;
    } else if (quentity == stock) {
      quentity = stock;
    }
  }
  if (event.target.classList.contains("cartDecrement")) {
    if (quentity > 1) {
      quentity -= 1;
    }
  }
  productQuentity.innerHTML = quentity;
  productQuentity.setAttribute("data-quentity", quentity.toString());
  return quentity;
};
