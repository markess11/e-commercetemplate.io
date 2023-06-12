// Sample product data
const products = [
  { id: 1, name: 'Product 1', price: 9.99, colors: ['Red', 'Blue', 'Green'], stock: 99999999, image: 'https://tse4.mm.bing.net/th?id=OIP.ewIPWgQ3Hr91j6RAzqgnKAHaEK&pid=Api&P=0&h=180' },
  { id: 2, name: 'Product 2', price: 19.99, colors: ['Black', 'White'], stock: 5, image: 'https://tse3.mm.bing.net/th?id=OIP.kgjg8DmtaJ6HKFK76jTNlgHaEK&pid=Api&P=0&h=180' },
  { id: 3, name: 'Product 3', price: 14.99, colors: ['Yellow', 'Purple'], stock: 8, image: 'https://www.writermag.com/wp-content/uploads/2014/07/clothing.jpg' },
  // Add your own products below
  { id: 4, name: 'Your Product 1', price: 24.99, colors: ['Silver', 'Gold'], stock: 12, image: 'https://i5.walmartimages.com/asr/3cd704d8-11f6-4a33-868c-cb7f9ea26408.5d6cb24ff1fd4b389f3638f6d04de752.jpeg' },
  { id: 5, name: 'Your Product 2', price: 12.99, colors: ['Brown', 'Beige'], stock: 3, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80' },
  { id: 6, name: 'Your Product 3', price: 7.99, colors: ['Orange', 'Pink'], stock: 15, image: 'https://tse4.mm.bing.net/th?id=OIP._P6WHcsoWvC4yo4NQ8AsuQHaIk&pid=Api&P=0&h=180' },
];

// Function to display products
function displayProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  products.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <img src="${product.image}" alt="${product.name}">
      <p>$${product.price}</p>
      <p>Colors available: ${product.colors.join(', ')}</p>
      <p>Stock: ${product.stock}</p>
    `;

    productList.appendChild(productElement);
  });
}

// Function to filter products based on search query
function filterProducts() {
  const searchInput = document.getElementById('search-input');
  const searchQuery = searchInput.value.toLowerCase().trim();

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(searchQuery);
  });

  displayFilteredProducts(filteredProducts);
}

// Function to display filtered products
function displayFilteredProducts(filteredProducts) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  filteredProducts.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <img src="${product.image}" alt="${product.name}">
      <p>$${product.price}</p>
      <p>Colors available: ${product.colors.join(', ')}</p>
      <p>Stock: ${product.stock}</p>
    `;

    productList.appendChild(productElement);
  });
}

// Call the function to display all products initially
displayProducts();

// Add event listener to search button
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', filterProducts);
