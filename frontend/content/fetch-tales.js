const queryPages = /* GraphQL */ `
  query($brandId: ID!) {
    data: Brand(id: $brandId) {
      animDelay
      tales {
        image {
          asset {
            url
          }
        }
        title
        value
      }
    }
  }
`;

const getUrl = image => image && image.asset && image.asset.url;

const fetchData = async(client, vars) => {
  const data = await client.request(queryPages, vars).then(res => res.data);

  const { animDelay } = data;

  const tales = data.tales.map(({ image, title, value }, ind) => ({
    title,
    nums: value,
    animDelay,
    img: getUrl(image),
    animation: !(ind % 2) ? 'fade-up' : 'fade-down',
  }));
  return {
    tileStats: tales,
    animDelay,
  };
};

module.exports = {
  fetchData,
};
