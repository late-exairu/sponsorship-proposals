export default {
  name: "package",
  title: "Package",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "packageId",
      title: "Package ID",
      type: "string",
      description: "unique id",
    },
    {
      name: "blockImage",
      title: "Block Image",
      type: "image",
    },
    {
      name: "short",
      title: "Short Description",
      type: "string",
    },
    {
      name: "tags",
      title: "Tags",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "markdown",
      title: "Description Markdown",
      type: "text",
    },
    {
      name: "options",
      title: "Options",
      type: "string",
    },
    {
      name: "rightImage",
      title: "Right Image",
      type: "image",
    },
    {
      name: "checklist",
      title: "Check List",
      type: "table",
      description: "Left column for title, Right fill with `+` for checked",
    },
    {
      name: "addons",
      title: "Addons",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "addon" }],
        },
      ],
    }

    // {
    //   name: "description",
    //   title: "Description",
    //   type: "array",
    //   of: [{ type: "text" }],
    // },
    // {
    //   name: "icon",
    //   title: "Icon",
    //   type: "image",
    // },
  ],
};
