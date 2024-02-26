import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(products: Product[]): void {
    // your code
    const main_page = document.getElementById("main-container"); 
    
    for (let prod of products){
        // Create store item main container
        const prod_element = document.createElement("div");
        prod_element.className = "store-item";

        // Add image to store item
        const prod_image = document.createElement("img");
        prod_image.src = prod.image;

        // Add name to store item
        const prod_name = document.createElement("p");
        prod_name.innerText = prod.name;

        // Add description to store item
        const prod_desc = document.createElement("p");
        prod_desc.innerText = prod.description;

        // Add the price, rating, and stock spans to store item
        const prod_price = document.createElement("span");
        prod_price.innerText = "$" + prod.price;
        const prod_rating = document.createElement("span");
        prod_rating.innerText = "rating: " + prod.rating+"/5";
        const prod_stock = document.createElement("span");
        prod_stock.innerText = "stock: " + prod.stock;

        // Add items to store item
        prod_element.appendChild(prod_image);
        prod_element.appendChild(prod_name);
        prod_element.appendChild(prod_desc);
        prod_element.appendChild(prod_price);
        prod_element.appendChild(prod_rating);
        prod_element.appendChild(prod_stock);

        // Add store item to main page
        main_page?.appendChild(prod_element);
    }
}


function getByCategory(category: string): void {
     // Clear displayed products
     const main_page = document.getElementById("main-container");
     if (main_page){
         main_page.innerHTML = '';
     }
    const filteredProducts : Product[] = products.filter((a)=>a.category==category);

    renderProducts(filteredProducts);
}

function getByRating(minRating: number): void {
    // Clear displayed products
    const main_page = document.getElementById("main-container");
    if (main_page){
        main_page.innerHTML = '';
    }
    // Create a new products array with only the filtered by rating products
    const filteredProducts = products.filter(product => product.rating > minRating);
    // Render the products
    renderProducts(filteredProducts);
}

export { renderProducts, getByCategory, getByRating };