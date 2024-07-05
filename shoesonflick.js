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
    name: "tie1",
    tag: "tie1",
    price: 20000,
    incart: 0,
  },
  {
    id: 20,
    name: "tie2",
    tag: "tie2",
    price: 20500,
    incart: 0,
  },
  {
    id: 21,
    name: "tie3",
    tag: "tie3",
    price: 20,
    incart: 0,
  },
  {
    id: 22,
    name: "tie4",
    tag: "tie4",
    price: 20,
    incart: 0,
  },
  {
    id: 23,
    name: "tie5",
    tag: "tie5",
    price: 20,
    incart: 0,
  },
  {
    id: 24,
    name: "tie6",
    tag: "tie6",
    price: 200,
    incart: 0,
  },
  {
    id: 25,
    name: "Smartwatch1",
    tag: "watch1",
    price: 15000,
    incart: 0,
  },
  {
    id: 26,
    name: "Smartwatch2",
    tag: "watch2",
    price: 15000,
    incart: 0,
  },
  {
    id: 27,
    name: "Smartwatch3",
    tag: "shoe5",
    price: 13000,
    incart: 0,
  },
  {
    id: 28,
    name: "Smartwatch4",
    tag: "shoe5",
    price: 15000,
    incart: 0,
  },
  {
    id: 29,
    name: "Smartwatch5",
    tag: "shoe5",
    price: 15000,
    incart: 0,
  },
  {
    id: 30,
    name: "Smartwatch6",
    tag: "shoe5",
    price: 15000,
    incart: 0,
  },

  {
    id: 31,
    name: "Smartwatch7",
    tag: "shoe5",
    price: 15000,
    incart: 0,
  },
  {
    id: 32,
    name: "Smartwatch8",
    tag: "shoe5",
    price: 15000,
    incart: 0,
  },
];

document.addEventListener("DOMContentLoaded", function () {
  function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) {
      sidebar.style.display = "flex";
    } else {
      console.error("Sidebar element not found");
    }
  }
  function hideSidebar() {
    const hidebar = document.querySelector(".sidebar");
    hidebar.style.display = "none";
  }
  window.showSidebar = showSidebar;
  window.hideSidebar = hideSidebar;
  console.log("i am work", sidebar);
  console.log("i am work yes", hideSidebar());
});

function getLocal() {
  return JSON.parse(localStorage.getItem("userCart"));
}
const carts = document.querySelectorAll(".addcart");
const quantity = document.querySelector(".quantity");
let cartArr = getLocal() ? getLocal() : [];

function getTotalPrice() {
  const storage = getLocal();
  const totalIncart =
    storage?.map((x) => x.incart)?.reduce((a, b) => a + b, 0) ?? 0;
  quantity.innerHTML = totalIncart;
}
console.log(quantity);

carts.forEach((cart, i) => {
  cart.addEventListener("click", () => {
    // Get the current product and update its 'incart' property
    const productItem = product.at(i);
    const newIncart = (productItem.incart += 1);
    const updatedProduct = { ...productItem, incart: newIncart };

    // Check if the product already exists in cartArr
    const existingProductIndex = cartArr.findIndex(
      (x) => x.id === productItem.id
    );

    if (existingProductIndex !== -1) {
      // Update the existing product's quantity
      cartArr[existingProductIndex].incart += 1;
    } else {
      // Add the new product to cartArr
      cartArr.push(updatedProduct);
    }

    // Save the updated cart array to local storage
    localStorage.setItem("userCart", JSON.stringify(cartArr));

    // Update the total price and display the cart
    getTotalPrice();
    displayCart();
    updateUserCartInStorage();
  });
});
function displayCart() {
  let cartItems = getLocal();
  console.log(cartItems);
  let productContainer = document.querySelector(".product");
  productContainer.innerHTML = "";
  cartItems.forEach((item) => {
    const { id, name, incart, price, tag } = item;
    productContainer.innerHTML += `
 <div class="Products">
   <ion-icon onclick="delItem(${id})"id="iconClose" name="close-circle-outline"></ion-icon>

   <img src="/images/${tag}.jpg" />
   <span>${name}</span>

   <div class="Price">N${price}.00</div>

   <div class="secondQuantity">
     <ion-icon   onclick="decrementInCart(${id})" class="decrease" name="arrow-back-circle-outline"></ion-icon>
     <span>${incart}</span>
     <ion-icon onclick="incrementInCart(${id})" class="increase" name="arrow-forward-circle-outline"></ion-icon>   </div>
   <div class="total">N${incart * price}.00</div>
 </div>

 `;
  });
  const total = cartItems
    .map((item) => item.incart * item.price)
    .reduce((a, b) => a + b, 0);
  productContainer.innerHTML += `
  <div class="checkOutDiv">

  <div class="productTotalContainer">
   <h4 class="productTotalTitle">Product Total Price</h4>
   <h4 class="producttotal">N${total}.00</h4>
  </div>
  <div class="checkOut">
    <button>Proceed to Pay</button>
  </div>
  </div>
`;

  //   incrementInCart();
  //   decrementInCart();
}

function incrementInCart(productId) {
  const productInCart = cartArr.find((item) => item.id === productId);
  if (productInCart) {
    productInCart.incart += 1;
    localStorage.setItem("userCart", JSON.stringify(cartArr));
    displayCart();
    getTotalPrice();
    updateUserCartInStorage();
  }
}

function decrementInCart(productId) {
  const productInCart = cartArr.find((item) => item.id === productId);
  if (productInCart && productInCart.incart > 0) {
    productInCart.incart -= 1;
    if (productInCart.incart === 0) {
      cartArr = cartArr.filter((item) => item.id !== productId);
    }
    localStorage.setItem("userCart", JSON.stringify(cartArr));
    displayCart();
    getTotalPrice();
    updateUserCartInStorage();
  }
}

function delItem(productId) {
  cartArr = cartArr.filter((item) => item.id !== productId);
  localStorage.setItem("userCart", JSON.stringify(cartArr));
  displayCart();
  getTotalPrice();
  updateUserCartInStorage();
}

//Initial call to display cart and total price on page load
document.addEventListener("DOMContentLoaded", () => {
  displayCart();
  getTotalPrice();
});
//sign up logic//66666666666666
function saveData() {
  let name, email, tel, password, gender;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  telNum = document.getElementById("telNum").value;
  password = document.getElementById("password").value;
  gender = document.getElementById("gender").value;

  //console.log(name, password, email, telNum, gender);
  let users_record = new Array();
  users_record = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : [];
  if (
    users_record.some((v) => {
      return v.email == email;
    })
  ) {
    alert("Email as already been used");
  } else {
    users_record.push({
      name: name,
      telNum: telNum,
      email: email,
      password: password,
      gender: gender,
    });
  }
  localStorage.setItem("user", JSON.stringify(users_record));
}

function gotoLogin() {
  window.location.href = "login.html";
}
// login logic///////////////////////////////////////
function saveLoginData() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let users_record = JSON.parse(localStorage.getItem("user")) || [];
  let currentUser = users_record.find(
    (user) => user.email === email && user.password === password
  );
  if (currentUser) {
    alert("login successful");
    localStorage.setItem("currentUserEmail", currentUser.email);
    localStorage.setItem("currentUserName", currentUser.name);
    localStorage.setItem("currentUserGender", currentUser.gender);
    localStorage.setItem("currentUserTelNum", currentUser.telNum);

    localStorage.setItem("userCart", JSON.stringify(currentUser.cartArr || []));
    window.location.href = "shoesonflick.html";
  } else {
    alert("Login Failed");
  }
}

function updateUserCartInStorage() {
  let email = localStorage.getItem("currentUserEmail");
  if (!email) return;

  let users_record = JSON.parse(localStorage.getItem("user")) || [];
  let userIndex = users_record.findIndex((user) => user.email === email);
  if (userIndex === -1) return;

  users_record[userIndex].cartArr = JSON.parse(
    localStorage.getItem("userCart")
  );
  localStorage.setItem("user", JSON.stringify(users_record));
}

function logOut() {
  // Save the user's cart data
  updateUserCartInStorage();

  // Clear the current user data from localStorage
  localStorage.removeItem("currentUserEmail");
  localStorage.removeItem("userCart");
  localStorage.removeItem("currentUserName");
  localStorage.removeItem("currentUserGender");
  localStorage.removeItem("currentUserTelNum");

  // Redirect to the login page or perform other logout actions
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", function () {
  // Display current profile picture if it exists
  const profilePicture = document.getElementById("profilePicture");
  const savedProfilePicture = localStorage.getItem("profilePicture");
  if (savedProfilePicture) {
    profilePicture.src = savedProfilePicture;
    profilePicture.style.display = "block";

    profilePicture.style.borderRadius = "50%";
  } else {
    profilePicture.style.backgroundImage = "url(images/profile.svg)";
    profilePicture.style.display = "block";
  }

  profilePicture.addEventListener("click", function () {
    // Simulate changing the profile picture
    const newProfilePicture = "url(images/profile.svg)";

    // Save the new profile picture to localStorage
    localStorage.setItem("profilePicture", newProfilePicture);

    // Update the profile picture displayed
    profilePicture.src = newProfilePicture;
    profilePicture.style.backgroundImage = "none"; // Remove default icon
    profilePicture.style.backgroundRepeat = "no-repeat";
  });

  const profilePictureInput = document.getElementById("profilePictureInput");
  profilePictureInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const base64String = e.target.result;
        profilePicture.src = base64String;
        profilePicture.style.display = "block";
        localStorage.setItem("profilePicture", base64String);
      };
      reader.readAsDataURL(file);
    }
  });
});

function deleteProfilePicture() {
  localStorage.removeItem("profilePicture");
  const profilePicture = document.getElementById("profilePicture");
  profilePicture.src = "";
  profilePicture.style.display = "none";
}

function logOut() {
  localStorage.removeItem("currentUserName");
  localStorage.removeItem("email");
  localStorage.removeItem("profilePicture");
  // Redirect to login page or perform other logout a0a ctions
  window.location.href = "login.html";
}
//HAMBUGER FOR TOGGLE
//HAMBUGER FOR TOGGLE////////////////
//HAMBUGER FOR TOGGLE////////////////
const hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};
//navBar = document.querySelector("nav-bar");
//navBar.classList.toggle("active");
