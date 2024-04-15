"use client";

import React, { useEffect, useRef } from "react";
import useOnScreen from "../helpers/hooks";
import clsx from "clsx";

export default function MediaDisplay({ className, raw, type, link, play, autoplay }: {
  className?: string,
  raw?: boolean;
  type: string;
  link: string;
  play?: boolean;
  autoplay?: boolean
}) {
  const video = useRef<HTMLVideoElement>(null);
  const visibility = useRef<HTMLDivElement>(null);
  const [hasBeenVisible, setHasBeenVisible] = React.useState(false);

  const isVisible = useOnScreen(visibility);

  useEffect(() => {
    if (isVisible) {
      if (video.current) {
        if (play || autoplay) {
          video.current.play();
        } else {
          video.current.pause();
        }
      }

      setHasBeenVisible(true);
    }
  }, [autoplay, isVisible, play]);

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

  return <div className={clsx("w-full h-full", className)} ref={visibility}>{hasBeenVisible ? inner : <div className="skeleton w-full h-full"></div>}</div>;
}