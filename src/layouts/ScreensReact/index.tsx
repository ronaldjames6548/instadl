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
          <form onSubmit={handleSubmit} className="flex items-center max-w-lg mx-auto">

   <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"/>
            </svg>
        </div>
        <input value={Url} onChange={(e) => setUrl(e.target.value)} aria-label="search" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`Enter ${CheckPath(Path) == "profile" ? "Username or Profile URL" : CheckPath(Path) + " URL or Paste link here"}`} required spellCheck="false" data-ms-editor="true" />
        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
            </svg>
        </button>
    </div>
    <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Download
    </button>

            </form>
            </div>

     <button type="submit" onClick={handleSubmit} className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 lg:hidden md:hidden block">
        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>Download
    </button>

          </div>
        </div>
        {hide && (
          <Download key={downloadKey} url={Url} type={CheckPath(Path)}/>
        )}
      </Suspense>



   
  



      
      
    </>
  );
}
