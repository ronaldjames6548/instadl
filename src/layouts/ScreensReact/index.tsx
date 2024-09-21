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
          <form onSubmit={handleSubmit} className="w-full flex items-center max-w-4xl mx-auto">

   <div class="relative w-full">

        <input value={Url} onChange={(e) => setUrl(e.target.value)} aria-label="search" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`Enter ${CheckPath(Path) == "profile" ? "Username or Profile URL" : CheckPath(Path) + " URL or Paste link here"}`} required spellCheck="false" data-ms-editor="true" />
        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3" onClick={handlePaste}>
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.5,12h17c0.8,0,1.5-0.7,1.5-1.5V6c0-2.2-1.8-4-4-4H20c-2.2,0-4,1.8-4,4v4.5C16,11.3,16.7,12,17.5,12z"></path> <path d="M44,6h-2.5C40.7,6,40,6.7,40,7.5V12c0,2.2-1.8,4-4,4H16c-2.2,0-4-1.8-4-4V7.5C12,6.7,11.3,6,10.5,6H8 c-2.2,0-4,1.8-4,4v36c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V10C48,7.8,46.2,6,44,6z M38,41c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1v-2 c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1V41z M38,33c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1V33z M38,25c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1V25z"></path> </g> </g></svg>
        </button>
    </div>
    <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-base font-medium text-white bg-emerald-500 rounded-lg border border-blue-700 hover:bg-bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
      <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="20px" height="20px" viewBox="0 0 24 24" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g></svg>
      Download
    </button>
            

            </form>
            </div>

  
          </div>
        </div>
        {hide && (
          <Download key={downloadKey} url={Url} type={CheckPath(Path)}/>
        )}
      </Suspense>



   
  



      
      
    </>
  );
}
