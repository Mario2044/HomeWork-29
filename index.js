const categoriesList = document.querySelector('.categories ul');
const productsList = document.querySelector('.products ul');
const productInfo = document.querySelector('.product-info');
const buyBtn = document.querySelector('.buy-btn');

const products = {
  electronics: [
    {name: 'Електрочайник', price: '50 грн'},
    {name: 'iPhone 14 pro max', price: '15 000 грн'},
    {name: 'Увлажнитель воздуха', price: '300 грн'}
  ],
  clothing: [
    {name: 'Носки', price: '20 грн'},
    {name: 'Рубашки', price: '50 грн'},
    {name: 'Штаны', price: '200 грн'}
  ],
  books: [
    {name: 'Звездная бабочка', price: '50 грн'},
    {name: 'Анатомия и физика', price: '300 грн'},
    {name: 'Грокаем алгоритмы', price: '150 грн'}
  ]
};

const ordersList = document.querySelector('#orders');
const myOrdersBtn = document.querySelector('#my-orders');

// при загрузці сторінки перевіряємо, чи є збережені замовлення у localStorage
const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];

// функція для відображення списку замовлень
function displayOrders() {
ordersList.innerHTML = ''; // очищаємо список перед відображенням

savedOrders.forEach((order) => {
const li = document.createElement('li');
li.innerHTML = `${order.date} - ${order.price} <button class="delete-order" data-id="${order.id}">видалити</button>`;
// додаємо обробник на кнопку видалення замовлення
const deleteBtn = li.querySelector('.delete-order');
deleteBtn.addEventListener('click', (event) => {
  const orderId = event.target.dataset.id;
  deleteOrder(orderId);
});

ordersList.appendChild(li);
});
}

// функція для додавання нового замовлення
function addOrder(productName, productPrice) {
  const newOrder = {
  id: Date.now(),
  date: new Date().toLocaleString(),
  name: productName,
  price: productPrice,
  };
  
  savedOrders.push(newOrder);
  localStorage.setItem('orders', JSON.stringify(savedOrders));
  }
  
  // функція для видалення замовлення
  function deleteOrder(orderId) {
  const updatedOrders = savedOrders.filter((order) => order.id != orderId);
  savedOrders = updatedOrders;
  localStorage.setItem('orders', JSON.stringify(savedOrders));
  displayOrders();
  }
  
  // додаємо обробник на кнопку "Мої замовлення"
  myOrdersBtn.addEventListener('click', () => {
  // показуємо список замовлень
  document.querySelector('#orders-list').style.display = 'block';
  // відображаємо збережені замовлення
  displayOrders();
  });
  
  // додаємо обробник на кнопку "Купити"
  buyBtn.addEventListener('click', () => {
  const productName = productInfo.querySelector('h2').textContent;
  const productPrice = productInfo.querySelector('p').textContent;
  addOrder(productName, productPrice);
  });

  // функція для відображення списку продуктів з вибраної категорії
function displayProducts(categoryName) {
  productsList.innerHTML = ''; // очищаємо список перед відображенням
  
  const categoryProducts = products[categoryName];
  
  categoryProducts.forEach((product) => {
  const li = document.createElement('li');
  li.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p><button class="add-to-cart">Купити</button>`;
  // додаємо обробник на кнопку "Купити"
  const addToCartBtn = li.querySelector('.add-to-cart');
  addToCartBtn.addEventListener('click', () => {
  productInfo.querySelector('h2').textContent = product.name;
  productInfo.querySelector('p').textContent = product.price;
  buyBtn.style.display = 'block';
  });
  productsList.appendChild(li);
  });
  }

  buyBtn.addEventListener('click', () => {
    const productName = productInfo.querySelector('h2').textContent;
    const productPrice = productInfo.querySelector('p').textContent;
    addOrder(productName, productPrice);
    // додаємо вибраний товар до списку замовлень
    const li = document.createElement('li');
    li.textContent = `${productName} - ${productPrice}`;
    ordersList.appendChild(li);
  });