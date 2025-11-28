# week02-assignment

Image gallery

Reflections
Required
🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?

Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

\*Notes
Following Manny's advice, I tried to write each line of code step by step, using the code from demos and workshops this week to assist, which I found helpful, although as I went along I didn't have 100% confidence that what I was doing was correct
I encountered a few errors and tricky bits with this. For instance, how to extract the correct image from the array within the loop and also how to ensure that the click function worked. I tried to ask chatGPT but the answer was not helpful. Manny helped me to understand that the issue was the function was being called too soon, within the loop, rather than on click because of the syntax.

For styling and accessibility I based this initially on that of the example - I want to get the basics right, and only if I have time add my own flair

Ran a speed test on lowest image qualities - 2000ms. I didn't like the quality of the fullscreen images. Exchanged them for the original medium quality to see what effect that had:

I tried some different ways of adding tabindex to the thumbnails to make it more accessible - this is in my js code (e.g. thumbnailImg.tabindex = "0";) but didn't seem to work...
