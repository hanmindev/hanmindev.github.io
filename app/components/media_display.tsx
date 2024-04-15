"use client";

import React, { useRef } from "react";
import useOnScreen from "../helpers/hooks";

export default function MediaDisplay({ raw, type, link, play, autoplay }: {
  raw?: boolean;
  type: string;
  link: string;
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
      link = `https://www.youtube.com/embed/${link}`;
    }

    inner = <iframe title="Featured Video" className="w-full h-full" src={link} />;

  } else if (type === "gfycat") {
    if (raw) {
      link = `https://thumbs.gfycat.com/${link}-mobile.mp4`;
    }
    inner = <video ref={video} autoPlay={autoplay} loop muted className="w-full h-full m-0">
      <source src={link} type="video/mp4" />
    </video>;

  } else if (type === "image") {
    inner = <img className="w-full h-full" src={link} alt={link} />;
  } else {
    return <p>VideoPlayer Error</p>;
  }

  return inner;
}