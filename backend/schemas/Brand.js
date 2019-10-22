export default {
  name: "brand",
  title: "Brand",
  type: "document",
  fieldsets: [
    {
      name: "intro",
      title: "Intro Block",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "motivation",
      title: "Motivation Block",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "stats",
      title: "Stats Block",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "tiles",
      title: "Tiles Block",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "packages",
      title: "Packages",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "partners",
      title: "Partners Block",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "sponsors",
      title: "Sponsors Block",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "info",
      title: "General Information",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "main",
      title: "Main",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    // main
    {
      name: "brand",
      title: "Brand",
      type: "string",
      fieldset: "main",
    },
    {
      name: "theme",
      title: "Theme color",
      type: "color",
      fieldset: "main",
    },
    {
      name: "gradient1",
      title: "Gradient 1",
      type: "color",
      fieldset: "main",
    },
    {
      name: "gradient2",
      title: "Gradient 2",
      type: "color",
      fieldset: "main",
    },
    {
      name: "mainUrl",
      title: "Main site",
      type: "url",
      fieldset: "main",
    },
    {
      name: "sponsorsUrl",
      title: "Sponsorship url",
      type: "url",
      fieldset: "main",
    },
    // info
    {
      title: "Twitter",
      name: "twitterUrl",
      type: "url",
      description: "url",
      fieldset: "info",
    },
    {
      title: "Facebook",
      name: "facebookUrl",
      type: "url",
      description: "url",
      fieldset: "info",
    },
    {
      title: "Youtube",
      name: "youtubeUrl",
      type: "url",
      description: "url",
      fieldset: "info",
    },
    {
      title: "Medium",
      name: "mediumUrl",
      type: "url",
      description: "url",
      fieldset: "info",
    },
    {
      title: "Slack",
      name: "slackUrl",
      type: "url",
      description: "url",
      fieldset: "info",
    },
    {
      title: "Email",
      name: "email",
      type: "string",
      fieldset: "info",
    },
    {
      title: "Contact URL",
      name: "contactUrl",
      type: "url",
      fieldset: "info",
    },
    // intro
    {
      title: "Title",
      name: "introTitle",
      type: "string",
      fieldset: "intro",
    },
    {
      title: "Sub title",
      name: "introSubtitle",
      type: "string",
      fieldset: "intro",
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
      fieldset: "intro",
    },
    {
      title: "Background Image",
      name: "introBackground",
      type: "image",
      fieldset: "intro",
    },
    // motivation
    {
      title: "Features",
      name: "features",
      fieldset: "motivation",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "feature" }],
        },
      ],
    },
    // stats
    {
      title: "Stats Graphs",
      name: "stats",
      fieldset: "stats",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "graph" }],
        },
      ],
    },
    // tiles
    {
      title: "Animation Delay",
      name: "animDelay",
      type: "number",
      fieldset: "tiles",
    },
    {
      title: "Stats Tales",
      name: "tales",
      fieldset: "tiles",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "statTile" }],
        },
      ],
    },
    // packages
    {
      title: "Packages",
      name: "packages",
      fieldset: "packages",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "package" }],
        },
      ],
    },
    {
      title: "Slides",
      name: "packageSlides",
      fieldset: "packages",
      type: "array",
      of: [
        {
          type: "packageSlide",
        },
      ],
    },
    // partners
    {
      title: "Partners",
      name: "partnerSlides",
      fieldset: "partners",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "partnerSlide" }],
        },
      ],
    },
    // sponsors
    {
      title: "Sponsors",
      name: "sponsors",
      fieldset: "sponsors",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "sponsor" }],
        },
      ],
    },
    {
      title: "Youtube Video",
      name: "youtube",
      type: "url",
      fieldset: "sponsors",
    },
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage'
  //   },
  //   prepare(selection) {
  //     const {author} = selection
  //     return Object.assign({}, selection, {
  //       subtitle: author && `by ${author}`
  //     })
  //   }
  // }
};
