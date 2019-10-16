export default {
  name: "feature",
  title: "Feature",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
    },
  ],
};
