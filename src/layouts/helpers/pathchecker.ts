export const instagramUrlParser = (url: string) => {
    const urlSplit = url.split("/");
    const length = urlSplit.length;

    const last = urlSplit[length - 1];

    if (last[0] === "?" || last == "") return urlSplit[length - 2];

    return urlSplit[length - 1];
};

export const instagramUrlChecker = (url: string) => {
    const p = new RegExp("(https?://(?:www.)?instagram.com/([^/?#&]+)).*");

    if (url.match(p)) return true;

    return false;
};
export const facebookUrlChecker = (url: string) => {
    const p = new RegExp("(https?://(?:www.)?facebook.com/([^/?#&]+)).*");

    if (url.match(p)) return true;

    return false;
};
export const urlChecker = (url: string): boolean => {
    const p = new RegExp("(https?://(?:www.)?instagram.com/p/([^/?#&]+)).*");
    const tv = new RegExp("(https?://(?:www.)?instagram.com/tv/([^/?#&]+)).*");
    const reel = new RegExp(
        "(https?://(?:www.)?instagram.com/reel/([^/?#&]+)).*"
    );

    if (url.match(p) || url.match(tv) || url.match(reel)) return true;

    return false;
};