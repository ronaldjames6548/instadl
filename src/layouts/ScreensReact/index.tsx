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
<Suspense fallback={<div>Please Wait for a While...</div>}>
 <div className="w-full max-w-xl mx-auto">
   <div className="w-full mx-auto">
      <div className="flex items-center py-1">
        <label className="sr-only">Search</label>
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2 sm:flex-row">
            <input value={Url} onChange={(e) => setUrl(e.target.value)} aria-label="search" type="text" className="w-full px-4 rounded-md focus:ring-primary-600 focus:border-transparent focus:outline-none focus:ring-2 dark:bg-black" placeholder={`Enter ${CheckPath(Path) == "profile" ? "Username or Profile URL" : CheckPath(Path) + " URL or Paste link here"}`} required spellCheck="false" data-ms-editor="true"/>
                            <button className="px-2 py-1 text-xs font-semibold text-gray-900 rounded-lg border shadow-md bg-gray-50" onClick={handlePaste}>Paste</button>
   
            <button type="submit" className="bg-current bg-pink-500  items-center py-2.5 px-3 text-sm font-medium text-white rounded-lg border focus:ring-4 focus:outline-none lg:block md:bloc hidden">DOWNLOAD</button>
              </form>
            </div>
            <button type="submit" onClick={handleSubmit} className="bg-current bg-pink-500  w-full items-center py-2.5 px-3 text-sm font-medium text-white rounded-lg border focus:ring-4 focus:outline-none lg:hidden md:hidden block">DOWNLOAD</button>
          </div>
        </div>
        {hide && (
          <Download key={downloadKey} url={Url} type={CheckPath(Path)}/>
        )}
      </Suspense>
    </>
  );
}
