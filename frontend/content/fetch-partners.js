const queryPages = /* GraphQL */ `
  query($brandId: ID!) {
    data: Brand(id: $brandId) {
      partners: partnerSlides {
        image {
          asset {
            url
          }
        }
        name
        job
        text
      }
    }
  }
`;

const fetchData = async(client, vars) => {
  const data = await client
    .request(queryPages, vars)
    .then(res => res.data.partners);

  return {
    partners: data,
  };
};

module.exports = {
  fetchData,
};
