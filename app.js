console.log("Hello");

// TODO: Create thumbnail images so the user can click on them and see them in a full screen format

// STEP 1: Store image data ===========================================

const imageData = [
  {
    imageName: "hill-image",
    imageSrc: "./images/hills.jpg",
    imageAlt: "Photograph of rugged green mountains",
  },
  {
    imageName: "mushroom-image",
    imageSrc: "./images/shrooms.jpg",
    imageAlt: "Photograph of mushrooms in forest",
  },
  {
    imageName: "bird-image",
    imageSrc: "./images/birds.jpg",
    imageAlt: "Photograph of colourful birds on branch",
  },
];

console.log(imageData.imageSrc);
// STEP 2: Create thumbnail images (and store in container)=============

function createThumbnails() {
  // select the dom element to contain the thumbnails
  const thumbnailContainer = document.getElementById("thumbnail-container");
  // this is a repetitive task --> use a for loop(for, forEach...)
  // Loop task:
  for (let i = 0; i < imageData.length; i++) {
    // imageData.forEach(function () {
    // - create img element
    const thumbnailImg = document.createElement("img");

    // update src and alt attributes(properties) of the img element to match those in the array (parameters)
    // Q - is this how you attribute from the array?? Check the array workshop
    thumbnailImg.src = imageData[i].imageSrc;
    thumbnailImg.alt = imageData[i].imageAlt;

    // - give each img a className (img.className)
    thumbnailImg.className = "thumbnail-img";

    // -add an event listener to each image to make them clickable --> the event handler of this event is the function you write to create the full screen images (STEP 3)
    // const clickBtn = document.createElement("click-btn");
    thumbnailImg.addEventListener("click", createFullscreenImages);
    // - append created images to the thumbnail-container
    thumbnailContainer.appendChild(thumbnailImg);
    console.log(thumbnailImg);
  }
}

// STEP 3: Create fullscreen images =====================================

function createFullscreenImages() {
  // this is the event handler
  // select the fullscreen container
  const fullScreenContainer = document.getElementById("fullscreen-container");
  // delete the current fullscreen image --> fullScreenContainer.innerHTML = null
  fullScreenContainer.innerHTML = null;

  for (let i = 0; i < imageData.length; i++) {
    // create image
    const fullScreenImg = document.createElement("img");
    // update it's values  (properties) - from the same array
    fullScreenImg.src = imageData[i].imageSrc;
    fullScreenImg.alt = imageData[i].imageAlt;
    // add className for styling (making the image full screen)
    fullScreenImg.className = "fullscreen-img";
    // append image to the container
    fullScreenContainer.appendChild(fullScreenImg);
  }
}
// add the createFullScreenImages function as the event handler of the event above
// invoke / call the createThumbnails function

createThumbnails();
