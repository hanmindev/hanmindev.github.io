*Motion Capture Data created from ThreeDPoseTracker, converted and imported into Minecraft using MCMV*

Do you love quaternions? I̶̢̖̾͆ ̷̱̫͛ḽ̸̡̕ove̸ ̴̣̔̎q̷u̷̎͝at̴ë̸́r̴̦͒n̸i̸̫͋̾o̴͊ņ̵̓͝s.̴̱̭̈́͗ Ẁ̷h̷̢̞̠̪͕͚͆̉y̶̲̝͎̜̙͑ ̵͙̗̱̫̣͔̳̜͗́̕d̷̑̓͆̕o̵͊̈́̌͝n̵̟̠̥̼͒̄̈́̈́̅'̵̭͎̫͓̟̬̾ţ̸͈̰̞̓̉̑̈́̔̒ ̴̧͇͈̮̙̯̯̦̬́̑͘̚y̷͊͋̉̈̚͠o̴̧̅̆̕͝u̸͎̳͑́͒͊̔̋̈͝͠ ̶̼̔̍l̶͈̙̝̯͔̾o̶̰̺͎̾v̸̗̗̪̦͙̀̉͛͂e̵̎̏̅̔͆̐̏̏̓ͅ ̶̫̓ͅq̸̮̜̅̋̈́̉̄ų̵̤͌͊́̏͗̃͋ȁ̸̡̡̞̲͔̻̖̥͑̅̇̄͛̋̅̏t̸̺̪̀̎̉̓͊̅e̸̩̎͒̊̈̕ŗ̴͖͈́͊̀͒̏̀́͝n̸̝̯̪̈́̔į̸͓͉̉͊̐̊̌͒́̕̕o̶̠̙͓̼̽͌n̵̢͔͍͒̚͠s̸̛̰̪͙͓̞̰͙̪̤͑̚?̵̣̳̣͓͙̱̤̃͛̏̎̚͝͝

This might be the most difficult project I've ever worked on. At least I finally learnt what a [quaternion](https://en.wikipedia.org/wiki/Quaternion) is (no I haven't)

![quaternion](https://cdn.discordapp.com/attachments/1073687235586691132/1073771488445997186/FLHab8ZVEAUsPDS.png)

The story begins in July 2021. High school graduation has set me free from the grasps of the IB program and I have time to work on the really important things, like making anime characters dance in Minecraft.

There was a rhythm game I used to play, and in the background there would be animations where the game characters dance to the song. Seeing as how the community made a tool for ripping the motion data off the game, I decided to try to import that into Minecraft.

This was the summer right after high school so my linear algebra knowledge was limited to a combination of the simple vector math we did at school, and [3Blue1Brown's linear algebra series](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab).

So upon finding out that the community made tool outputted the motion data into MikuMikuDance (blender for weebs), which used Quaternions for rotation, I almost died.

Have I heard about quaternions? Yes, it was that scary thing that kept showing up in computer graphics videos that I did not understand. Now I had to understand it.

Well, it was difficult, I spent a lot of time trying to do something incorrectly due to my misconceptions, but in the end I got it.

<video>gfycat;ColossalHiddenAnura</video>
*Armature Skeletons performing a dance in Minecraft*

Unfortunately that was the best I could do at the moment. These were based on simple vector rotation, and there were no rotations on the vector axis, and I couldn't give them custom models. A large rewrite was required.

Then I stopped playing that rhythm game and moved onto another one. This one didn't have a community ripping tool, so I had to figure out how to rip it myself. Once I did, I was able to import them into blender, so I can export it into a nicer format.

I was looking for an easy format to read, preferably without all the useless mesh information and came across the [Biovision Hierarchial Data (BVH)](https://research.cs.wisc.edu/graphics/Courses/cs-838-1999/Jeff/BVH.html) format. This format was easily readable, and looked simple enough, so I went with it.

So I started a new project with the appropriate name ".bvh to .mcf".

This was much more complicated, especially since I wanted to make it work for any arbitrary armature, and because it wasn't going to be just based on vector positions.

![attaching it wrong](https://cdn.discordapp.com/attachments/1073687235586691132/1073765460924977212/image.png)

It didn't help that the rotation order in Minecraft was not well documented, there were no sources online explaining how to convert quaternions into Euler angles of any xyz order, and the fact that my knowledge was very limited.

<video>gfycat;FoolhardyHugeIrishwaterspaniel</video>
*Trying to figure out rotation order of a Minecraft armor stand*

Turns out that a few things are backwards for some absurd reason. Regardless I figured it out somehow.

![why](https://cdn.discordapp.com/attachments/1073687235586691132/1073768061104042045/image.png)

![huh](https://cdn.discordapp.com/attachments/1073687235586691132/1073768426385965126/image.png)

With that out of the way, I could finally import the motion data of my favorite fictional band into Minecraft.

<video>gfycat;CriminalKaleidoscopicAcaciarat</video>
*Leo/need performing Roki in Minecraft*

You'd think that was the end of it, but I ended up doing three complete rewrites of the program. The first one was a complete mess, the second one was a bit better, but no matter what I tried, there was always something wrong with it. At some point in time I renamed the project to MCMV from a suggestino from a friend.

![sad](https://cdn.discordapp.com/attachments/1073687235586691132/1073769372079882280/image.png)

It doesn't help that I still don't know what the hack a quaternion is

3D rotation is confusing. I'm glad that I'm using quaternions instead of Euler angles, but I still don't know what the heck is going on.

What's next? The project has been on halt for nearly a year now because I was busy with school and I wanted to get onto other projects. I'm hoping I can do one last rewrite (maybe in rust...) and then I can finally call it done.

I'm also planning on making a video explaining how the program works, but I'm not sure when that will be. I've been putting that off for like a year and a half now.

I'm sure no one is using this program, so surely I can wait a bit longer.

![someone asking](https://cdn.discordapp.com/attachments/1073687235586691132/1073770839339712624/image.png)

Ah shoot