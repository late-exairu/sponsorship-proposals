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
  const data = await client.request(queryPages, vars).then(res => res.data);

  const sponsors = [
    {
      title: '',
      mod: 'sponsors-block_lg',
      list: data.sponsors,
    },
  ];
  return {
    sponsors,
    youtubeVideo: data.youtube,
  };
};

module.exports = {
  fetchData,
};
