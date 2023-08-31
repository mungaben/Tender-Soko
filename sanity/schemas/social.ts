// social.ts is a new file that we will create in the same directory as company.ts.

import { defineField, defineType } from "sanity";

export default defineType({
  name: "social",
  title: "Social",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",

      type: "text",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    // url
    defineField({
      name: "url",
      title: "Url",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
    },
  },
});
