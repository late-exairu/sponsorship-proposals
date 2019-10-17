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

const Types = {
  columnCharts: 'columnCharts',
  circleCharts: 'circleCharts',
  rowCharts: 'rowCharts',
};

const fetchData = async(client, vars) => {
  const data = await client
    .request(queryPages, vars)
    .then(res => res.data.stats);

  const stats = data.map((graph, ind) => ({
    ...graph,
    tabId: `tab${ind + 1}`,
    tabTitle: graph.title,
    checked: !ind,
    data: graph.data.rows.map(({cells: [title, percent]}) => ({ percent, title })),
  }));

  return {
    stats,
  };
};

module.exports = {
  fetchData,
};
