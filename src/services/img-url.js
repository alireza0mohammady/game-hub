const getCropedImageUrl = (url) => {
  const target = "media/";
  const cut = url.indexOf(target) + target.length;

  return url.slice(0, cut) + "crop/600/400/" + url.slice(cut);
};

export default getCropedImageUrl;
