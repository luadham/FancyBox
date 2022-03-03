let images = ['/img/1.jpg', '/img/2.jpg', '/img/3.jpg', '/img/4.jpg', '/img/5.jpg', '/img/6.jpg', '/img/7.jpg', '/img/8.jpg'];
let container = document.getElementById("container");
let overlay = document.getElementById("overlay");
let fakeImg = document.getElementById("fake-img");

// set All images to screen 
for (let i = 0; i < 8; i++) {
    let img = document.createElement("img");
    img.src = images[i];
    container.appendChild(img);
}


// On Click on any IMG
document.addEventListener('click', (e) => {
    let element = e.target;
    if (element.tagName == "IMG") {
        zooming(element);
    } else {
        removeZooming();
    }
})

// Remove Zooming
function removeZooming() {
    fakeImg.classList.remove("zoom");
    fakeImg.classList.add("hidden");
    overlay.classList.remove("overlay");
}

// Zoom on any image
function zooming(element) {
    fakeImg.src = element.src;
    fakeImg.classList.remove("hidden");
    fakeImg.classList.add("zoom");
    overlay.classList.add("overlay");
}