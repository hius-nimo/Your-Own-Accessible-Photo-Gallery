function upDate(previewPic) {
  console.log("Mouse over or focus triggered for: " + previewPic.alt);

  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  console.log("Mouse leave or blur triggered");

  let imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabAttributes() {
  console.log("Page loaded successfully. Adding tabindex attributes.");

  let images = document.querySelectorAll(".gallery img");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("Added tabindex to image index: " + i);
  }
}
