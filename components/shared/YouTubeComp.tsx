"use client";

import React from "react";
import YouTube from "react-youtube";

interface YouTubeCompProp {
  videoId: string;
  title: string;
}
const YouTubeComp = ({ videoId, title }: YouTubeCompProp) => {
  return (
    <YouTube
      videoId={videoId}
      title={title}
      style={{ width: "100%", height: "100%" }}
      opts={{
        width: "100%",
        height: "100%",
        playerVars: { rel: 0, modestbranding: 1 },
      }}
    />
  );
};

export default YouTubeComp;
