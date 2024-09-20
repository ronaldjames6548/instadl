import type { APIRoute } from "astro";
import { getInstagramReel } from "@/helpers/config";

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
    if (str.includes('https://www.instagram.com/reel/')) {
      return false;
    } else {
      if (str.split(' ').length == 1 && !str.includes('/')) {
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
    const url = UrlApp.split('/');
    const data = await getInstagramReel(url[url.indexOf('reel') + 1]);

    if (data.error == null) {
      return new Response(JSON.stringify(data.data), { status: 200 });
    } else {
      return new Response(
        JSON.stringify({ error: "Error fetching Instagram reel." }),
        { status: 500 },
      );
    }
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