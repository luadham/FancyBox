const container = document.getElementById("container");
const overlay = document.getElementById("overlay");
const fakeBox = document.getElementById("fake-box");
const closeBtn = document.getElementById("close-btn");

// On Click on any IMG
document.addEventListener('click', (e) => {
    let element = e.target;
    if (element.tagName == "IMG") {
        zooming(element);
    } else if (element.id == "overlay" || element.id == "close-btn") {
        removeZooming();
    }
})

// Remove Zooming
function removeZooming() {
    fakeBox.removeChild(fakeBox.lastChild);
    fakeBox.classList.add("hidden");
    overlay.classList.remove("overlay");
}

// Zoom on any image
function zooming(element) {
    fakeBox.appendChild(elementFactory(element));
    fakeBox.classList.remove("hidden");
    fakeBox.classList.add("zoom");
    overlay.classList.add("overlay");
}


function addImg(element) {
    let img = document.createElement("img");
    img.src = element.src;
    return img;
}

function createForm() {
    let form = document.createElement("form");
    form.classList.add("form");
    let userName = document.createElement("input");
    userName.type = "text";
    userName.placeholder = "Username";
    let pwd = document.createElement("input");
    pwd.type = "password";
    pwd.placeholder = "Password";
    let signin = document.createElement("button");
    signin.innerText = "Sign in";
    let forgetPwd = document.createElement("a");
    forgetPwd.innerText = "Forget Password";

    form.appendChild(userName);
    form.appendChild(pwd);
    form.appendChild(signin);
    form.appendChild(forgetPwd);
    return form;
}


function addVideo() {
    let frame = document.createElement("iframe");
    frame.classList.add("video");
    frame.src = "https://www.youtube.com/embed/0ZGbIKd0XrM";
    return frame;
}

function elementFactory(element) {
    switch(element.id) {
        case "image":
            return addImg(element);
        case "form":
            return createForm();
        case "video":
            return addVideo();
    }
}