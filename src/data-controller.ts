import { Product, products } from "./data";

function generateProductHTML(product: Product): string {
    return `<div class="store-item">
              <img src="${product.image}" alt="${product.name}" />
              <p>${product.name}</p>
              <p>${product.description}</p>
              <span>${product.rating}/5</span><span>$${product.price}</span><span>stock ${product.stock}</span>
            </div>`;
}

function renderProducts(prods: Product[]): void {
    // your code
    const main_page = document.getElementById("main-container"); 
    for (let prod of prods){
        const prod_element = document.createElement("div");
        const content_name = document.createElement("p");
        content_name.innerText=prod.name;
        const content_desc = document.createElement("p");
        content_desc.innerText=prod.description;
        prod_element.appendChild(content_name);
        prod_element.appendChild(content_desc);
        prod_element.className = "store-item";
        main_page?.appendChild(prod_element);

    }
}


function getByCategory(category: string): void {
    // your code
}

function getByRating(minRating: number): void {
    // your code
}

export { renderProducts, getByCategory, getByRating };