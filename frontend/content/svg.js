const axios = require('axios');

const getSvg = async image => {
  const url = image && image.asset && image.asset.url;
  if (!url) return null;
  const svg = await axios.get(url).then(resp => resp.data);
  return svg;
};

module.exports = {
  getSvg,
};
