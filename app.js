console.log("Hello");

// TODO: Create thumbnail images so the user can click on them and see them in a full screen format

// STEP 1: Store image data ===========================================

const imageData = [
  {
    imageName: "hill-image",
    imageSrc: "./images/hill.jpg",
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

// STEP 2: Create thumbnail images (and store in container)=============

function createThumbnails() {
  // select the dom element to contain the thumbnails
  document.getElementById("thumbnail-container");
  // this is a repetitive task --> use a for loop(for, forEach...)
  // Loop task:
  for (let i = 0; i < imageData.length; i++) {
    // - create img element
    const thumbnailImg = document.createElement("thumbnail-img");

    // update src and alt attributes(properties) of the img element to match those in the array (parameters)
    thumbnailImg.src = imageData.imageSrc;
    thumbnailImg.alt = imageData.imageAlt;

    // - give each img a className (img.className)
    thumbnailImg.className = imageData.imageName;

    // -add an event listener to each image to make them clickable --> the event handler of this event is the function you write to create the full screen images (STEP 3)
    const clickBtn = document.createElement(".click-btn");
    clickBtn.addEventListener("click", function () {
      // insert function from STEP 3 here
    });
    document.body.appendChild(imageTitle);
    // - append created images to the thumbnail-container
  }
}

// STEP 3: Create fullscreen images =====================================

function createFullscreenImages() {
  // this is the event handler
  // select the fullscreen container
  document.getElementById("thumbnail-container");
  // delete the current fullscreen image --> fullScreenContainer.innerHTML = null
  // create image
  // update it's values  (properties) - from the same array
  // add className for styling (making the image full screen)
  // append image to the container

  // add the createFullScreenImages function as the event handler of the event above
  // invoke / call the createThumbnails function
}
