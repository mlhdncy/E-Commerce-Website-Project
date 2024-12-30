document.addEventListener("DOMContentLoaded", function () {
    const priceFilter = document.getElementById("price-filter");
    const typeFilter = document.getElementById("type-filter");
    const genderFilter = document.getElementById("gender-filter");

    priceFilter.addEventListener("change", applyFilters);
    typeFilter.addEventListener("change", applyFilters);
    genderFilter.addEventListener("change", applyFilters);

    function applyFilters() {
        const priceValue = priceFilter.value;
        const typeValue = typeFilter.value;
        const genderValue = genderFilter.value;

        document.querySelectorAll(".product-card").forEach(card => {
            const price = parseFloat(card.dataset.price);
            const type = card.dataset.type;
            const gender = card.dataset.gender;

            const matchesPrice =
                priceValue === "all" ||
                (priceValue === "under-100" && price < 100) ||
                (priceValue === "100-200" && price >= 100 && price <= 200) ||
                (priceValue === "above-200" && price > 200);

            const matchesType = typeValue === "all" || typeValue === type;
            const matchesGender = genderValue === "all" || genderValue === gender;

            if (matchesPrice && matchesType && matchesGender) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
        button.addEventListener("click", function () {
            let productName, productPrice, productImage;

            if (this.closest(".product-card")) {
                const productCard = this.closest(".product-card");
                productName = productCard.querySelector("h3").textContent;
                productPrice = parseFloat(productCard.querySelector("p").textContent.replace("$", ""));
                productImage = productCard.querySelector("img").src;
            } else if (this.closest(".product-detail-container")) {
                const productDetail = this.closest(".product-detail-container");
                productName = productDetail.querySelector("#product-name").textContent;
                productPrice = parseFloat(productDetail.querySelector("#product-price").textContent.replace("$", ""));
                productImage = productDetail.querySelector("#product-img").src;
            }

            const product = { name: productName, price: productPrice, image: productImage };
            cart.push(product);

            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${productName} has been added to your cart!`);
        });
    });
});

    const products = {
        rose: {
            name: "Heavenly Rose",
            price: 150,
            description: "A sophisticated floral fragrance with rose and jasmine notes.",
            image: "images/product1.jpg",
        },
        classic: {
            name: "Heavenly Classic",
            price: 120,
            description: "A timeless woody fragrance for men.",
            image: "images/product2.jpg",
        },
        "citrus-delight": {
            name: "Citrus Delight",
            price: 90,
            description: "A refreshing citrus fragrance for any occasion.",
            image: "images/product3.jpg",
        },
        "bloom-essence": {
            name: "Bloom Essence",
            price: 200,
            description: "A floral masterpiece that exudes elegance and beauty.",
            image: "images/product4.jpg",
        },
        "forest-edge": {
            name: "Forest Edge",
            price: 75,
            description: "A woody fragrance inspired by the freshness of the forest.",
            image: "images/product5.jpg",
        },
        "sunrise-spark": {
            name: "Sunrise Spark",
            price: 180,
            description: "A vibrant fragrance capturing the energy of sunrise.",
            image: "images/product6.jpg",
        },
        "golden-petals": {
            name: "Golden Petals",
            price: 250,
            description: "A luxurious floral fragrance with golden accents.",
            image: "images/product7.jpg",
        },
        "earthy-tones": {
            name: "Earthy Tones",
            price: 140,
            description: "A grounding fragrance with warm and earthy notes.",
            image: "images/product8.jpg",
        },
        "lime-twist": {
            name: "Lime Twist",
            price: 110,
            description: "A zesty citrus fragrance with a touch of lime.",
            image: "images/product9.jpg",
        },
        "pink-blossom": {
            name: "Pink Blossom",
            price: 95,
            description: "A delicate floral fragrance with cherry blossom notes.",
            image: "images/product10.jpg",
        },
    };

    const reviews = JSON.parse(localStorage.getItem("reviews")) || {};

    const urlParams = new URLSearchParams(window.location.search);
    const productKey = urlParams.get("product");

    if (productKey && products[productKey]) {
        const product = products[productKey];
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-price").textContent = `$${product.price}`;
        document.getElementById("product-description").textContent = product.description;
        document.getElementById("product-img").src = product.image;
        document.getElementById("product-img").alt = product.name;

        const reviewsList = document.getElementById("reviews");
        if (reviews[productKey]) {
            reviews[productKey].forEach((review) => {
                const li = document.createElement("li");
                li.innerHTML = `<strong>${review.rating} Stars:</strong> ${review.text}`;
                reviewsList.appendChild(li);
            });
        }
    } else {
        document.querySelector(".product-detail").innerHTML = `
            <h1>Product not found</h1>
            <p>The product you are looking for does not exist.</p>
        `;
    }

    document.querySelector(".submit-review").addEventListener("click", function () {
        const rating = document.getElementById("rating").value;
        const text = document.getElementById("review-text").value;

        if (!reviews[productKey]) {
            reviews[productKey] = [];
        }

        reviews[productKey].push({ rating, text });
        localStorage.setItem("reviews", JSON.stringify(reviews));

        const reviewsList = document.getElementById("reviews");
        const li = document.createElement("li");
        li.innerHTML = `<strong>${rating} Stars:</strong> ${text}`;
        reviewsList.appendChild(li);

        document.getElementById("review-text").value = "";
    });
document.addEventListener("DOMContentLoaded", function () {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
        button.addEventListener("click", function () {
            let productName, productPrice, productImage;

            if (this.closest(".product-card")) {
                const productCard = this.closest(".product-card");
                productName = productCard.querySelector("h3").textContent;
                productPrice = parseFloat(productCard.querySelector("p").textContent.replace("$", ""));
                productImage = productCard.querySelector("img").src;
            } else if (this.closest(".product-detail-container")) {
                const productDetail = this.closest(".product-detail-container");
                productName = productDetail.querySelector("#product-name").textContent;
                productPrice = parseFloat(productDetail.querySelector("#product-price").textContent.replace("$", ""));
                productImage = productDetail.querySelector("#product-img").src;
            }

            const product = { name: productName, price: productPrice, image: productImage };
            cart.push(product);

            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`${productName} has been added to your cart!`);
        });
    });
});