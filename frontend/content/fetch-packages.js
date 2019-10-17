const { markdownToHtml } = require('./markdown');

const queryPages = /* GraphQL */ `
  query($brandId: ID!) {
    data: Brand(id: $brandId) {
      packages {
        title
        packageId
        blockImage {
          asset {
            url
          }
        }
        short
        tags
        price
        subtitle
        description
        markdown
        options
        rightImage {
          asset {
            url
          }
        }
        checklist {
          rows {
            cells
          }
        }
        addons {
          title
          details
          moreLink
          description
          image {
            asset {
              url
            }
          }
        }
      }
      packageSlides {
        image {
          asset {
            url
          }
        }
        caption
      }
    }
  }
`;

const fetchData = async(client, vars) => {
  const data = await client.request(queryPages, vars).then(res => res.data);

  const packages = data.packages.map(async pack => ({
    ...pack,
    description: await markdownToHtml(pack.markdown),
  }));

  return {
    packages,
    packageSlides: data.packageSlides,
  };
};

module.exports = {
  fetchData,
};
