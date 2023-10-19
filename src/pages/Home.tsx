import React from "react";

import {Typography} from "@mui/material";

import VideoPlayer from "../components/VideoPlayer";
import {ExternalLink} from "../components/Links";

import "./Home.css";
import ScrollPage from "../components/ScrollPage";
import {Link} from "react-router-dom";

function Main() {
    return (
        <div className="narrow-viewer">
            <div className="center-text-box">
                <Typography variant="h2" component="h1" align="center">
                    Hey, I'm Hanmin Kim
                </Typography>
            </div>
            <div className="left-text-box">
                <Typography variant="body1" paragraph={true}>
                    Hey, my name is Hanmin! I enjoy making things that people can use to make their lives easier.
                    I enjoy learning new things and I'm always looking to incorporate new technologies into my projects.
                </Typography>
                <Typography variant="body1">
                    I've worked with Mojang/Microsoft on a few projects regarding Minecraft
                    through <ExternalLink
                    href="https://www.minecraft.net/en-us/realms/content-creator/"
                    text="Minecraft Realms" blue /> and the <ExternalLink
                    href="https://www.minecraft.net/en-us/realms/content-creator/"
                    text="Microsoft Partner Program" blue />. I am currently studying Computer Science at the <ExternalLink
                    href="https://www.utoronto.ca/"
                    text="University of Toronto" blue />.
                </Typography>


            </div>
        </div>
    )
}

function BoxContent(props: { type: string; videoLink: string; title: any; subtitle: any; description: any }) {

    return (
        <div className="featured-content-box">
            <div className="wide-viewer">
                <Typography variant="h4" component="h3" align="center">
                    {props.title}
                </Typography>
                <Typography variant="h6" paragraph={true}>
                    {props.subtitle}
                </Typography>
                <VideoPlayer type={props.type} videoLink={props.videoLink} autoplay={true}/>
                <Typography variant="body1" paragraph={true}>
                    {props.description}
                </Typography>
            </div>
        </div>
    )
}

function Featured() {
    return (
        <div className="wide-viewer">
            <div className="center-text-box">
                <Typography variant="h3" component="h1" align="center">
                    Featured
                </Typography>
            </div>
            <BoxContent type="gfycat" videoLink="https://i.imgur.com/gWPX6uJ.mp4"
            title={<ExternalLink href="https://www.pcgamer.com/this-minecraft-3d-graphing-calculator-is-hypnotic-and-beautiful/"
                                 text="This Minecraft 3D graphing calculator is hypnotic and beautiful" underline/>}
            subtitle="PC Gamer Article by Rich Stanton"
                        description={<>Thank you <ExternalLink
                            href="https://www.pcgamer.com/author/rich-stanton/"
                            text="Rich Stanton" blue/> for writing this article! I'm glad you enjoyed the calculator.</>}
            />
            <Typography variant="body1" paragraph={true}>
                This project has been incredible; I built the initial prototype several years ago after having some unanswered questions in my 11th grade math class. Since then, it has been featured on <ExternalLink
                href="https://www.pcgamer.com/this-minecraft-3d-graphing-calculator-is-hypnotic-and-beautiful/" text="PC Gamer" blue/>, <ExternalLink
                href="https://www.gry-online.pl/newsroom/niezwykly-popis-kreatywnosci-w-minecraft-kalkulator-graficzny/z01d82a" text="Gry-Online" blue/>, <ExternalLink
                href="https://www.gamepressure.com/newsroom/a-remarkable-display-of-creativity-in-minecraft-graphic-calculato/z2193e" text="gamepressure" blue/>, <ExternalLink
                href="https://www.destructoid.com/minecraft-real-time-3d-graphing-calculator/" text="Destructoid" blue/>, <ExternalLink
                href="https://www.gamespark.jp/article/2022/03/09/116686.html" text="GameSpark" blue/>, and more. Since launch in March 2020, the calculator has been viewed 9.6 million times, and downloaded over 7.6 thousand times.
            </Typography>
            <Typography variant="body1" paragraph={true}>
                The project was featured on 6/18/2020 on <ExternalLink href="https://www.minecraft.net/en-us/article/new-java-realms--realms-midsummer-celebration-"
                                                                     text="minecraft.net" blue/> and subsequently been available on the Minecraft Realms subscription service.
            </Typography>
            <Typography variant="body1" paragraph={true}>
                Through several iterations of the calculator, I've learnt a lot about data structures and algorithms, in addition to several numerical methods.
                I learnt a lot about floating point arithmetic while implementing it in .mcfunction, and I've learnt a lot about several obscure computational algorithms.
            </Typography>
        </div>
    )
}

function Projects() {
    return (
        <div className="wide-viewer">
            <div className="center-text-box">
                <Link to="/projects">
                    <Typography variant="h3" component="h1" align="center">
                        Projects
                    </Typography>
                </Link>
            </div>
            <div className="left-text-box">
                <Typography variant="body1" paragraph={true}>
                    I've worked on a number of projects over the years, some of which are listed below. See the full list on the <Link to="/projects">Projects</Link> tab.
                </Typography>
            </div>


            <BoxContent type="iframe" videoLink="https://www.youtube.com/embed/9e8J4VNFXOM"
                        title={<ExternalLink href="https://devpost.com/software/lucid-ai-95nerk" text="Lucid - Text to movie, directed by AI." underline/>}
                        subtitle={<Typography variant="h6" align="center">Hack the North 2022 Winner</Typography>}
                        description={<>Special thanks to my team members Victor, Rick, and Lincoln for helping us win <ExternalLink href={"https://hackthenorth.com/"} text={"Hack the North"} blue/> 2022!</>}
            />
            <Typography variant="body1" paragraph={true}>
                Using GPT-3 for text processing, and Stable Diffusion for video generation, we created a tool that can generate a movie based on a description, complete with music and AI narration.
            </Typography>


            <BoxContent type="iframe" videoLink="https://www.youtube.com/embed/j1iAbKbSlD8"
                        title={<ExternalLink href="https://devpost.com/software/pitch-ai" text="Pitch.ai - Never make slides again" underline/>}
                        subtitle={<Typography variant="h6" align="center">First Place at nwHacks 2022</Typography>}
                        description={<>Special thanks to my team members Victor, Rick, and Lincoln for helping us win <ExternalLink href={"https://www.nwhacks.io/"} text={"nwHacks"} blue/> 2022!</>}
            />
            <Typography variant="body1" paragraph={true}>
                Using the Monkeylearn API to find key-words and SerpAPI to find images, and concurrently using OpenAI's GPT-3 to generate a caption, we created a tool that can generate a presentation from speech, in real-time.
            </Typography>


            <BoxContent type="iframe" videoLink="https://www.youtube.com/embed/r-5LTZLSj7Y"
                        title={<ExternalLink href="https://devpost.com/software/habifix" text="HabiFix - An AI powered Habit Eliminator" underline/>}
                        subtitle={<Typography variant="h6" align="center">Third Place at Hack the 6ix 2021</Typography>}
                        description={<>Special thanks to my team members Boya, Eric, and Ryan for helping us win <ExternalLink href={"https://hackthe6ix.com/"} text={"Hack the 6ix"} blue/> 2021!</>}
            />
            <Typography variant="body1" paragraph={true}>
                Using OpenCV to get webcam data frame-by-frame and feeding images to TensorFlow for object detection, we created a tool that can detect and eliminate bad habits.
            </Typography>



        </div>
    );
}
function Home() {
    return (
        <ScrollPage>
            <Main />
            <Featured />
            <Projects />
        </ScrollPage>
  );
}

export default Home;