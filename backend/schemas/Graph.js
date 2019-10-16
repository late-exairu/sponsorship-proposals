export default {
  name: "graph",
  title: "Graph",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "type",
      title: "Type (Enum)",
      type: "string",
      description: "One of: columnCharts, circleCharts, rowCharts"
    },
    {
      name: "data",
      title: "Date",
      type: "table",
    },
  ],
};
