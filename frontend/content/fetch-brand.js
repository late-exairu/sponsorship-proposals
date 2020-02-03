const queryPages = /* GraphQL */ `
  query($brandId: ID!) {
    data: Brand(id: $brandId) {
      _id
      _rev
      _key
      _type
      brand
      theme {
        hex
      }
      themeD {
        hex
      }
      introOverlay {
        hex
      }
      introOverlayText {
        hex
      }
      gradient1 {
        hex
      }
      gradient2 {
        hex
      }
      mainUrl
      sponsorsUrl
    }
  }
`;

const fetchData = async(client, vars) => {
  const data = await client.request(queryPages, vars).then(res => res.data);

  return {
    main: data,
  };
};

module.exports = {
  fetchData,
};
