import type { APIRoute } from "astro";

import { getInstagramAudio, getInstagramReel } from "@/helpers/config";

export const POST: APIRoute = async ({ request }) => {
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({
        error: "Method not allowed.",
        code: "method_not_allowed",
      }),
      { status: 405 },
    );
  }

  const body = await request.json();
  let UrlApp = body.url;

  if (!UrlApp) {
    return new Response(
      JSON.stringify({
        error: "Invalid  URL.",
        code: "missing_url",
      }),
      { status: 422 },
    );
  }

  function ValidURL(str: string) {
    if (
      str.includes("https://www.instagram.com/reel/") ||
      str.includes("https://www.instagram.com/p/")
    ) {
      return false;
    } else {
      if (str.split(" ").length == 1 && !str.includes("/")) {
        UrlApp = str;
        return false;
      } else {
        return true;
      }
    }
  }

  if (ValidURL(UrlApp)) {
    return new Response(
      JSON.stringify({
        error: "Invalid url.",
        code: "invalid_url",
      }),
      { status: 422 },
    );
  }

  try {
    const url = UrlApp.split("/");
    let index;

    if (url.indexOf("reel") >= 0) index = url.indexOf("reel") + 1;
    else if (url.indexOf("p") >= 0) index = url.indexOf("p") + 1;
    else
      return new Response(
        JSON.stringify({
          error: "Invalid url.",
          code: "invalid_url",
        }),
        { status: 422 },
      );

    return getInstagramAudio(url[index])
      .then((data) => {
        if (data.error == null) {
          return new Response(JSON.stringify(data.data), { status: 200 });
        } else {
          // Return a response when there's an error
          return new Response(
            JSON.stringify({
              error: "An error occurred while processing the data.",
              code: "data_processing_error",
            }),
            { status: 500 },
          );
        }
      })
      .catch((err) => {
        return new Response(
          JSON.stringify({
            error: "An error occurred while creating the request.",
            code: "request_error",
          }),
          { status: 500 },
        );
      });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "An error occured while creating the request.",
        code: "request_error",
      }),
      { status: 500 },
    );
  }
};
