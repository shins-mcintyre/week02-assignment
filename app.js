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
    imageName: "bird-image",
    imageSrc: "./images/birds2.png",
    imageAlt: "Photograph of colourful birds on branch",
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
