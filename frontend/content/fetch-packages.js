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

  const packages = data.packages.map(async(pack, ind) => ({
    ...pack,
    description: await markdownToHtml(pack.markdown),
    animDelay: 100 + ind * 100,
    checklist:
      pack.checklist &&
      pack.checklist.rows
        .filter(({ cells: [title, check] }) => title !== '-' && check !== '-')
        .map(({ cells: [title, check] }) => ({
          title,
          checked: !!check ? 'yes' : 'no',
        })),
  }));

  return {
    packages,
    packageSlides: data.packageSlides,
    packegeTabs: [
      {
        tabId: 'pckjtab1',
        tabTitle: 'asd',
        checked: true,
      },
      {
        tabId: 'pckjtab2',
        tabTitle: 'fasf',
      },
    ],
  };
};

module.exports = {
  fetchData,
};
