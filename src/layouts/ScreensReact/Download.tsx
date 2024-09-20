import {
  useState,
  useEffect,
  Suspense,
  type SetStateAction,
  useContext,
} from "react";
// import Layout from './../components/layout';
import Display from "@/helpers/Display";
import { instagramUrlChecker } from "@/helpers/pathchecker";
import { SiteDetails } from "setup";
// import { Adsense1, Adsense2 } from '../components/adsense';
// import { redirect, Link, useLocation, BrowserRouter as Router, } from 'react-router-dom';

import React from "react";

export default function Download({
  type,
  url,
}:any) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null) as any;
  const [TimeoutError, setTimeoutError] = useState<NodeJS.Timeout[]>([]);
  const [ShowError, setShowError] = useState(false);
  const [Error, setError] = useState(null);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const ffmpeg = useContext<FFmpeg>(FFmpegContext);
  const [videoSrc, setVideoSrc] = useState("");
  const [message, setMessage] = useState("Click Start to transcode");
  // const doTranscode = async () => {
  //     setMessage("Loading ffmpeg-core.js");
  //     if (!ffmpeg.isLoaded()) {
  //         await ffmpeg.load();
  //     }
  //     setMessage("Start transcoding");
  //     ffmpeg.FS("writeFile", "audio.mp4", await fetchFile(data.main_media_hd));
  //     await ffmpeg.run("-i", "audio.mp4", "audio.mp3");
  //     setMessage("Complete transcoding");
  //     const dataF = ffmpeg.FS("readFile", "audio.mp3");
  //     URL.revokeObjectURL(videoSrc);
  //     console.log(dataF.buffer);
  //     setVideoSrc(
  //         URL.createObjectURL(new Blob([dataF.buffer], { type: "audio/mp3" }))
  //     );
  // };
  // const queryParams = useQueryParams();
  const [Query, setQuery] = useState<URLSearchParams>(
    new URLSearchParams(window !== undefined ? window.location.search : ""),
  );

  // const url = Query.get('url');
  // let type = type;
  let res;
  // function useQueryParams() {
  //     return new URLSearchParams(useLocation().search);
  // }

  // ... rest of your code ...

  const setErrorData = (err: any) => {
    if (TimeoutError) {
      TimeoutError.map((e) => clearTimeout(e));
    }

    setLoading(false);
    let response = err.response?.data;
    if (response && response.error) {
      setShowError(true);
      return setError(response.error);
    }
  };
  async function fetchData() {
    const isInstagramUrl = instagramUrlChecker(url!.toString());
    // console.log(url);
    // if (!Query.get('url')) return setErrorD('URL not present');
    console.log(type);
    switch (type) {
      case "stories":
        try {
          res = await fetch("/api/stories.json", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: url }),
          });

          const data = await res.json();
          if (data.type === "highlights") setData(formatHighlightsData(data));
          else setData(formatStoryData(data));
          if (data.code == 404 || data.media?.is_video == false) {
            setErrorD("Invalid URL");
          } else if (data.status == "0") {
            setErrorD("Invalid URL");
          } else {
            setLoading(false);
            // console.log(loading);
          }

          // ... rest of your code ...
        } catch (err) {
          console.log(err);
          setLoading(false);
          return setErrorData(err);
        }

        setLoading(false);
        break;
      case "videos":
        try {
          let urlObj;
          urlObj = new URL(url!.toString());
        } catch (err) {
          setErrorData("Invalid URL");
        }

        if (isInstagramUrl) {
          try {
            res = await fetch("/api/video.json", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ url: url }),
            });

            const data = await res.json();
            if (data == null) {
              setErrorD("Invalid URL");
            } else if (data == undefined) {
              setErrorD("Invalid URL");
            } else {
              setData(formatVideoData(data));
              setLoading(false);
            }
          } catch (err) {
            setLoading(false);
            return setErrorData(err);
          }
        }
        break;
      case "highlights":
        try {
          let urlObj;
          urlObj = new URL(url!.toString());
        } catch (err) {
          setErrorData("Invalid URL");
        }

        if (isInstagramUrl) {
          try {
            res = await fetch("/api/highlights.json", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ url: url }),
            });
            console.log("💼", res);

            const data = await res.json();
            if (data == null) {
              setErrorD("Invalid URL");
            } else if (data == undefined) {
              setErrorD("Invalid URL");
            } else {
              setData(formatHighlightsData(data));
              setLoading(false);
            }
          } catch (err) {
            setLoading(false);
            return setErrorData(err);
          }
        }
        break;

      case "reels":
        try {
          res = await fetch("/api/reel.json", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: url }),
          });
          const data = await res.json();

          if (
            data.status === 404 ||
            data.code == 404 ||
            data.media?.is_video == false
          ) {
            setErrorD("Invalid URL");
          } else if (data.status == "0") {
            setErrorD("Invalid URL");
          } else {
            setData(formatReelsData(data));
            setLoading(false);
          }
        } catch (err) {
          setLoading(false);
          return setErrorData(err);
        }

        break;

      case "photo":
        try {
          res = await fetch("/api/video.json", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: url }),
          });
          const data = await res.json();

          if (data.code == 404 || data.media?.is_video == false) {
            setErrorD("Invalid URL");
          } else if (data.status == "0") {
            setErrorD("Invalid URL");
          } else {
            setData(formatPhotosData(data));
            setLoading(false);
          }
        } catch (err) {
          setLoading(false);
          return setErrorData(err);
        }
        break;

      case "profile":
        try {
          res = await fetch("/api/instadp.json", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: url }),
          });
          const data = await res.json();
          if (data.code == 404) {
            setErrorD("Invalid URL");
          } else {
            setData(data);
            setLoading(false);
          }
        } catch (err) {
          setLoading(false);
          return setErrorData(err);
        }
        break;

      case "audio":
        try {
          res = await fetch("/api/audio.json", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: url }),
          });
          const data = await res.json();
          if (data == undefined) {
            setErrorD("Invalid URL");
          } else {
            setData(data);
            setLoading(false);
          }
        } catch (err) {
          setLoading(false);
          return setErrorData(err);
        }
        break;
    }
  }
  const setErrorD = (error: any) => {
    if (TimeoutError) {
      TimeoutError.map((e) => clearTimeout(e));
    }

    setLoading(false);
    if (error) {
      setShowError(true);
      return setError(error);
    }
  };

  useEffect(() => {
    setQuery(new URLSearchParams(window.location.search));
    // setQuery(query);
    // console.log(url);
    if (!url) return setErrorD("URL not present");

    if (
      type !== "stories" &&
      type !== "profile" &&
      !instagramUrlChecker(url!.toString())
    ) {
      return setErrorD("Invalid URL");
    }

    fetchData();
  }, []);

  // let type;

  // type = type === 'stories' ? 'stories'   : type   'instagram';

  const formatStoryData = (data: { stories: any[] }) => {
    const urls = data.stories.map(
      (story: {
        has_audio: any;
        video_versions: { url: any }[];
        image_versions2: { candidates: { url: any }[] };
      }) => {
        if (
          story.has_audio &&
          story.video_versions &&
          story.video_versions.length > 0
        )
          return {
            url: story.video_versions[0].url,
            media_type: 2,
          };

        console.log(
          decodeURIComponent(
            story.image_versions2.candidates[1].url.replaceAll(
              "https://phosphor.ivanenko.workers.dev?url=",
              "",
            ),
          ),
        );
        if (
          story.image_versions2 &&
          story.image_versions2.candidates &&
          story.image_versions2.candidates.length > 1
        )
          return {
            url: decodeURIComponent(
              story.image_versions2.candidates[1].url.replaceAll(
                "https://phosphor.ivanenko.workers.dev?url=",
                "",
              ),
            ),
            media_type: 1,
          };

        // Handle the case where the required data is not available
        // return {
        //     url: '',
        //     media_type: 1,
        // }
      },
    );
    console.log(urls);
    return urls;
  };
  const formatVideoData = (data: {
    child_medias_hd: any[];
    main_media_hd: any;
    main_media_type: string;
    caption: any;
  }) => {
    if (!data.child_medias_hd)
      return {
        url: data.main_media_hd,
        type: data.main_media_type === "image" ? 1 : 2,
        caption: data.caption,
      };

    // if (data.media_type === 1)
    // 	return { url: data.image_versions2.candidates[0].url, type: 1 }

    // if (data.media_type === 2)
    // 	return { url: data.video_versions[0].url, type: 2 }

    return data.child_medias_hd.map((media: { type: string; url: any }) => {
      if (media.type === "video")
        return { url: media.url, type: 2, caption: data.caption };

      return { url: media.url, type: 1, caption: data.caption };
    });
  };

  const formatReelsData = (data: {
    child_medias_hd: any[];
    main_media_hd: any;
    main_media_type: string;
    caption: any;
  }) => {
    if (!data.child_medias_hd)
      return {
        url: data.main_media_hd,
        type: data.main_media_type === "image" ? 1 : 2,
        caption: data.caption,
      };

    return data.child_medias_hd.map((media: { type: string; url: any }) => {
      if (media.type === "video")
        return { url: media.url, type: 2, caption: data.caption };

      return { url: media.url, type: 1, caption: data.caption };
    });

    // if (data.media_type === 2)
    // 	return { url: data.video_versions[0].url, type: 2 }
  };

  const formatPhotosData = (data: {
    child_medias_hd: any[];
    main_media_hd: any;
    main_media_type: string;
  }) => {
    if (!data.child_medias_hd)
      return {
        url: data.main_media_hd,
        type: data.main_media_type === "image" ? 1 : 2,
      };

    return data.child_medias_hd.map((media: { type: string; url: any }) => {
      if (media.type === "video") return { url: media.url, type: 2 };

      return { url: media.url, type: 1 };
    });

    // if (data.media_type === 1)
    // 	return { url: data.image_versions2.candidates[0].u  rl, type: 1 }

    // if (data.media_type === 2)
    // 	return { url: data.video_versions[0].url, type: 2 }

    // return data.carousel_media.map(media => {
    // 	if (media.media_type === 2)
    // 		return { url: media.video_versions.candidates[0].url, type: 2 }

    // 	return { url: media.image_versions2.candidates[0].url, type: 1 }
    // })
  };

  const formatHighlightsData = (data: any) => {
    return data.items.map((item: { image_hd: string; video_hd: string }) =>
      item.video_hd
        ? { url: item.video_hd, media_type: 2 }
        : {
            url: item.image_hd,
            media_type: 1,
          },
    );
  };
  console.log(data);

  // console.log(loading);
  return (
    <div className="">
      {/* <Adsense1 /> */}
      <div className="w-full max-w-4xl p-4 mx-auto">
        <Suspense fallback={<div>Loading Please Wait...</div>}>
          {loading ? (
            <div className="mt-4 text-center border-2 border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-900">
              <div className="flex items-center justify-center gap-2 my-10">
                <svg
                  className="w-8 h-8 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <h3 className="text-lg">Loading...</h3>
              </div>
            </div>
          ) : Error ? (
            <>
              <p
                className={
                  "mt-4 text-blue-400 font-semibold text-center transition-all " +
                  (ShowError ? "opacity-1" : "opacity-0")
                }
              >
                {Error || "\u00A0"}
              </p>
              <button
                className="flex px-4 py-2 m-auto mt-2 ml-auto text-white bg-blue-500 rounded-lg"
                // onClick={() =>
                //     // redirect('/download/?url=' + url + '&type=' + type)
                // }
              >
                Try Again
              </button>
            </>
          ) : (
            data &&
            data?.data?.code != 404 &&
            data?.data?.status != "0" &&
            (type !== "profile" && type !== "audio" ? (
              <Display Data={{ type, data }}></Display>
            ) : type === "profile" ? (
              <>
                <div className="mt-4 text-center border-2 border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-900">
                  <img
                          crossOrigin="anonymous"
                    className="h-full m-auto my-auto bg-gray-500 border-2 border-gray-200 rounded-lg w-72 dark:border-gray-700"
                    src={`https://dl.saveinsta-cdn.workers.dev/api/download?type=.png&url=${encodeURIComponent(
                      data.profile_pic_url_hd,
                    )}&type=${".png"}&title=${Math.floor(
                      Math.random() * 100000000000,
                    )}`}

                    // src={Data.thumbnail_url}
                  />

                  <div className="flex items-center justify-center h-auto m-auto ">
                    {/* <h2 className="text-2xl font-semibold">{Data.title}</h2>
                <h3 className="font-semibold">{Data.description}</h3 > */}

                    <a
                      href={`https://dl.saveinsta-cdn.workers.dev/api/download?type=.png&title=IGProfile-(saveinsta.li)${Math.floor(
                        Math.random() * 100000000000,
                      )}&url=${encodeURIComponent(data.profile_pic_url_hd)}`}
                    >
                      <button
                        onClick={() => {
                          const modal = document.getElementById("my_modal_3");
                          if (modal instanceof HTMLDialogElement) {
                            modal.showModal();
                          }
                        }}
                        className="flex px-4 py-2 m-auto mt-2 ml-auto text-white bg-blue-500 rounded-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-6 h-6 mr-1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>{" "}
                        Download Now
                      </button>{" "}
                    </a>
                  </div>
                  <a href="https://saveinsta.li/instagram-profile-downloader">
                    <div
                      className="flex items-center justify-center mx-4 my-2"
                    >
                      <button
                        className="flex items-center justify-center w-full p-2 text-sm tracking-wide text-white bg-green-600 rounded-md"
                      >
                        <svg
                          width="28"
                          height="22"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <path
                            d="m19.146 4.854-1.489 1.489A8 
                                 8 0 1 0 12 20a8.094 8.094 0 0 0 7.371-4.886 1 1 0 1 0-1.842-.779A6.071 6.071 0 0 1 12 18a6 6 
                                 0 1 1 4.243-10.243l-1.39 1.39a.5.5 0 0 0 .354.854H19.5A.5.5 0 0 0 20 9.5V5.207a.5.5 0 0 0-.854-
                                 .353z"
                          ></path>
                        </svg>
                        Download Again
                      </button>
                    </div>
                  </a>
                </div>
                {/* <Adsense2 /> */}
              </>
            ) : (
              <>
                <div className="mt-4 text-center border-2 border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-900">
                  {data.caption && (
                    <p className="w-11/12 mx-auto mb-4">{data.caption}</p>
                  )}
                  <audio
                    controls
                    className="w-64 m-auto"
                    // className="h-full m-auto my-auto bg-gray-500 border-2 border-gray-200 rounded-lg w-72 dark:border-gray-700"
                    src={`https://dl.saveinsta-cdn.workers.dev/api/download?type=.mp3&title=ReelsAudio-(saveinsta.li)${Math.floor(
                      Math.random() * 100000000000,
                    )}&url=${encodeURIComponent(data.main_media_hd)}`}

                    // src={Data.thumbnail_url}
                  >
                    <source
                      src={`https://dl.saveinsta-cdn.workers.dev/api/download?type=.mp3&title=ReelsAudio-(saveinsta.li)-${Math.floor(
                        Math.random() * 100000000000,
                      )}&url=${encodeURIComponent(data.main_media_hd)}`}
                      type="audio/mp3"
                    />
                    Your browser does not support the audio element.
                  </audio>
                  {/* <button onClick={
                                        doTranscode
                                    } className='flex px-4 py-2 m-auto mt-2 ml-auto text-white bg-blue-500 rounded-lg'
                                    >
                                        Transcode
                                    </button> */}

                  <div className="flex items-center justify-center h-auto m-auto ">
                    {/* <h2 className="text-2xl font-semibold">{Data.title}</h2>
                <h3 className="font-semibold">{Data.description}</h3> */}
                    <a
                      // locale={false}
                      href={`https://dl.saveinsta-cdn.workers.dev/api/download?type=.mp3&title=ReelsAudio-(saveinsta.li)${Math.floor(
                        Math.random() * 100000000000,
                      )}&url=${encodeURIComponent(data.main_media_hd)}`}
                    >
                      <button
                        onClick={() => {
                          const modal = document.getElementById("my_modal_3");
                          if (modal instanceof HTMLDialogElement) {
                            modal.showModal();
                          }
                        }}
                        className="flex px-4 py-2 m-auto mt-2 ml-auto text-white bg-blue-500 rounded-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-6 h-6 mr-1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>{" "}
                        Download Now
                      </button>
                    </a>
                  </div>
                  <a href="https://saveinsta.li/audio-downloader">
                    <div
                      className="flex items-center justify-center mx-4 my-2"
                    >
                      <button
                        className="flex items-center justify-center w-full p-2 text-sm tracking-wide text-white bg-green-600 rounded-md"
                      >
                        <svg
                          width="28"
                          height="22"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <path
                            d="m19.146 4.854-1.489 1.489A8 
                                 8 0 1 0 12 20a8.094 8.094 0 0 0 7.371-4.886 1 1 0 1 0-1.842-.779A6.071 6.071 0 0 1 12 18a6 6 
                                 0 1 1 4.243-10.243l-1.39 1.39a.5.5 0 0 0 .354.854H19.5A.5.5 0 0 0 20 9.5V5.207a.5.5 0 0 0-.854-
                                 .353z"
                          ></path>
                        </svg>
                        Download Again
                      </button>
                    </div>
                  </a>
                </div>
                {/* <Adsense2 /> */}
              </>
            ))
          )}
        </Suspense>
      </div>
    </div>
  );
  // ... rest of your code ...
}
