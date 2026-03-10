const API = "https://fakestoreapi.com/products"

const grid = document.getElementById("productGrid")
const form = document.getElementById("productForm")
const loading = document.getElementById("loading")
const emptyState = document.getElementById("emptyState")

let products = []

// Fetch Products

async function getProducts(){

// loading.classList.remove("hidden")

try{

const res = await fetch(API)
products = await res.json()

renderProducts(products)

}catch(error){

alert("Failed to load products")

}

loading.classList.add("hidden")

}

// Render Products

function renderProducts(list){

grid.innerHTML = ""

if(list.length === 0){

emptyState.classList.remove("hidden")
return

}

emptyState.classList.add("hidden")

list.forEach(product=>{

const priceHighlight =
product.price < 20 ? "border-green-500 border-2" : ""

grid.innerHTML += `
<div class="bg-white p-4 rounded shadow hover:shadow-lg ${priceHighlight}">

<img src="${product.image}"
class="h-40 mx-auto object-contain">

<h2 class="font-bold mt-2">
${product.title}
</h2>

<p class="text-gray-500 text-sm">
${product.category}
</p>

<p class="text-green-600 font-bold">
$${product.price}
</p>

<p class="text-sm mt-2">
${product.description.substring(0,80)}...
</p>

<div class="mt-3">

<button
onclick="editProduct(${product.id})"
class="bg-yellow-400 px-2 py-1 rounded mr-2">
Edit
</button>

<button
onclick="deleteProduct(${product.id})"
class="bg-red-500 text-white px-2 py-1 rounded">
Delete
</button>

</div>

</div>
`

})

}

// Add Product

form.addEventListener("submit", async(e)=>{

e.preventDefault()

const newProduct = {

title:title.value,
price:Number(price.value),
description:description.value,
image:image.value,
category:category.value

}

try{

const res = await fetch(API,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(newProduct)

})

const data = await res.json()

products.unshift(data)

renderProducts(products)

alert("Product Added")

form.reset()

}catch(error){

alert("Failed to add product")

}

})

// Delete Product

async function deleteProduct(id){

if(!confirm("Delete this product?")) return

try{

await fetch(`${API}/${id}`,{

method:"DELETE"

})

products = products.filter(p=>p.id !== id)

renderProducts(products)

alert("Product deleted")

}catch(error){

alert("Delete failed")

}

}

// Edit Product

function editProduct(id){

const product = products.find(p=>p.id === id)

title.value = product.title
price.value = product.price
description.value = product.description
category.value = product.category
image.value = product.image

deleteProduct(id)

}

// Filter by Category

categoryFilter.addEventListener("change", async ()=>{

const category = categoryFilter.value

if(category === "all"){

renderProducts(products)
return

}

loading.classList.remove("hidden")

try{

const res = await fetch(`${API}/category/${category}`)

const data = await res.json()

renderProducts(data)

}catch(error){

alert("Filter failed")

}

loading.classList.add("hidden")

})

// Init

getProducts()