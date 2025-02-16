async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        renderProducts(products);
    } catch (error) {
        console.error("Veri alınırken hata oluştu:", error);
    }
}

function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = "";

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.title}" width="100">
            <h3>${product.title}</h3>
            <p>${product.price} TL</p>
        `;
        productDiv.addEventListener('click', () => openModal(product));
        productList.appendChild(productDiv);
    });
}

function openModal(product) {
    const modal = document.getElementById('modal');
    modal.classList.add('active');
    document.getElementById('modal-title').textContent = product.title;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-price').textContent = `${product.price} TL`;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

fetchProducts();
