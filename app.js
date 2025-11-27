// TODO: Create thumbnail images so the user can click on them and see them in a full screen format

// STEP 1: Store image data ===========================================

const imageData = [
  {
    imageName: "img1",
    imageSrc: "path",
    imageAlt: "text",
  },
  {
    imageName: "img2",
    imageSrc: "value",
    imageAlt: "value",
  },
  {
    imageName: "img3",
    imageSrc: "value",
    imageAlt: "value",
  },
];

// STEP 2: Create thumbnail images (and store in container)=============

function createThumbnails() {
  // select the dom element to contain the thumbnails
  // this is a repetitive task --> use a for loop(for, forEach...)
  // Loop task:
  // - create img element
  // update src and alt attributes(properties) of the img element to match those in the array (parameters)
  // - give each img a className (img.className)
  // -add an event listener to each image to make them clickable --> the event handler of this event is the function you write to create the full screen images (STEP 3)
  // - append created images to the thumbnail-container
}

// STEP 3: Create fullscreen images =====================================

function createFullscreenImages() {
  // this is the event handler
  // select the fullscreen container
  // delete the current fullscreen image --> fullScreenContainer.innerHTML = null
  // create image
  // update it's values  (properties) - from the same array
  // add className for styling (making the image full screen)
  // append image to the container
}

// add the createFullScreenImages function as the event handler of the event above
// invoke / call the createThumbnails function
