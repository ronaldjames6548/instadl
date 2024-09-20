import type { APIRoute } from "astro";
import { getInstagramDataFb } from "@/helpers/config";

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
        error: "Invalid username.",
        code: "missing_url",
      }),
      { status: 422 },
    );
  }

  function ValidURL(str: string) {
    if (str.includes("instagram.com/")) {
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
        error: "Invalid username or valid url.",
        code: "invalid_url",
      }),
      { status: 422 },
    );
  }

  try {
    let url = [UrlApp];

    if (UrlApp.includes("/")) {
      url = UrlApp.split("/");
    }
    let i = 0;
    let type = "stories";
    let index = url.indexOf("highlights");
    if (index >= 0) {
      i = index + 1;
      type = "highlights";
    } else {
      index = url.indexOf("stories");
      if (index >= 0) {
        i = index + 1;
      } else {
        if (url.indexOf("instagram.com") >= 0) {
          i = url.indexOf("instagram.com") + 1;
        } else if (url.indexOf("www.instagram.com") >= 0) {
          i = url.indexOf("www.instagram.com") + 1;
        }
      }
    }

    // let index = url.indexOf("stories");

    // if (index >= 0) {
    //   i = index + 1;
    // } else {
    //   if (url.indexOf("instagram.com") >= 0) {
    //     i = url.indexOf("instagram.com") + 1;
    //   } else if (url.indexOf("www.instagram.com") >= 0) {
    //     i = url.indexOf("www.instagram.com") + 1;
    //   }
    // }

    let term = url[i];

    if (term.indexOf("?igshid") >= 0) {
      term = term.substring(0, term.indexOf("?igshid"));
    }

    return getInstagramDataFb(term, type)
      .then((data: { error: null; data: any; status?: any }) => {
        if (data.error == null || data.status === "ok") {
          return new Response(JSON.stringify({ ...data.data, type }), {
            status: 200,
          });
        } else {
          // Handle the case where data.error is not null
          return new Response(JSON.stringify({ error: data.error }), {
            status: 500,
          });
        }
      })
      .catch((err: any) => {
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
        error: "An error occurred while creating the request.",
        code: "request_error",
      }),
      { status: 500 },
    );
  }
};
