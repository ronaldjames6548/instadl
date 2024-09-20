import type { APIRoute } from "astro";
import { getInstagramDP } from "@/helpers/config";

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
  let url = body.url;

  if (!url) {
    return new Response(
      JSON.stringify({
        error: "Invalid username.",
        code: "missing_url",
      }),
      { status: 422 },
    );
  }

  async function options(urlData: string) {
    const data = await getInstagramDP(urlData);
    return data;
  }

  let resp;
  try {
    if (
      (url != undefined &&
        url != "" &&
        url.includes("https://www.instagram.com/")) ||
      url.includes("https://instagram.com/")
    ) {
      if (url.includes("?")) {
        let username = url.split("?")[0].split("/")[3];
        resp = await options(username);
      } else {
        resp = await options(url.split("/")[3]);
      }
    } else if (url != undefined && url != "") {
      resp = await options(url);
    } else {
      return new Response(
        JSON.stringify({
          error: "Invalid Username",
          code: 404,
        }),
        { status: 500 },
      );
    }
  } catch (err) {
    return new Response(
      JSON.stringify({
        error:
          "Invalid Username or else, an error occured while creating the request. please try again later.",
        code: 404,
      }),
      { status: 500 },
    );
  }

  if (resp.data == "NotFound") {
    return new Response(
      JSON.stringify({
        error: "Invalid Username",
        code: 500,
      }),
      { status: 422 },
    );
  }

  return new Response(JSON.stringify(resp.data), { status: 200 });
};
