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
          <form onSubmit={handleSubmit} className="w-full flex items-center max-w-lg mx-auto">

   <div class="relative w-full">

        <input value={Url} onChange={(e) => setUrl(e.target.value)} aria-label="search" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`Enter ${CheckPath(Path) == "profile" ? "Username or Profile URL" : CheckPath(Path) + " URL or Paste link here"}`} required spellCheck="false" data-ms-editor="true" />
        <button type="button" className="absolute inset-y-0 end-0 flex items-center pe-3" onClick={handlePaste}>
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M17.5,12h17c0.8,0,1.5-0.7,1.5-1.5V6c0-2.2-1.8-4-4-4H20c-2.2,0-4,1.8-4,4v4.5C16,11.3,16.7,12,17.5,12z"></path> <path d="M44,6h-2.5C40.7,6,40,6.7,40,7.5V12c0,2.2-1.8,4-4,4H16c-2.2,0-4-1.8-4-4V7.5C12,6.7,11.3,6,10.5,6H8 c-2.2,0-4,1.8-4,4v36c0,2.2,1.8,4,4,4h36c2.2,0,4-1.8,4-4V10C48,7.8,46.2,6,44,6z M38,41c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1v-2 c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1V41z M38,33c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1V33z M38,25c0,0.6-0.4,1-1,1H15c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h22c0.6,0,1,0.4,1,1V25z"></path> </g> </g></svg>
        </button>
    </div>
    <button type="submit" className="inline-flex items-center py-2.5 px-3 ms-2 text-lg font-medium text-white bg-emerald-500 rounded-lg border border-blue-700 hover:bg-bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
      <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12ZM12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V12.1893L14.4697 10.4697C14.7626 10.1768 15.2374 10.1768 15.5303 10.4697C15.8232 10.7626 15.8232 11.2374 15.5303 11.5303L12.5303 14.5303C12.3897 14.671 12.1989 14.75 12 14.75C11.8011 14.75 11.6103 14.671 11.4697 14.5303L8.46967 11.5303C8.17678 11.2374 8.17678 10.7626 8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L11.25 12.1893V7C11.25 6.58579 11.5858 6.25 12 6.25ZM8 16.25C7.58579 16.25 7.25 16.5858 7.25 17C7.25 17.4142 7.58579 17.75 8 17.75H16C16.4142 17.75 16.75 17.4142 16.75 17C16.75 16.5858 16.4142 16.25 16 16.25H8Z" fill="#ffffff"></path> </g></svg>  
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
