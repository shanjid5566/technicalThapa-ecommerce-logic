const totalCardItems = document.querySelector(".totalCardItems");
export const addCartValue = (arrLocalStrageProduct) => {

  return (totalCardItems.innerHTML = `<a href="#">
          <li class="w-24 bg-amber-400 rounded-sm py-3 px-6 text-xl">
            <i class="fa-solid fa-cart-shopping"> ${arrLocalStrageProduct.length} </i>
          </li>
        </a>`)
};
