import { SiteDetails } from "setup";
import { useEffect, useState, Suspense } from "react";
import React from "react";

const Display = ({ Data }: { Data: any }) => {
  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState(false);
  if (!Data) {
    return <div></div>;
  }

  const [url, setUrl] = useState(null);

  const downloadVideo = async (url: string) => {
    setDownloading(true);
    const res = await fetch("https://cors-anywhere-78f4.onrender.com/" + url);
    const r = await res.blob();
    const u = URL.createObjectURL(r);
    const link = document.createElement("a");
    link.href = u;
    link.download = `${Math.floor(Math.random() * 100000000000).toString()}.mp4`;
    link.click();
    setDownloading(false);
  };

  // useEffect(() => {
  // 	async function getUrl() {
  // 		const dlURL = Data.data.url

  // 		const res = await fetch(dlURL)

  // 		const blob = await res.blob()

  // 		setUrl(URL.createObjectURL(blob))
  // 	}
  // 	getUrl()
  // }, [])
  console.log(Data);

  let instagramVideoDisplay = () => {
    let u;
    // if (Data?.data.type === 2) {
    // 	u = decodeURIComponent(
    // 		Data.data.url.substring(Data.data.url.indexOf('https%3A'))
    // 	)
    // }
    return Data.data != undefined ? (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="">
          {Data.data.type === 2 ? (
            Data.data.url !== null && (
              <>
                {Data.data.caption && (
                  <p className="w-11/12 mx-auto mb-4">{Data.data.caption}</p>
                )}
                <video
                  className="h-full m-auto bg-gray-500 border-2 border-gray-200 rounded-lg w-72 dark:border-gray-700 "
                  // src={`/api/dl?url=${encodeURIComponent(
                  // 	Data.data.url
                  // )}&type=${'mp4'}&title=${Math.floor(
                  // 	Math.random() * 100000000000
                  // )}`}
                  src={Data.data.url}
                  onCanPlay={() => {
                    setLoading(false);
                  }}
                  // onLoad={}
                  controls
                ></video>
                <div className="flex items-center justify-center h-auto p-2 m-auto ">
                  {/* <h2 className="text-2xl font-semibold">{Data.title}</h2>
                <h3 className="font-semibold">{Data.description}</h3> */}
                  {/* <Link
										// href={
										// 	SiteDetails.website +
										// 	`/api/dl?url=${encodeURIComponent(
										// 		Data.data.url
										// 	)}&type=${'mp4'}&title=${Math.floor(
										// 		Math.random() * 100000000000
										// 	)}`
										// }
										href={u}
										download={'video.mp4'}
										locale={false}
									> */}
                  <a
                    href={`https://dl.saveinsta-cdn.workers.dev/api/download?type=.mp4&title=Reels-(saveinsta.li)${Math.floor(
                      Math.random() * 100000000000,
                    )}&url=${encodeURIComponent(Data.data.url.replaceAll("https://phosphor.ivanenko.workers.dev/?url=", ""))}`}
                    target="_blank"
                    download
                  >
                    <button
                      onClick={() => {
                        const modal = document.getElementById("my_modal_3");
                        if (modal instanceof HTMLDialogElement) {
                          modal.showModal();
                        }
                      }}
                      // onClick={() => downloadVideo(Data.data.url)}
                      className="flex px-4 py-2 m-auto mt-2 ml-auto text-white bg-blue-500 rounded-lg"
                      // disabled={downloading}
                    >
                      {/* {downloading ? (
											<svg
												className='w-8 h-8 animate-spin'
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
											>
												<circle
													className='opacity-25'
													cx='12'
													cy='12'
													r='10'
													stroke='currentColor'
													strokeWidth='4'
												></circle>
												<path
													className='opacity-75'
													fill='currentColor'
													d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
												></path>
											</svg>
										) : ( */}
                      <>
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
                        Download Video
                      </>
                      {/* )} */}
                    </button>
                  </a>
                  {/* </Link> */}
                </div>
                <a href="https://saveinsta.li/instagram-reels-video-download">
                  <div className="flex items-center justify-center mx-4 my-2">
                    <button className="flex items-center justify-center p-2 text-sm tracking-wide text-white bg-green-600 rounded-md w-480">
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
              </>
            )
          ) : Data.data.type === 1 ? (
            <>
              {Data.data.caption && (
                <p className="w-11/12 mx-auto mb-4">{Data.data.caption}</p>
              )}
              <img
                className="h-full m-auto bg-gray-500 border-2 border-gray-200 rounded-lg w-72 dark:border-gray-700 "
                src={Data.data.url}
                onLoad={() => setLoading(false)}
              ></img>
              <div className="flex items-center justify-center h-auto p-2 m-auto ">
                {/* <h2 className="text-2xl font-semibold">{Data.title}</h2>
                <h3 className="font-semibold">{Data.description}</h3> */}

                <a
                  href={`https://dl.saveinsta-cdn.workers.dev/api/download?type=.png&title=${Math.floor(
                    Math.random() * 100000000000,
                  )}&url=${encodeURIComponent(
                    Data.data.url.replaceAll(
                      "https://phosphor.ivanenko.workers.dev/?url=",
                      "",
                    ),
                  )}`}
                  download={"image.png"}
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
                    Download Image
                  </button>
                </a>
              </div>

              <a href="https://saveinsta.li/instagram-photo-download">
                <div className="flex items-center justify-center mx-4 my-2">
                  <button className="flex items-center justify-center w-full p-2 text-sm tracking-wide text-white bg-green-600 rounded-md">
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
            </>
          ) : (
            <>
              {Data.data[0].caption && (
                <p className="w-11/12 mx-auto mb-4">{Data.data[0].caption}</p>
              )}
              {Data.data.map((e: any, i: any) => {
                if (e.type === 2) {
                  u = decodeURIComponent(
                    e.url.substring(e.url.indexOf("https%3A")),
                  );
                }
                return e.type === 1 ? (
                  <div key={e.url}>
                    <img
                      className="h-full m-auto bg-gray-500 border-2 border-gray-200 rounded-lg w-72 dark:border-gray-700 "
                      src={e.url}
                      onLoad={() => setLoading(false)}
                    ></img>
                    <div className="flex items-center justify-center h-auto p-2 m-auto ">
                      {/* <h2 className="text-2xl font-semibold">{Data.title}</h2>
                <h3 className="font-semibold">{Data.description}</h3> */}

                      <a
                        href={`https://dl.saveinsta-cdn.workers.dev/api/download?url=${encodeURIComponent(
                          e.url.replaceAll(
                            "https://phosphor.ivanenko.workers.dev/?url=",
                            "",
                          ),
                        )}&type=${".png"}&title=${Math.floor(
                          Math.random() * 100000000000,
                        )}`}
                        download={"image.png"}
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
                          Download Image
                        </button>
                      </a>
                    </div>
                    <a href="https://saveinsta.li/instagram-photo-download">
                      <div className="flex items-center justify-center mx-4 my-2">
                        <button className="flex items-center justify-center w-full p-2 text-sm tracking-wide text-white bg-green-600 rounded-md">
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
                ) : (
                  <div key={e.url}>
                    <video
                      className="h-full m-auto bg-gray-500 border-2 border-gray-200 rounded-lg w-72 dark:border-gray-700 "
                      // src={`/api/dl?url=${encodeURIComponent(
                      // 	e.url
                      // )}&type=${'mp4'}&title=${Math.floor(
                      // 	Math.random() * 100000000000
                      // )}`}
                      src={e.url}
                      onCanPlay={() => setLoading(false)}
                      controls
                    ></video>
                    <div className="flex items-center justify-center h-auto p-2 m-auto ">
                      {/* <h2 className="text-2xl font-semibold">{Data.title}</h2>
                <h3 className="font-semibold">{Data.description}</h3> */}
                      {/* <Link
												// href={
												// 	SiteDetails.website +
												// 	`/api/dl?url=${encodeURIComponent(
												// 		e.url
												// 	)}&type=${'mp4'}&title=${Math.floor(
												// 		Math.random() * 100000000000
												// 	)}`
												// }
												download={'video.mp4'}
												href={u}
												locale={false}
											> */}
                      <button
                        onClick={() => {
                          const modal = document.getElementById("my_modal_3");
                          if (modal instanceof HTMLDialogElement) {
                            modal.showModal();
                          }
                          downloadVideo(e.url);
                        }}
                        className="flex px-4 py-2 m-auto mt-2 ml-auto text-white bg-blue-500 rounded-lg"
                        disabled={downloading}
                      >
                        {downloading ? (
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
                        ) : (
                          <>
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
                            Download Video
                          </>
                        )}
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </Suspense>
    ) : (
      <div></div>
    );
  };

  let facebookDisplay1 = () => {
    return (
      <>
        <div className="">
          {/* <img
                className="h-32 my-auto bg-gray-500 border-2 border-gray-200 rounded-lg dark:border-gray-700"
                // src={`api/dl?url=${encodeURIComponent(
                //   Data.media.display_url
                // )}&type=${"png"}&title=${Math.floor(
                //   Math.random() * 100000000000
                // )}`}

                src={Data.media.display_data}
              /> */}

          {Data.data.formats?.map(
            (e: { videoData: any[]; imageData: any[] }, i: any) => {
              return (
                <div>
                  {" "}
                  {e.videoData.map(
                    (
                      ee: {
                        quality:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined;
                        url: {
                          replaceAll: (
                            arg0: string,
                            arg1: string,
                          ) => string | number | boolean;
                        };
                      },
                      i: any,
                    ) => {
                      return (
                        <>
                          <br />
                          <h4>{ee.quality}</h4>
                          <video
                            className="h-full m-auto bg-gray-500 border-2 border-gray-200 rounded-lg w-72 dark:border-gray-700 "
                            // src={`/api/dl?url=${encodeURIComponent(
                            // 	ee.url
                            // )}&type=${'mp4'}&title=${Math.floor(
                            // 	Math.random() * 100000000000
                            // )}`}
                            src={`https://dl.saveinsta-cdn.workers.dev/api/download?type=.mp4&title=${Math.floor(
                              Math.random() * 100000000000,
                            )}&url=${encodeURIComponent(ee.url.replaceAll("https://phosphor.ivanenko.workers.dev/?url=", ""))}`}
                            controls
                          ></video>
                          <div className="flex items-center justify-center h-auto m-auto ">
                            {/* !video */}
                            {/* <Link
													href={
														SiteDetails.website +
														`/api/dl?url=${encodeURIComponent(
															ee.url
														)}&type=${'mp4'}&title=${Math.floor(
															Math.random() * 100000000000
														)}`
													}
													locale={false}
												> */}
                            <a
                              href={`https://dl.saveinsta-cdn.workers.dev/api/download?type=.mp4&title=${Math.floor(
                                Math.random() * 100000000000,
                              )}&url=${encodeURIComponent(ee.url.replaceAll("https://phosphor.ivanenko.workers.dev/?url=", ""))}`}
                              target="_blank"
                              download
                            >
                              <button
                                onClick={() => {
                                  const modal =
                                    document.getElementById("my_modal_3");
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
                                Download
                              </button>
                            </a>
                            {/* </Link> */}
                          </div>
                        </>
                      );
                    },
                  )}
                  {e.imageData.map(
                    (
                      ee: {
                        resolution:
                          | string
                          | number
                          | boolean
                          | React.ReactElement<
                              any,
                              string | React.JSXElementConstructor<any>
                            >
                          | Iterable<React.ReactNode>
                          | React.ReactPortal
                          | null
                          | undefined;
                        url: string | number | boolean;
                      },
                      i: any,
                    ) => {
                      return (
                        <>
                          <br />
                          <h4>{ee.resolution}</h4>
                          <img
                            className="h-full m-auto bg-gray-500 border-2 border-gray-200 rounded-lg w-72 dark:border-gray-700 "
                            src={`https://dl.saveinsta-cdn.workers.dev/api/download?url=${encodeURIComponent(
                              ee.url,
                            )}&type=${".png"}&title=${Math.floor(
                              Math.random() * 100000000000,
                            )}`}
                          ></img>
                          <div className="flex items-center justify-center h-auto m-auto ">
                            <a
                              href={`https://dl.saveinsta-cdn.workers.dev/api/download?type=.png&title=${Math.floor(
                                Math.random() * 100000000000,
                              )}&url=${encodeURIComponent(ee.url)}`}
                              download={"image.png"}
                            >
                              <button
                                className="flex px-4 py-2 m-auto mt-2 ml-auto text-white bg-blue-500 rounded-lg"
                                onClick={() => {
                                  const modal =
                                    document.getElementById("my_modal_3");
                                  if (modal instanceof HTMLDialogElement) {
                                    modal.showModal();
                                  }
                                }}
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
                                Download
                              </button>
                            </a>
                          </div>
                        </>
                      );
                    },
                  )}
                </div>
              );
            },
          )}
        </div>
        {/* <button
          onClick={() => {
            router.reload();
          }}
          className="flex w-full px-4 py-2 mt-4 bg-gray-100 border-2 border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-900"
        >
          <DownloadIcon className="w-6 h-6 mr-1" />
          <span className="mx-auto">Download another video</span>
        </button> */}
      </>
    );
  };
  let storiesVideo = () => {
    return (
      <>
        <div className="">
          {Data.data.map((storyUrl: any) => {
            // let u
            // if (storyUrl.media_type === 2) {
            // 	u = decodeURIComponent(
            // 		storyUrl.url.substring(storyUrl.url.indexOf('https%3A'))
            // 	)
            // }
            return storyUrl.media_type == 1 ? (
              <div key={storyUrl.url}>
                <img crossOrigin="anonymous"

                  className="h-full m-auto bg-gray-500 border-2 border-gray-200 rounded-lg w-72 dark:border-gray-700 "
                  src={`https://dl.saveinsta-cdn.workers.dev/api/download?url=${encodeURIComponent(
                    storyUrl.url,
                  )}&type=${".png"}&title=${Math.floor(
                    Math.random() * 100000000000,
                  )}`}
                  onLoad={() => setLoading(false)}
                />
                <div className="flex items-center justify-center m-auto">
                  <a
                    href={`https://dl.saveinsta-cdn.workers.dev/api/download?url=${encodeURIComponent(
                      storyUrl.url,
                    )}&type=${".png"}&title=${Math.floor(
                      Math.random() * 100000000000,
                    )}`}
                    download={"image.png"}
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
                      Download
                    </button>
                  </a>
                </div>
              </div>
            ) : (
              <div key={storyUrl.url}>
                <video
                  className="h-full m-auto bg-gray-500 border-2 border-gray-200 rounded-lg w-72 dark:border-gray-700 "
                  // src={`/api/dl?url=${encodeURIComponent(
                  // 	storyUrl.url
                  // )}&type=${'mp4'}&title=${Math.floor(
                  // 	Math.random() * 100000000000
                  // )}`}
                  src={`https://dl.saveinsta-cdn.workers.dev/api/download?type=.mp4&title=${Math.floor(
                    Math.random() * 100000000000,
                  )}&url=${encodeURIComponent(storyUrl.url.replaceAll("https://phosphor.ivanenko.workers.dev/?url=", ""))}`}
                  controls
                  onCanPlay={() => setLoading(false)}
                ></video>

                <div className="flex items-center justify-center h-auto m-auto ">
                  {/* <Link
										href={
											SiteDetails.website +
											`/api/dl?url=${encodeURIComponent(
												storyUrl.url
											)}&type=${'mp4'}&title=${Math.floor(
												Math.random() * 100000000000
											)}`
										}
										locale={false}
									>	 */}
                  <a
                    href={`https://dl.saveinsta-cdn.workers.dev/api/download?type=.mp4&title=${Math.floor(
                      Math.random() * 100000000000,
                    )}&url=${encodeURIComponent(storyUrl.url.replaceAll("https://phosphor.ivanenko.workers.dev/?url=", ""))}`}
                    target="_blank"
                    download
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
                      Download
                    </button>
                  </a>
                  {/* </Link> */}
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  let facebookDisplay = () => {
    return (
      <>
        <div className="">
          {/* <img
                className="h-32 my-auto bg-gray-500 border-2 border-gray-200 rounded-lg dark:border-gray-700"
                // src={`api/dl?url=${encodeURIComponent(
                //   Data.media.display_url
                // )}&type=${"png"}&title=${Math.floor(
                //   Math.random() * 100000000000
                // )}`}

                src={Data.media.display_data}
              /> */}
          <video
            className="h-full m-auto bg-gray-500 border-2 border-gray-200 rounded-lg w-72 dark:border-gray-700 "
            // src={`/api/dl?url=${encodeURIComponent(
            // 	Data.data?.url
            // )}&type=${'mp4'}&title=${Math.floor(Math.random() * 100000000000)}`}
            src={`https://dl.saveinsta-cdn.workers.dev/api/download?type=.mp4&title=${Math.floor(
              Math.random() * 100000000000,
            )}&url=${encodeURIComponent(Data.data?.url.replaceAll("https://phosphor.ivanenko.workers.dev/?url=", ""))}`}
            controls
            onCanPlay={() => setLoading(false)}
          ></video>
          <div className="flex items-center justify-center h-auto m-auto ">
            {/* <h2 className="text-2xl font-semibold">{Data.title}</h2>
                <h3 className="font-semibold">{Data.description}</h3> */}
            {/* <Link
              href={
                SiteDetails.website +
                `/api/dl?url=${encodeURIComponent(
                  Data.data?.url
                )}&type=${"mp4"}&title=${Math.floor(
                  Math.random() * 100000000000
                )}`
              }
              locale={false}
            > */}
            {/* <Link
              href={`https://dl1.instavideosave.com/?url=${encodeURIComponent(
                Data.data?.url
              )}&type=mp4&dlheader=video/mp4&title=28206457756`}
            > */}
            <a href={Data.data?.url} download={Data.data?.url}>
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
                Download
              </button>
            </a>
            {/* </Link> */}
            {/* <Link
              href={`api/dl?url=${encodeURIComponent(
                Data.data?.url
              )}&type=${"mp4"}&title=${Math.floor(
                Math.random() * 100000000000
              )}`}
            >
              <button className="flex px-4 py-2 m-auto mt-2 ml-auto text-black bg-gray-300 rounded-lg dark:bg-gray-700 dark:text-white">
                <DownloadIcon className="w-6 h-6 mr-1" /> SD Quality
              </button>
            </Link> */}
          </div>
        </div>
        {/* <button
          onClick={() => {
            router.reload();
          }}
          className="flex w-full px-4 py-2 mt-4 bg-gray-100 border-2 border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-900"
        >
          <DownloadIcon className="w-6 h-6 mr-1" />
          <span className="mx-auto">Download another video</span>
        </button> */}
      </>
    );
  };

  // let instagramImageDisplay = () => {
  //   return Data.image != undefined && Data.image?.length != 0 ? (
  //     <>
  //       <div
  //         className="p-4 mt-4 text-center bg-gray-100 border-2 border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-900 //"
  //       >
  //         {Data.image.map((e, i) => {
  //           return (
  //             <div key={i}>
  //               <img
  //                 className="h-full m-auto my-auto bg-gray-500 border-2 border-gray-200 rounded-lg w-72 dark:border-gray-700"
  //                 src={`/api/dl?url=${encodeURIComponent(
  //                   e
  //                 )}&type=${"png"}&title=${Math.floor(
  //                   Math.random() * 100000000000
  //                 )}`}

  //               // src={e}
  //               />
  //               <div className="flex items-center justify-center h-auto m-auto ">
  //                 {/* <h2 className="text-2xl font-semibold">{Data.title}</h2>
  //               <h3 className="font-semibold">{Data.description}</h3> */}
  //                 <Link
  //                   href={
  //                     // SiteDetails.website +
  //                     `/api/dl?url=${encodeURIComponent(
  //                       e
  //                     )}&type=${"png"}&title=${Math.floor(
  //                       Math.random() * 100000000000
  //                     )}`
  //                   }
  //                   locale={false}
  //                 >
  //                   <button className="flex px-4 py-2 m-auto my-2 ml-auto text-white bg-blue-500 rounded-lg">
  //                     <DownloadIcon className="w-6 h-6 mr-1" /> Download Image
  //                   </button>
  //                 </Link>
  //               </div>
  //             </div>
  //           );
  //         })}

  //         {/* <video
  //               className="h-full m-auto bg-gray-500 border-2 border-gray-200 rounded-lg w-72 dark:border-gray-700 "
  //               src={`api/dl?url=${encodeURIComponent(
  //                 Data.data?.media?.video_url
  //               )}&type=${"mp4"}&title=${Math.floor(
  //                 Math.random() * 100000000000
  //               )}`}
  //               controls
  //             ></video> */}
  //       </div>
  //       {/* <button
  //         onClick={() => {
  //           window.location.reload();
  //         }}
  //         className="flex w-full px-4 py-2 mt-4 bg-gray-100 border-2 border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-900"
  //       >
  //         <DownloadIcon className="w-6 h-6 mr-1" />
  //         <span className="mx-auto">Download another Photo</span>
  //       </button> */}
  //     </>
  //   ) : (
  //     <></>
  //   );
  // };

  const render = (id: any) => {
    switch (id) {
      case "facebook":
        return facebookDisplay();
      case "instagram":
        return instagramVideoDisplay();
      case "stories":
        return storiesVideo();
      case "highlights":
        return storiesVideo();
      case "reels":
        return instagramVideoDisplay();
      case "photo":
        return instagramVideoDisplay();
      case "videos":
        return instagramVideoDisplay();
      default:
        return null;
    }
  };

  return (
    <div className="mt-4 text-center bg-gray-100 border-2 border-gray-200 rounded-lg dark:border-gray-700 dark:bg-gray-900">
      {loading ? (
        <div className="flex items-center justify-center gap-2 my-10">
          <svg
            className="w-8 h-8 text-black animate-spin"
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
      ) : null}
      {/* <div className={`${loading ? 'hidden' : 'block'}`}> */}
      {render(Data.type)}
      {/* </div> */}
    </div>
  );
};

export default Display;
