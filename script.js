
console.log("Rudraksh Nexus Loaded Successfully");

const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.onclick = function () {

    if (music.paused) {

        music.play();
        btn.innerHTML = "⏸ Pause";

    } else {

        music.pause();
        btn.innerHTML = "🎵 Music";

    }

};

const slides = document.querySelectorAll(".hero-slide");

let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add("active");

},3000);

const loginBtn = document.getElementById("loginBtn");
const loginPopup = document.getElementById("loginPopup");
const closeLogin = document.getElementById("closeLogin");

loginBtn.addEventListener("click", () => {
    loginPopup.style.display = "flex";
});

closeLogin.addEventListener("click", () => {
    loginPopup.style.display = "none";
});

let wish = 0;

document.querySelectorAll(".product button").forEach(btn=>{
    btn.addEventListener("dblclick",()=>{
        wish++;
        document.getElementById("wishCount").textContent = wish;
    });
});

let cart = 0;

document.querySelectorAll(".product button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        cart++;

        document.getElementById("cartCount").textContent = cart;

        const popup =
        document.getElementById("cartPopup");

        popup.style.display = "block";

        setTimeout(()=>{
            popup.style.display = "none";
        },2000);

    });

});

const reviews = document.querySelectorAll(".review-box");

let reviewIndex = 0;

setInterval(() => {

reviews[reviewIndex].classList.remove("active-review");

reviewIndex++;

if(reviewIndex >= reviews.length){
    reviewIndex = 0;
}

reviews[reviewIndex].classList.add("active-review");

},3000);

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},2000);

});

function animateValue(id, start, end, duration){

    let current = start;

    const increment = end / 100;

    const timer = setInterval(() => {

        current += increment;

        if(current >= end){

            current = end;

            clearInterval(timer);
        }

        document.getElementById(id).innerText =
        id === "rating"
        ? current.toFixed(1) + "★"
        : Math.floor(current) + "+";

    }, duration / 100);

}

animateValue("customers",0,10000,3000);

animateValue("orders",0,5000,3000);

animateValue("rating",0,4.9,3000);

console.log(document.getElementById("customers"));
console.log(document.getElementById("orders"));
console.log(document.getElementById("rating"));

function openProduct(img,title,price,desc){

    document.getElementById("popupImg").src = img;
    document.getElementById("popupTitle").innerText = title;
    document.getElementById("popupPrice").innerText = price;
    document.getElementById("popupDesc").innerText = desc;

    document.getElementById("productPopup").style.display = "flex";
}

document.getElementById("closePopup").addEventListener("click",()=>{

    document.getElementById("productPopup").style.display = "none";

});

const searchInput = document.getElementById("searchInput");
const productFilter = document.getElementById("productFilter");

function filterProducts(){

    const searchValue =
    searchInput.value.toLowerCase();

    const category =
    productFilter.value;

    document
    .querySelectorAll(".product")
    .forEach(product=>{

        const text =
        product.innerText.toLowerCase();

        const productCategory =
        product.dataset.category;

        const searchMatch =
        text.includes(searchValue);

        const categoryMatch =
        category === "all" ||
        productCategory === category;

        if(searchMatch && categoryMatch){
            product.style.display = "block";
        }else{
            product.style.display = "none";
        }

    });

}

searchInput.addEventListener(
    "keyup",
    filterProducts
);

productFilter.addEventListener(
    "change",
    filterProducts
);

function paymentSuccess(){

    document.getElementById(
    "successPopup"
    ).style.display = "flex";

}

function closeSuccess(){

    document.getElementById(
    "successPopup"
    ).style.display = "none";

}

function sendMessage(){
    alert("Message Sent Successfully!");
}

