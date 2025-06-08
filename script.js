const products = [
  {
    name: "Hijab pashmina baby doll",
    description: "Pashmina bahan baby doll, yang nyaman dipakai seharian.",
    price: "Rp 35.000",
    image:"assets/produk1.jpg"
  },
  {
    name: "Hijab Segi Empat varis",
    description: "Paris premium lembut dan ringan, mudah dibentuk dan cocok untuk acara formal.",
    price: "Rp 35.000",
    image: "assets/produk2.jpg"
  },
  {
    name: "Mukena Polos",
    description: "Mukena bahan Armany silk yang adem dan nyaman dipakai beribadah.",
    price: "Rp 250.000",
    image: "assets/produk3.jpg"
  },

];
function displayProducts() {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="price">${product.price}</div>
      <div class="buttons">
        <button onclick="addToCart('${product.name}')">Tambah ke Keranjang</button>
        <button class="buy" onclick="buyNow('${product.name}')">Beli Sekarang</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function addToCart(productName) {
  alert("${productName}" telah ditambahkan ke keranjang!);
}

function buyNow(productName) {
  alert(Melanjutkan pembelian untuk "${productName}"...);
}

window.onload = displayProducts;

document.getElementById("tambahKeranjang").addEventListener("click", function() {
    // Redirect ke halaman keranjang
    window.location.href = "keranjang.html"; // Ganti "keranjang.html" dengan URL halaman keranjang Anda.
});