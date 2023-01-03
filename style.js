LinkImages = [
    "./img-layout-2/slider_1.png",
    "./img-layout-2/slider_2.jpg",
    "./img-layout-2/slider_3.jpg",
];

const lstImg = document.querySelector(".header_slide-bg");
lstImg.style.width = LinkImages.length * 100 + "%";
var doc = "";
for (var i = 0; i < LinkImages.length; i++) {
    doc =
        doc +
        `
      <div class="header_slide-bg-img">
          <img class="" src="${LinkImages[i]}">
      </div>
      `;
}
lstImg.innerHTML = doc;

const listNut = document.querySelector(".ListNut");
var dsa = "";
var k = "";
for (var i = 0; i < LinkImages.length; i++) {
    k = i == 0 ? "active" : "";
    dsa =
        dsa +
        `
      <li value="${i + 1}" class="ItemNut ${k}">
          <a class="ItemNut-link"></a>
      </li>
      `;
}
listNut.innerHTML = dsa;

const bg = document.querySelector(".header_slide-bg");
const dsNut = document.querySelectorAll(".ItemNut");

function SwapImages(a) {
    bg.style = `width:${LinkImages.length * 100}%;margin-left: -${
      (a - 1) * 100
    }%`;
}

var index = 1;
setInterval(function() {
    SwapImages(index);
    NutActive = document.querySelector(".active");
    NutActive.classList.remove("active");
    dsNut[index - 1].classList.add("active");
    index++;
    if (index == LinkImages.length + 1) index = 1;
}, 10000);

var a = function() {
    index = this.value;
    SwapImages(index);
    var NutActive = document.querySelector(".active");
    NutActive.classList.remove("active");
    dsNut[index - 1].classList.add("active");
};

for (var i = 0; i < dsNut.length; i++) {
    dsNut[i].onclick = a;
}

const btnLeft = document.querySelector(".fa-chevron-left");
btnLeft.addEventListener("click", function() {
    index--;
    if (index == 0) index = LinkImages.length;
    console.log(index);
    SwapImages(index);
    NutActive = document.querySelector(".active");
    NutActive.classList.remove("active");
    dsNut[index - 1].classList.add("active");
});

const btnRight = document.querySelector(".fa-chevron-right");
btnRight.addEventListener("click", function() {
    index++;
    if (index == LinkImages.length + 1) index = 1;
    console.log(index);
    SwapImages(index);
    NutActive = document.querySelector(".active");
    NutActive.classList.remove("active");
    dsNut[index - 1].classList.add("active");
});


var header = document.getElementById('header');
var menuIcon = document.getElementById('btn-mobile-menu');
var menuHeight = header.clientHeight;
menuIcon.onclick = function() {
    var isClosed = header.clientHeight === menuHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}
var menuItems = document.querySelectorAll('#nav li a');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i]
    menuItem.onclick = function() {
        header.style.height = null;
    }
}