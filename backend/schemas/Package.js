export default {
  name: "package",
  title: "Package",
  type: "document",
  fieldsets: [
    {
      name: "details",
      title: "Package Description",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "features",
      title: "Package Includes",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "details",
    },
    {
      name: "packageId",
      title: "Package ID",
      type: "string",
      description: "unique id",
      fieldset: "details",
    },
    {
      name: "blockImage",
      title: "Block Image",
      type: "image",
      fieldset: "details",
    },
    {
      name: "short",
      title: "Short Description",
      type: "string",
      fieldset: "details",
    },
    {
      name: "tags",
      title: "Tags",
      type: "string",
      fieldset: "details",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
      fieldset: "details",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      fieldset: "details",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      fieldset: "details",
    },
    {
      name: "markdown",
      title: "Description Markdown",
      type: "text",
      fieldset: "details",
    },
    {
      name: "options",
      title: "Options",
      type: "string",
      fieldset: "details",
    },
    {
      name: "rightImage",
      title: "Right Image",
      type: "image",
      fieldset: "details",
    },
    {
      name: "checklist",
      title: "Check List",
      type: "table",
      description: "Left column for title, Right fill with `+` for checked",
      fieldset: "details",
    },
    {
      name: "addons",
      title: "Addons",
      type: "array",
      fieldset: "details",
      of: [
        {
          type: "reference",
          to: [{ type: "addon" }],
        },
      ],
    },
    // Features
    {
      name: "hideInTable",
      title: "Don't show this package in table",
      type: "boolean",
      fieldset: "features",
    },
    {
      name: "featSoldout",
      title: "Sold Out",
      type: "boolean",
      fieldset: "features",
    },
    {
      name: "featPrice",
      title: "Full Price",
      type: "string",
      fieldset: "features",
    },
    {
      name: "featLogo1",
      title:
        "Logo placed on the conference website, introduction/mid-session slides and throughout venue",
      type: "string",
      fieldset: "features",
    },
    {
      name: "featLogo2",
      title: "Logo placed on printed booklets, video recordings",
      type: "string",
      fieldset: "features",
    },
    {
      name: "featTicketsNumber",
      title: "Conference tickets",
      type: "string",
      fieldset: "features",
    },
    {
      name: "featAnnouncement",
      title:
        "Sponsor announcement in social media channels (Twitter, Facebook, Medium",
      type: "boolean",
      fieldset: "features",
    },
    {
      name: "featJob",
      title: "Job announcement",
      type: "boolean",
      fieldset: "features",
    },
    {
      name: "featHighlight",
      title: "Individual highlight in between the talks",
      type: "boolean",
      fieldset: "features",
    },
    {
      name: "featBooth",
      title: "Branded booth",
      type: "boolean",
      fieldset: "features",
    },
    {
      name: "featIdeas",
      title: "Special ideas on request",
      type: "boolean",
      fieldset: "features",
    },

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
