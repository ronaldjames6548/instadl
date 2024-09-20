import { useState, useEffect, Suspense } from "react";
import Download from "./Download";
import React from "react";

export default function IndexHome() {
  const [Path, setPath] = useState(
    window != undefined ? window.location.pathname : "",
  );
  const [Url, setUrl] = useState<string>("");
  const [hide, setHide] = useState(false);
  const [downloadKey, setDownloadKey] = useState(0);

  useEffect(() => {
    let query = new URLSearchParams(window.location.search);
    let url = query.get("url");
    setUrl(url || "");

    // Make sure to setPath as well if needed
    setPath(window.location.pathname);
  }, []);

  // useEffect(() => {
  // }, [hide, Url]);

  function CheckPath(url: string) {
    return url.includes("profile")
      ? "profile"
      : url.includes("post")
        ? "post"
        : url.includes("reels")
          ? "reels"
          : url.includes("story")
            ? "stories"
            : url.includes("audio")
              ? "audio"
              : url.includes("photo")
                ? "photo"
                : url.includes("fb")
                  ? "fb"
                  : url.includes("videos")
                    ? "videos"
                    : "reels";
  }

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
    } catch (error) {
      console.error("Failed to read clipboard:", error);
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    //check if previous url is same as current url
    if (Url == window.location.href) {
      setHide(false);
      setHide(true);
      return;
    } else {
      setDownloadKey((prevKey) => prevKey + 1);

      setHide(true);
    }
  };

  return (
    <>



      
    </>
  );
}
