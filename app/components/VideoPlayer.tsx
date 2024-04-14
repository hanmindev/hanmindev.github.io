"use client"

import React, {useRef} from "react";
import useOnScreen from "../helpers/hooks";

function VideoPlayer({ raw, type, video_link, play, autoplay }: { raw?: boolean; type: string; video_link: string; play?: boolean; autoplay?: boolean }) {
  const video = useRef<HTMLVideoElement>(null);

  const isVisible = useOnScreen(video)

  if (video.current){
    if ((play || autoplay) && isVisible) {
      video.current.play();
    }else{
      video.current.pause();
    }
  }

  let inner;

  if (type === "iframe") {
    if (raw){
      video_link = `https://www.youtube.com/embed/${video_link}`
    }

    inner = <iframe title="Featured Video" width="100%" height="100%" src={video_link}/>

  } else if (type === "gfycat") {
    if (raw){
      video_link = `https://thumbs.gfycat.com/${video_link}-mobile.mp4`
    }
    inner = <video ref={video} autoPlay={autoplay} loop muted width="100%" height="100%" style={{margin: 0}}>
        <source src={video_link} type="video/mp4" />
      </video>

  } else if (type === "image") {
    inner = <img width="100%" height="100%" src={video_link} alt={video_link}/>
  } else {
    return <p>VideoPlayer Error</p>
  }

  return (
    <div className="rounded-md mb-3 overflow-clip">
      {inner}
    </div>
  )
}

export default VideoPlayer;