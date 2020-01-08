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
        featPrice
        featSoldout
        featLogo1
        featLogo2
        featJob
        featBooth
        featIdeas
        featHighlight
        featAnnouncement
        featTicketsNumber
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

const packageFeatures = [
  {
    title:
      'Logo placed on the conference website, introduction/mid-session slides and throughout venue',
    field: 'featLogo1',
    type: 'text',
  },
  {
    title: 'Logo placed on printed booklets, video recordings',
    field: 'featLogo2',
    type: 'text',
  },
  {
    title: 'Conference tickets',
    field: 'featTicketsNumber',
    type: 'text',
  },
  {
    title:
      'Sponsor announcement in social media channels<br/>(Twitter, Facebook, Medium)',
    field: 'featAnnouncement',
    type: 'check',
  },
  {
    title: 'Job announcement',
    field: 'featJob',
    type: 'check',
  },
  {
    title: 'Individual highlight in between the talks',
    field: 'featHighlight',
    type: 'check',
  },
  {
    title: 'Branded booth',
    field: 'featBooth',
    type: 'check',
  },
  {
    title: 'Special ideas on request',
    field: 'featIdeas',
    type: 'check',
  },
];

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
    packageFeatures,
  };
};

module.exports = {
  fetchData,
};
