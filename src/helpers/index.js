export const variables = {
  HeaderHome: "HeaderHome",
  ListResorts: "ListResorts",
  RoomService: "Room Service",
  Spa: "Spa",
  Activities: "Activities",
  urlPaterns: ["services", "servicesWP", "dining"],
  urlPattern: "services",
  urlPatternAlt: "servicesWP",
  urlPatternServices: "dining",
};
export const getObjFromUrl = (data) => {
  let urls = getUrlPath();
  let initialConfig = {};
  if (urls.length === 0 && data) {
    return data;
  }
  let result = undefined;
  function foundObject(optionsParam) {
    let options = optionsParam.filter((opt) => opt !== undefined);
    let currentUrl = urls.shift();
    let founded = options.find(
      (opt) => opt.Url && opt.Url.toLowerCase() === currentUrl.toLowerCase()
    );
    result = founded;
    // console.log(result);
    if (result) {
      initialConfig = overrideConfig(initialConfig, result.Config);
      result.Config = initialConfig;
    }
    if (founded && founded.Options && urls.length > 0)
      foundObject(founded.Options);
    if (founded === undefined || (!founded.Options && urls.length > 0))
      result = undefined;
  }
  initialConfig = data.Config;
  foundObject(data.Options);
  return result;
};
export function getCurrentUrl() {
  // return window.location.pathname.split("/")[1];
  return "services"
}

export function getUrlPath() {
  let urls = window.location.pathname.split("/");
  let nUrls = urls.filter((url, id) => id > 1 && url !== "");
  return nUrls;
}
export function makeUrlToSection(link) {
  let returnLink = `/${getCurrentUrl()}/${link}`;
  if (getUrlPath().join("/") !== "") {
    returnLink = `/${getCurrentUrl()}/${getUrlPath().join("/")}/${link}`;
  }
  return returnLink;
}
export function getLastUlrPath() {
  let urlPath = window.location.pathname.split("/");
  urlPath = urlPath.filter((url, id) => url !== "");
  urlPath.pop();
  if (urlPath.length) return "/" + urlPath.join("/");
  else return null;
}

export function overrideConfig(first, second) {
  let newHeader = { ...first };
  Object.keys(first).forEach((option) => {
    if (second[option]) newHeader[option] = second[option];
  });
  if (second.Icon) newHeader.Icon = second.Icon;
  if (second.more) newHeader.more = second.more;
  return newHeader;
}
