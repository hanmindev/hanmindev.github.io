*Demonstration and Explanation Video of the Minecraft Bitcoin Miner*

I've always heard jokes about mining Bitcoin in Minecraft. After all, what is Minecraft if not a game about mining? However, I had no idea how to actually hook up programs to the Bitcoin network, so I never thought about it.

...That was until I saw someone write a [Bitcoin miner for the Game Boy](https://www.youtube.com/watch?v=4ckjr9x214c). I saw that they used a fork of [ntgbtminer](https://github.com/vsergeev/ntgbtminer), a CPU Bitcoin Miner, which was perfect for my purposes.

With ntgbtminer connecting to the Bitcoin network and getting the information, I could work on creating the miner in Minecraft. The good thing is that to mine Bitcoin, you essentially just need a SHA256 function.

... which no one has ever written in Minecraft because, well, why would you? So I had to write one myself. This was a terrible experience, since it was impossible to debug (can you explain what bug is causing the output to be 106a5842fc5fce6f663176285ed1516dbb1e3d15c05abab12fdca46d60b539b7 instead of 1abe8f5aca6045c7844a07b0e09fb57039cb2c5923de729dfce9d07f28624971?)

It didn't help that I was writing it in Minecraft's .mcfunction format which does not have a debugger. I actually became so frustrated that I wrote the SHA256 function in C++ then used it to check that the Minecraft counterpart was correct. After a lot of trial and error, it was complete.

The rest was quite simple; have my fork of ntgbtminer running on Python fetch the Bitcoin network information, then send it to Minecraft. Minecraft would then run the SHA256 function, and if it was correct, it would send the information back to Python, which would then send it to ntgbtminer, which would then send it to the Bitcoin network. If it was incorrect, Minecraft would try a different nonce. This process would repeat until a block was found.

Coming at about 1.11 hashes per second, I was destined to get one bitcoin in a hundred million years. Considering that GPUs are super expensive and I already had a Minecraft account and a computer, I think it's a pretty good deal.

Of course, I didn't get any Bitcoin because I don't have a hundred million years, but it was a fun project. I'm sure it's possible to mine other, less popular coins, but it's definitely anything but worth it.

This project may have been a mistake however, because to this day, I get concerning messages from "cryptocurrency enthusiasts" who want me to set up a mining farm for them on a Minecraft server and split the profits.

![grindset](https://cdn.discordapp.com/attachments/1073687235586691132/1073779921580728390/image.png)