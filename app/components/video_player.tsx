"use client";

import React, { useRef } from "react";
import useOnScreen from "../helpers/hooks";
import Image from "next/image";

export default function VideoPlayer({ raw, type, video_link, play, autoplay }: {
  raw?: boolean;
  type: string;
  video_link: string;
  play?: boolean;
  autoplay?: boolean
}) {
  const video = useRef<HTMLVideoElement>(null);

  const isVisible = useOnScreen(video);

  if (video.current) {
    if ((play || autoplay) && isVisible) {
      video.current.play();
    } else {
      video.current.pause();
    }
  }

  let inner;

  if (type === "iframe") {
    if (raw) {
      video_link = `https://www.youtube.com/embed/${video_link}`;
    }

    inner = <iframe title="Featured Video" className="w-full h-full" src={video_link} />;

  } else if (type === "gfycat") {
    if (raw) {
      video_link = `https://thumbs.gfycat.com/${video_link}-mobile.mp4`;
    }
    inner = <video ref={video} autoPlay={autoplay} loop muted className="w-full h-full m-0">
      <source src={video_link} type="video/mp4" />
    </video>;

  } else if (type === "image") {
    inner = <Image className="w-full h-full" src={video_link} alt={video_link} />;
  } else {
    return <p>VideoPlayer Error</p>;
  }

  return (
    <div className="rounded-md mb-3 overflow-clip">
      {inner}
    </div>
  );
}