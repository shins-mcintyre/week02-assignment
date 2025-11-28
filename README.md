# week02-assignment

Image gallery

Reflections
Required
🎯 What requirements did you achieve?

1. Implement responsive design methods to ensure the website works well on both small mobile screens and larger desktop screens (e.g., above 800px).
   I believe I achieved this ok with my CSS as I played around with moving the screen and the thumbnail placement /size stayed consistent. However I'm not 100% sure I covered every aspect of responsiveness? Was there anything I missed?

2. Implement at least one meaningful media query so that there is a noticeable change between mobile and desktop view (an example is to change where the ‘thumbnail bar’ is positioned).
   I applied a media query so that mobile devices (600px) would show the thumbnail bar at a vertical angle on the left, rather than horizontal at the bottom, so it would be in line with 'phone scrolling' and more visible

3. Ensure all images have appropriate alt text attributes for accessibility.
   Have applied alt-text to all

4. Correctly use event handlers to switch images based on user interactions.
   This seems to work well - I found it very difficult to get the logic but eventually with assistance from old demos and Manny, i worked it out (thank you!!)

🎯 Were there any requirements or goals that you were unable to achieve?
I tried some different ways of adding tabindex to the thumbnails to make it more accessible - this is in my js code (e.g. thumbnailImg.tabindex = "0";) but didn't seem to work...
I can see this is in the image elements in the example websites, but I didn't figure out how to get this into the DOM - any assistance with that would be much appreciated

🎯 If so, what was it that you found difficult about these tasks?
THE DOM!!! :( and functions - I know these are my weak spots

Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

Following Manny's advice, I tried to write each line of code step by step, using the code from demos and workshops this week to assist, which I found helpful, although as I went along I didn't have 100% confidence that what I was doing was correct
I encountered a few errors and tricky bits with this. For instance, how to extract the correct image from the array within the loop and also how to ensure that the click function worked. I tried to ask chatGPT but the answer was not helpful. Manny helped me to understand that the issue was the function was being called too soon, within the loop, rather than on click because of the syntax.

For styling and accessibility I based this initially on that of the example - I want to get the basics right, and only if I have time add my own flair

Ran a speed test on lowest image qualities - 2000ms. I didn't like the quality of the fullscreen images. Exchanged them for the original medium quality to see what effect that had: this had no effect on speed so kept the med quality images

On opening the page there was a blank screen - I wanted it to show the first image in the carousel. at first I set the background image of the site to be that - but that didn't work well as I couldn't give it the same properties as an image. I did ask chatGPT at that stage for advice on what to do, as I couldn't find resources online. The recommendation was to write in java script . From here i learned of the DOMContentLoaded - but I then applied similar code as I used in the previous functions to make this work and it will always apply to the first image in the array

One of the images used I realised after downloading is PNG - it looks nice but perhaps it's not the most appropriate file type?
