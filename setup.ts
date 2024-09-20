//! enter your site details here

let SiteDetails = {
  googleAnalytic: "G-11DL416RWD",
  title: "SaveInsta.li",
  description: "Saveinsta is Instagram Downloader, Download Instagram Video, Reels, Photo, Stories. Instagram photo download IGTV Online Downloader, download Instagram story to save from Instagram.",
  website:
    process.env.NODE_ENV == "production"
      ? "https://saveinsta.li"
      : "http://localhost:3000",
  website_name: "SaveInsta",
  "google-site-verification": "1EYzh8uUymXYuPQYcNzlJha4gIizu_EXG2wirUeoo6w",
  domain_extension: "org",
  email: "contact@saveinsta.li",
  "X-RapidAPI-Key": "b14a3bc435mshe0fb0c7813d1000p1408dbjsn7e8322feff92",
};


export { SiteDetails };
