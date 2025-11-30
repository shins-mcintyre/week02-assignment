console.log("Hello");

// TODO: Create thumbnail images so the user can click on them and see them in a full screen format

// STEP 1: Store image data ===========================================

const imageData = [
  {
    imageName: "hill-image",
    imageSrc: "./images/hills2.jpg",
    imageAlt: "Photograph of rugged green mountains",
    tabindex: "0",
  },
  {
    imageName: "mushroom-image",
    imageSrc: "./images/shrooms2.jpg",
    imageAlt: "Photograph of mushrooms in forest",
    tabindex: "0",
  },
  {
    imageName: "kingfisher-image",
    imageSrc: "./images/kingfisher.png",
    imageAlt: "Photograph of a Kingfisher bird eating a fish",
    tabindex: "0",
  },
  {
    imageName: "exotic-birds-image",
    imageSrc: "./images/exotic.jpg",
    imageAlt: "Photograph of colourful birds on branch",
    tabindex: "0",
  },
  {
    imageName: "hummingbird-image",
    imageSrc: "./images/hummingbird.jpg",
    imageAlt: "Photograph of a hummingbird hovering next to a flower",
    tabindex: "0",
  },
  {
    imageName: "puffin-image",
    imageSrc: "./images/puffin.jpg",
    imageAlt: "Photograph of a Puffin bird on a cliff",
    tabindex: "0",
  },
];

// STEP 2: Create thumbnail images (and store in container)=============

function createThumbnails(test) {
  // select the dom element to contain the thumbnails
  const thumbnailContainer = document.getElementById("thumbnail-container");
  // this is a repetitive task --> use a for loop(for, forEach...)
  // Loop task:
  for (let i = 0; i < imageData.length; i++) {
    // - create img element
    const thumbnailImg = document.createElement("img");

    // update src and alt attributes(properties) of the img element to match those in the array (parameters)
    thumbnailImg.src = imageData[i].imageSrc;
    thumbnailImg.alt = imageData[i].imageAlt;
    thumbnailImg.tabindex = "0";

    // - give each img a className (img.className)
    thumbnailImg.className = "thumbnail-img";

    // -add an event listener to each image to make them clickable --> the event handler of this event is the function you write to create the full screen images (STEP 3)
    thumbnailImg.addEventListener("click", function () {
      createFullscreenImages(i);
    });
    // - append created images to the thumbnail-container
    thumbnailContainer.appendChild(thumbnailImg);
  }
}

// STEP 3: Create fullscreen images =====================================

function createFullscreenImages(i) {
  // this is the event handler
  // select the fullscreen container
  const fullScreenContainer = document.getElementById("fullscreen-container");

  // delete the current fullscreen image --> fullScreenContainer.innerHTML = null
  fullScreenContainer.innerHTML = null;

  // create image
  const fullScreenImg = document.createElement("img");
  // update it's values  (properties) - from the same array
  // use parameters to set out which image it should relate to
  fullScreenImg.src = imageData[i].imageSrc;
  fullScreenImg.alt = imageData[i].imageAlt;
  // add className for styling (making the image full screen)
  fullScreenImg.className = "fullscreen-img";
  // append image to the container
  fullScreenContainer.appendChild(fullScreenImg);
  currentImage = i;
}

// make the first thumbnail the image that loads initially
document.addEventListener("DOMContentLoaded", function () {
  // selecting full screen container so image uses same styles as full size images
  const fullScreenContainer = document.getElementById("fullscreen-container");
  // create an image element for the opening screen image
  const openScreenImg = document.createElement("img");
  // make the source of the open screen image the first thumbnail [0]
  openScreenImg.src = imageData[0].imageSrc;
  openScreenImg.alt = imageData[0].imageAlt;
  openScreenImg.className = "fullscreen-img";
  // tested - this works
  console.log(openScreenImg.src);
  fullScreenContainer.appendChild(openScreenImg);
});

// invoke / call the createThumbnails function
createThumbnails();

// Add buttons:

let currentImage = 0;

const nextButton = document.getElementById("next");

const prevButton = document.getElementById("prev");

nextButton.addEventListener("click", function () {
  currentImage = (currentImage + 1) % imageData.length;
  createFullscreenImages(currentImage);
});

prevButton.addEventListener("click", function () {
  currentImage = (currentImage - 1 + imageData.length) % imageData.length;
  createFullscreenImages(currentImage);
});

document.addEventListener("DOMContentLoaded", function () {
  createFullscreenImages(0); // show the first image on load
});

// add keyboard navigation
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    currentImage = (currentImage + 1) % imageData.length;
    createFullscreenImages(currentImage);
  }
  if (event.key === "ArrowLeft") {
    currentImage = (currentImage - 1 + imageData.length) % imageData.length;
    createFullscreenImages(currentImage);
  }
});
