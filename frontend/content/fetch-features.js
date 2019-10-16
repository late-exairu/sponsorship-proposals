const { getSvg } = require('./svg');

const queryPages = /* GraphQL */ `
  query($brandId: ID!) {
    data: Brand(id: $brandId) {
      features {
        title
        description
        icon {
          asset {
            url
          }
        }
      }
    }
  }
`;

const fetchData = async(client, vars) => {
  const data = await client
    .request(queryPages, vars)
    .then(res => res.data.features);

  const features = data.map(async(feature, ind) => ({
    ...feature,
    svg: await getSvg(feature.icon),
    animation: 'fade-up',
    animDelay: 200 + ind * 100,
    iconClass: `feature_${ind + 1}`,
  }));

  return {
    features,
  };
};

module.exports = {
  fetchData,
};
