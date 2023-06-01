let categoriesList = document.querySelector('.categories ul');
let productDiv = document.querySelector('.products');
let productInfoDiv = document.querySelector('.product-info');
let btn = document.querySelector('.btn');

let products = {
  electronics: [
    { name: 'Смартфон', price: 5500 },
    { name: 'Електрочайник', price: 2500 },
    { name: 'Увлажнитель воздуха', price: 1750 }
  ],
  clothes: [
    { name: 'Шорты', price: 500 },
    { name: 'Джинсы', price: 1500 },
    { name: 'Куртка', price: 1750 }
  ],
  books: [
    { name: 'Звездная Бабочка - Бернар Вербер', price: 400 },
    { name: 'Мастер на все руки', price: 350 },
    { name: 'Енциклопедия', price: 750 }
  ]
};

Object.keys(products).forEach(category => {
  let li = document.createElement('li');
  li.textContent = category;
  li.dataset.category = category;
  categoriesList.appendChild(li);
});

categoriesList.addEventListener('click', event => {
  if (event.target.tagName === 'LI') {
    let selectCategory = event.target.dataset.category;
    let selectProducts = products[selectCategory];
    let productsHtml = selectProducts.map(product => {
      return `<div class="product" data-name="${product.name}" data-price="${product.price}">
      <h3>${product.name}</h3>
      <p>${product.price} грн</p>
      </div>`;
    }).join('');
    productDiv.innerHTML = productsHtml;
  }
});

productDiv.addEventListener('click', event => {
  if (event.target.classList.contains('product')) {
    const name = event.target.dataset.name;
    const price = event.target.dataset.price;
    const productInfoHTML = `
      <h2>${name}</h2>
      <p>${price} грн</p>
      <button class="buy">Купить</button>
    `;
    productInfoDiv.innerHTML = productInfoHTML;
  }
});

productInfoDiv.addEventListener('click', event => {
  if (event.target.classList.contains('buy')) {
    alert('Товар куплен');
    productDiv.innerHTML = '';
    productInfoDiv.innerHTML = '';
  }
});

btn.addEventListener('click', () => {
  console.log('hello')
})

