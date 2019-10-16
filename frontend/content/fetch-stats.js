const queryPages = /* GraphQL */ `
  query($brandId: ID!) {
    data: Brand(id: $brandId) {
      stats {
        title
        type
        data {
          rows {
            cells
          }
        }
      }
    }
  }
`;

const fetchData = async(client, vars) => {
  const data = await client
    .request(queryPages, vars)
    .then(res => res.data.stats);

  return {
    stats: data,
  };
};

module.exports = {
  fetchData,
};
