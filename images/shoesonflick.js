const product = [
  {
    id: 0,
    name: "brownshoe1",
    tag: "shoe4",
    price: 25000,
    incart: 0,
  },

  {
    id: 1,
    name: "brownShoe2",
    tag: "shoe5",
    price: 15000,
    incart: 0,
  },

  {
    id: 2,
    name: "brownShoe3",
    tag: "shoe6",
    price: 20000,
    incart: 0,
  },
  {
    id: 3,
    name: "brownShoe4",
    tag: "shoe7",
    price: 16000,
    incart: 0,
  },
  {
    id: 4,
    name: "brownShoe5",
    tag: "shoe8",
    price: 13000,
    incart: 0,
  },
  {
    id: 5,
    name: "brownShoe6",
    tag: "shoe9",
    price: 12000,
    incart: 0,
  },
  {
    id: 6,
    name: "brownShoe7",
    tag: "shoe10",
    price: 15000,
    incart: 0,
  },
  {
    id: 7,
    name: "brownShoe8",
    tag: "shoe11",
    price: 19000,
    incart: 0,
  },
  {
    id: 8,
    name: "brownShoe9",
    tag: "shoe12",
    price: 14000,
    incart: 0,
  },
  {
    id: 9,
    name: "sneakers",
    tag: "sneaker1",
    price: 9000,
    incart: 0,
  },
  {
    id: 10,
    name: "sneakers2",
    tag: "sneaker2",
    price: 15000,
    incart: 0,
  },
  {
    id: 11,
    name: "Sneakers3",
    tag: "sneaker3",
    price: 150000,
    incart: 0,
  },
  {
    id: 12,
    name: "Sneakers4",
    tag: "sneaker4",
    price: 20000,
    incart: 0,
  },
  {
    id: 13,
    name: "Belt1",
    tag: "belt1",
    price: 10000,
    incart: 0,
  },
  {
    id: 14,
    name: "Belt2",
    tag: "belt2",
    price: 8000,
    incart: 0,
  },
  {
    id: 15,
    name: "Belt3",
    tag: "belt3",
    price: 12000,
    incart: 0,
  },
  {
    id: 16,
    name: "Belt4",
    tag: "belt4",
    price: 14000,
    incart: 0,
  },

  {
    id: 17,
    name: "Belt5",
    tag: "belt5",
    price: 20000,
    incart: 0,
  },
  {
    id: 18,
    name: "Belt6",
    tag: "belt6",
    price: 16000,
    incart: 0,
  },
  {
    id: 19,
    name: "brownShoe1",
    tag: "deepbeownshoe",
    price: 20,
    incart: 0,
  },
  {
    id: 20,
    name: "brownShoe1",
    tag: "deepbeownshoe",
    price: 20,
    incart: 0,
  },
  {
    id: 21,
    name: "brownShoe1",
    tag: "deepbeownshoe",
    price: 20,
    incart: 0,
  },
  {
    id: 22,
    name: "brownShoe1",
    tag: "deepbeownshoe",
    price: 20,
    incart: 0,
  },
  {
    id: 23,
    name: "brownShoe1",
    tag: "deepbeownshoe",
    price: 20,
    incart: 0,
  },
  {
    id: 24,
    name: "brownShoe1",
    tag: "deepbeownshoe",
    price: 20,
    incart: 0,
  },
];

function getLocal() {
  return JSON.parse(localStorage.getItem("store"));
}
function getTotalPrice() {
  const storage = getLocal();
  // console.log(storage);
  const totalIncart =
    storage?.map((x) => x.incart)?.reduce((a, b) => a + b, 0) ?? 0;
  quantity.innerHTML = totalIncart;
}
const carts = document.querySelectorAll(".addcart");
const quantity = document.querySelector(".quantity");
const cartArr = getLocal() ? getLocal() : [];

carts.forEach((cart, i) => {
  cart.addEventListener("click", () => {
    const a = (product.at(i).incart += 1);
    const b = { ...product.at(i), incart: a };
    if (cartArr.some((x) => x.id === product.at(i).id)) {
      cartArr.filter((x) => x.id !== product.at(i).id);
      cartArr.find((x) => x.id === product.at(i).id).incart += 1;
    } else cartArr.push(b);
    localStorage.setItem("store", JSON.stringify(cartArr));
    getTotalPrice();
  });
});
// localStorage.clear();
window.addEventListener("load", getTotalPrice);

function delItem(i) {
  const findedCartArr = cartArr.find((arr) => arr.id === i);
  const fin = (findedCartArr.incart -= 1);
  // const update =
  //   findedCartArr.incart < 1
  //     ? cartArr.filter((x) => x.incart !== 0)
  //     : cartArr.map((x) => {
  //         if (x.id === i) return { ...x, incart: fin };
  //         // else return x;
  //       });

  localStorage.setItem("store", JSON.stringify(update));
  getTotalPrice();
  displayCart();
}

function displayCart() {
  const cartItems = getLocal();
  // console.log(cartItems);

  let productContainer = document.querySelector(".product");
  //  let cartCost =
  // localStorage.getItem("totalCost");
  //  if (cartItems && productContainer) {
  productContainer.innerHTML = "";
  Object.values(cartItems).forEach((item, index) => {
    productContainer.innerHTML += `
<div class="Products">
  <ion-icon id="iconClose" name="close-circle-outline"></ion-icon>

  <button onclick="delItem(${index})">xx</button>
  <img src="/images/${item.tag}.jpg" />
  <span>${item.name}</span>

  <div class="Price">N${item.price}.00</div>

  <div class="secondQuantity">
    <ion-icon class="decrease" name="arrow-back-circle-outline"></ion-icon>
    <span>${item.incart}</span>
    <ion-icon class="increase" name="arrow-forward-circle-outline"></ion-icon>
  </div>
  <div class="total">N${item.incart * item.price}.00</div>
</div>

`;
  });
  productContainer.innerHTML += `
<div class="productTotalContainer">
  <h4 class="productTotalTitle">Product Total Price</h4>
  <h4 class="producttotal">N${cartItems
    .map((item) => item.incart * item.price)
    .reduce((a, b) => a + b, 0)}.00</h4>
</div>
`;
}
displayCart();
window.addEventListener("load", displayCart);

console.log(cartArr);
