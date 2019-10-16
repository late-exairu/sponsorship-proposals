const queryPages = /* GraphQL */ `
  query($brandId: ID!) {
    data: Brand(id: $brandId) {
      sponsors {
        image {
          asset {
            url
          }
        }
        name
        link
        width
      }
      youtube
    }
  }
`;

const fetchData = async(client, vars) => {
  const data = await client
    .request(queryPages, vars)
    .then(res => res.data);

  return {
    sponsors: data.sponsors,
    youtubeVideo: data.youtube,
  };
};

module.exports = {
  fetchData,
};
