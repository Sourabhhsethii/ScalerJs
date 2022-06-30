const products = Array.from(document.querySelectorAll('.product'));
console.log(products);
products.filter(product => parseFloat(product.innerHTML))
.forEach(product => console.log(product));