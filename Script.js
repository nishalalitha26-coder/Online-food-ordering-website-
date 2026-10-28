Let cart = [];
Const cartBtn = document.getElementById(‘cart-btn’);
Const cartSidebar = document.getElementById(‘cart-sidebar’);
Const cartItemsContainer = document.getElementById(‘cart-items’);
Const cartCount = document.getElementById(‘cart-count’);
Const cartTotalPrice = document.getElementById(‘cart-total-price’);
cartBtn.addEventListener(‘click’, () => {
 cartSidebar.classList.toggle(‘active’);
});
Function addToCart(name, price) {
 Const existingItem = cart.find(item => item.name === name);
 If (existingItem) {
 existingItem.quantity += 1;
 } else {
 Cart.push({ name, price, quantity: 1 });
 }
 updateCartUI();
                                }Function updateCartUI() {
 cartItemsContainer.innerHTML = ‘’;
 let totalCount = 0;
 let totalPrice = 0;
 cart.forEach((item, index) => {
 totalCount += item.quantity;
 totalPrice += item.price * item.quantity;
 const itemDiv = document.createElement(‘div’);
 itemDiv.style.cssText = “display: flex; justify-content: space-between; align￾items: center; margin-bottom: 10px;”;
 itemDiv.innerHTML = `
 <span>${item.name} (x${item.quantity})</span>
 <span>$${(item.price * item.quantity).toFixed(2)}</span>
 <button onclick=”removeFromCart(${index})” style=”background:#ff4757; 
color:white; border:none; padding:2px 6px; border-radius:3px; 
cursor:pointer;”>X</button>
 `;
 cartItemsContainer.appendChild(itemDiv);
 });
 cartCount.innerText = totalCount;
 cartTotalPrice.innerText = totalPrice.toFixed(2);
}
Function removeFromCart(index) {
 Cart.splice(index, 1);
 updateCartUI();
}
Function checkout() {
 If (cart.length === 0) {
 Alert(‘Your cart is empty!’);
 Return;
 }
 Alert(‘Order placed successfully! Thank you for ordering with DeliciousBites.’);
 Cart = [];
 updateCartUI();
 cartSidebar.classList.remove(‘active’);
 }
