import { SiteDetails } from "setup";
import { urlChecker } from "./pathchecker";

// dotenv.config();
// const PORT = process.env.PORT || 3001;
// export const config = {
//     server: {
//         port: PORT
//     }
// }

// const getMediaInfo = async shortcode => {
// 	const options = {
// 		method: 'GET',
// 		url:
// 			'https://instagram-bulk-scraper-latest.p.rapidapi.com/webmedia_info_from_shortcode/' +
// 			shortcode,
// 		headers: {
// 			'X-RapidAPI-Key': SiteDetails['X-RapidAPI-Key'],
// 			'X-RapidAPI-Host': 'instagram-bulk-scraper-latest.p.rapidapi.com',
// 		},
// 	}
// 	const response = await axios.request(options)
// 	return response.data
// }

export const getInstagramDataFb = async (url: string, type: string) => {
  if (type === "highlights") {
    const response = await fetch(
      `https://instagram-bulk-scraper-latest.p.rapidapi.com/download_highlights/${url}?nocors=true`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": SiteDetails["X-RapidAPI-Key"],
          "X-RapidAPI-Host": "instagram-bulk-scraper-latest.p.rapidapi.com",
        },
      },
    );
    return response.json();
  } else {
    const response = await fetch(
      `https://instagram-bulk-scraper-latest.p.rapidapi.com/download_story/${url}?nocors=true`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": SiteDetails["X-RapidAPI-Key"],
          "X-RapidAPI-Host": "instagram-bulk-scraper-latest.p.rapidapi.com",
        },
      },
    );
    return response.json();
  }
};

export const getInstagramDP = async (url: string) => {
  const response = await fetch(
    `https://instagram-bulk-scraper-latest.p.rapidapi.com/download_profile/${url}?nocors=true`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": SiteDetails["X-RapidAPI-Key"],
        "X-RapidAPI-Host": "instagram-bulk-scraper-latest.p.rapidapi.com",
      },
    },
  );
  return response.json();
};

export const getInstagramPost = async (url: string) => {
  const response = await fetch(
    `https://instagram-bulk-scraper-latest.p.rapidapi.com/media_download_by_shortcode/${url}?nocors=true`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": SiteDetails["X-RapidAPI-Key"],
        "X-RapidAPI-Host": "instagram-bulk-scraper-latest.p.rapidapi.com",
      },
    },
  );
  return response.json();
};
export const getInstagramHighlight = async (url: string) => {
  const response = await fetch(
    `https://instagram-bulk-scraper-latest.p.rapidapi.com/download_highlights/${url}?nocors=true`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": SiteDetails["X-RapidAPI-Key"],
        "X-RapidAPI-Host": "instagram-bulk-scraper-latest.p.rapidapi.com",
      },
    },
  );
  return response.json();
};

export const getInstagramReel = async (url: string) => {
  const response = await fetch(
    `https://instagram-bulk-scraper-latest.p.rapidapi.com/media_download_by_shortcode/${url}?nocors=true`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": SiteDetails["X-RapidAPI-Key"],
        "X-RapidAPI-Host": "instagram-bulk-scraper-latest.p.rapidapi.com",
      },
    },
  );
  return response.json();
};

export const getInstagramAudio = async (url: string) => {
  const response = await fetch(
    `https://instagram-bulk-scraper-latest.p.rapidapi.com/download_audio/${url}?nocors=true`,
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": SiteDetails["X-RapidAPI-Key"],
        "X-RapidAPI-Host": "instagram-bulk-scraper-latest.p.rapidapi.com",
      },
    },
  );
  return response.json();
};
