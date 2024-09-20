import type { APIRoute } from "astro";
import { SiteDetails } from "setup";

export const POST: APIRoute = async ({ request }) => {
  function urlcheckDecider(urld: string) {
    if (
      urld.includes("facebook.com") ||
      urld.includes("fb.watch") ||
      urld.includes("https://www.facebook.com")
    ) {
      return "facebook";
    } else if (urld.includes("instagram.com")) {
      return "instagram";
    }
  }

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

  if (!body.url) {
    return new Response(
      JSON.stringify({
        error: "Missing video/Photo/Fb url.",
        code: "missing_url",
      }),
      { status: 422 },
    );
  }

  let urlObj;

  try {
    urlObj = new URL(body.url);
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Invalid url.",
        code: "invalid_url",
      }),
      { status: 422 },
    );
  }

  const newUrl = urlObj.toString();
  let resData: any;

  try {
    switch (urlcheckDecider(newUrl)) {
      case "facebook":
        let res = await fetch(SiteDetails.website + "/api/fb", {
          method: "POST",
          body: JSON.stringify({ url: newUrl }),
          headers: { "Content-Type": "application/json" },
        });
        resData = {
          type: "facebook",
          data: await res.json(),
        };
        break;
      case "instagram":
        if (newUrl.includes("stories")) {
          let resi = await fetch(SiteDetails.website + "/api/stories", {
            method: "POST",
            body: JSON.stringify({ url: newUrl }),
            headers: { "Content-Type": "application/json" },
          });
          resData = {
            type: "stories",
            data: await resi.json(),
          };
        } else {
          let resi = await fetch(SiteDetails.website + "/api/insta", {
            method: "POST",
            body: JSON.stringify({ url: newUrl }),
            headers: { "Content-Type": "application/json" },
          });

          resData = {
            type: "instagram",
            data: await resi.json(),
          };
        }

        break;

      default:
        break;
    }
    return new Response(
      JSON.stringify(
        resData.type == "facebook"
          ? resData
          : resData.type == "stories"
          ? resData
          : resData
      ),
      { status: 200 },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Invalid url.",
        code: error,
      }),
      { status: 422 },
    );
  }
};
