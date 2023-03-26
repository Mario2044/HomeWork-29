const categoriesList = document.querySelector('.categories ul');
const productsDiv = document.querySelector('.products');
const productInfoDiv = document.querySelector('.product-info');

// Список категорій і товарів
const products = {
  electronics: [
    { name: 'Смартфон', price: 10000 },
    { name: 'Ноутбук', price: 20000 },
    { name: 'Телевізор', price: 30000 }
  ],
  clothes: [
    { name: 'Футболка', price: 500 },
    { name: 'Джинси', price: 1000 },
    { name: 'Кофта', price: 1500 }
  ],
  books: [
    { name: 'JavaScript. Підручник', price: 500 },
    { name: 'Harry Potter', price: 800 },
    { name: 'Три мушкетери', price: 1000 }
  ]
};

// Відображення категорій
Object.keys(products).forEach(category => {
  const li = document.createElement('li');
  li.textContent = category;
  li.dataset.category = category;
  categoriesList.appendChild(li);
});

// Обробка кліків на категоріях
categoriesList.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    const selectedCategory = event.target.dataset.category;
    const selectedProducts = products[selectedCategory];
    const productsHTML = selectedProducts.map(product => {
      return `<div class="product" data-name="${product.name}" data-price="${product.price}">
                <h3>${product.name}</h3>
                <p>${product.price} грн</p>
              </div>`;
    }).join('');
    productsDiv.innerHTML = productsHTML;
  }
});

// Обробка кліків на товарах
productsDiv.addEventListener('click', event => {
  if (event.target.classList.contains('product')) {
    const name = event.target.dataset.name;
    const price = event.target.dataset.price;
    const productInfoHTML = `
      <h2>${name}</h2>
      <p>${price} грн</p>
      <button class="buy">Купити</button>
    `;
    productInfoDiv.innerHTML = productInfoHTML;
  }
});

// Обробка кліків на кнопці купити
productInfoDiv.addEventListener('click', event => {
  if (event.target.classList.contains('buy')) {
    alert('Товар куплений');
    productsDiv.innerHTML = '';
    productInfoDiv.innerHTML = '';
  }
});