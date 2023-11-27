*Update video showcasing version 3 of the 3D Graphing Calculator*

I was in my high school math class when there was an equation with three variables. I wanted to graph it, but noticed that many calculators online were either slow, due to their high precision, or had an interface that was... very difficult to use. So I decided to make my own.

I didn't care much about the precision of the calculator, since I mainly wanted to see the general shape of the graph. I thought about how I could make a friendly interface, and realized that video games have a very intuitive interface. So I decided to make the calculator inside Minecraft.

Making the 3D Graphing calculator came with a number of benefits:

* Controls were very intuitive, since the game had over a decade's worth of UX refinement
* The rendering engine was very fast, since it was designed to render 3D worlds, especially if the precision was low
* Since it was in a popular game Minecraft, it would help me reach a wider audience, including those who aren't interested in mathematics.

So, I went and made it. The first prototype took one all-nighter, and was quite slow because of my limited data structure and algorithm knowledge. But I was able to graph a few simple functions, and I was very happy with the result.

I posted the first version of the calculator to reddit, and it got a lot of attention. It hit the front page of reddit, and became one of the highest rated posts on [/r/Minecraft](https://www.reddit.com/r/Minecraft/comments/fgzvi9/i_made_a_realtime_3d_graphing_calculator_in/) with 98 thousand upvotes and 2.8 million views.

I also made a [video](https://youtu.be/qeyp5FN_WKk) showcasing the calculator, which has over 1.5 million views.

Then, a Chinese content creator 籽岷 (Zhu Mingua(?)) contacted me and inquired whether he could make a video for his bilibili channel. I didn't know at the time, but apparently he's one of the most well known Minecraft content creators in China. He made a great [video](https://www.bilibili.com/video/av96872092/), (well, I didn't understand a single word of it but his viewers seemed to love it) but I felt that the calculator could benefit from a better user interface.

> This map was made by a really incredible foreign mapper, he's only 16 and that's super amazing." *- 朱明华(Zhu Minghua?) "籽岷", Content Creator*

original: (那么这张地图是一个非常厉害的国外大大所制作的。他才十六岁啊，非常强。)

Then, Minecraft legend [CaptainSparklez](https://www.youtube.com/user/CaptainSparklez) saw the creation on reddit, and mentioned that he will make a video on it.

> Excuse me, what? *- Jordan Maron "CaptainSparklez", YouTube Creator*

This was a big opportunity and I wanted to make the best version of the calculator possible, so I raced to make version two of the calculator. I worked for a couple of days, and thankfully he made a [video](https://www.youtube.com/watch?v=8HdL653UGDY) on the new version.

Then I wondered whether something like this which could be used as an educational tool would be interesting to have on Minecraft's Realms subscription service. So I talked for a bit then I got the green light to make a version for Realms, which has been featured on [minecraft.net](https://www.minecraft.net/en-us/article/new-java-realms--realms-midsummer-celebration-) and subsequently been available on the Minecraft Realms subscription service.

Then I didn't touch it for a while.

One day, after thinking about the magical [fast inverse square root](https://en.wikipedia.org/wiki/Fast_inverse_square_root) algorithm, I wondered whether I could make the calculator even faster. So I got to work building the third iteration of the calculator.

Versions 1 and 2 of the calculator ran on a fixed-decimal system, because the only numbers Minecraft has are 32-bit signed integers. However, the fast inverse square root algorithm requires the use of floating point numbers. Thus, I created [Hmmm](https://github.com/hanmangokiwi/Hmmm), a software implementation of floating point arithmetic for Minecraft, which was a lot of work

I had done a few [tests](https://www.youtube.com/watch?v=sD1Kq7GAUuw) in the past to make the equation parsing faster using the shunting-yard algorithm. With that, research into Minecraft's command implementations, and a better grasp on memory models and data structures, I was able to make a version that was up to 400x faster than the previous version.

I published the new version, and naturally I posted the creation to the /r/Minecraft subreddit. However, the moderators removed the post for "self advertising" (which they do often, it's a known issue in the community), and a friend suggested that I post it on /r/gaming instead.

I did, and it got a lot of attention, even higher than my original post. The [post](https://www.reddit.com/r/gaming/comments/t8nzay/i_made_a_realtime_3d_graphing_calculator_in/) got 103 thousand upvotes with 5 million views, and [Rich Stanon](https://www.pcgamer.com/author/rich-stanton/) wrote an [article](https://www.pcgamer.com/this-minecraft-3d-graphing-calculator-is-hypnotic-and-beautiful/) about it. Thanks for reaching out Rich, that was a really nice article.

The calculator has also been featured on several other websites, such as [Gry-Online](https://www.gry-online.pl/newsroom/niezwykly-popis-kreatywnosci-w-minecraft-kalkulator-graficzny/z01d82a), [gamepressure](https://www.gamepressure.com/newsroom/a-remarkable-display-of-creativity-in-minecraft-graphic-calculato/z2193e), [Destructoid](https://www.destructoid.com/minecraft-real-time-3d-graphing-calculator/), [GameSpark](https://www.gamespark.jp/article/2022/03/09/116686.html), and more.

Although popularity is nice, I think the best part about this project was the fact that I was able to interest people into mathematics, even if they weren't interested in it before. I read thousands of comments from people, and a recurring comment I kept seeing were from people who mentioned that despite having no interest in math, they were interested in the calculator and were compelled to try it out and learn more about the different functions available. I think that's really cool, and demonstrates the power of video games as an educational medium.

In the back of my head I'm planning a fourth iteration of the calculator, which I hope will be even faster, more accurate, and more user-friendly. I purposely took a numerical methods course at my university to find out how to make the calculator even faster and more accurate.

In the future I'm also hoping to make a version for the Bedrock Edition of Minecraft, and possibly pitch it to Microsoft for the Minecraft Education Edition. I think it would be a great educational tool for students, and I think it would be a great way to get more people interested in mathematics, although the Bedrock Edition has some limitations so I'm waiting for that to be resolved.