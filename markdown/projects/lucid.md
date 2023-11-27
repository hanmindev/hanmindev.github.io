*Part of the Demonstration Video shown at Hack the North 2022 Closing Ceremony*

Stories become so much more vivid with visuals. Have an interesting story to share? Why not share it with a video? If you can read it, Lucid can dream it.

Using Stable Diffusion, we created a video generator that can take in a story and generate a video based on it. 

Once you hit generate on the home UI, our frontend sends your text and video preferences to the backend, which uses our custom algorithm to cut up the text into key scenes. The backend then uses multithreading to make three simultaneous API calls. First, a call to GPT-3 to condense the chunks into image prompts to be fed into a Stable Diffusion/Deforum AI image generation model. Second, a sentiment keyword analysis using GPT-3, which is then fed to the YouTube API for a fitting background song. Finally, a call to TortoiseTTS generates a convincing narration of your text. Collected back at the front-end, you end up with a movie, all from a simple text.

