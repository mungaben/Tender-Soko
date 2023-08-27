





import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'tender',
    title: 'Tender',
    type: 'document',
    fields: [
        defineField({
            name: 'sponsored',
            title: 'Sponsored',
            type: 'boolean',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'object',
            fields: [
                defineField({
                    name: 'name',
                    title: 'Name',
                    type: 'string',
                }),
                defineField({
                    name: 'details',
                    title: 'Details',
                    type: 'text',
                }),
                defineField({
                    name: 'image',
                    title: 'Company Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative Text',
                        },
                    ],
                }),
            ],
        }),
        defineField({
            name: 'sector',
            title: 'Sector',
            type: 'string',
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'closingDate',
            title: 'Closing Date',
            type: 'datetime',
        }),
        defineField({
            name: 'referenceNumber',
            title: 'Reference Number',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
});
