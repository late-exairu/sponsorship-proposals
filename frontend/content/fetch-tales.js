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

const fetchData = async(client, vars) => {
  const data = await client.request(queryPages, vars).then(res => res.data);

  return {
    tales: data.tales,
    animDelay: data.animDelay,
  };
};

module.exports = {
  fetchData,
};
