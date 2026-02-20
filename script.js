let cart = JSON.parse(localStorage.getItem("cart")) || [];
 
function goToMenu() {
    window.location.href = "menu.html";
}
 
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}
 
function loadCart() {
    let cartItems = document.getElementById("cartItems");
    let total = 0;
    cartItems.innerHTML = "";
 
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty 😔</p>";
        document.getElementById("total").innerText = "";
        return;
    }
 
    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <p>
                ${item.name} - ₹${item.price}
                <button onclick="removeItem(${index})">Remove ❌</button>
            </p>
        `;
        total += item.price;
    });
 
    document.getElementById("total").innerText = "Total: ₹" + total;
}

 function removeItem(index) {
    cart.splice(index, 1);   // remove item
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();              // reload cart
}
 
function paymentDone() {
    alert("Payment Successful 🎉");
    localStorage.removeItem("cart");
    window.location.href = "menu.html";
}
 
if (document.getElementById("cartItems")) {
    loadCart();
}
 