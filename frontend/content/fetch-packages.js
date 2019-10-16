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

  return {
    packages: data.packages,
    packageSlides: data.packageSlides,
  };
};

module.exports = {
  fetchData,
};
