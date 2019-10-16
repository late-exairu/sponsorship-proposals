const queryPages = /* GraphQL */ `
  query($brandId: ID!) {
    data: Brand(id: $brandId) {
      twitterUrl
      facebookUrl
      youtubeUrl
      mediumUrl
      slackUrl
      email
      contactUrl
      introTitle
      introSubtitle
      logo {
        asset {
          url
        }
      }
      introBackground {
        asset {
          url
        }
      }
    }
  }
`;

const fetchData = async(client, vars) => {
  const data = await client.request(queryPages, vars).then(res => res.data);

  return {
    info: data,
  };
};

module.exports = {
  fetchData,
};
