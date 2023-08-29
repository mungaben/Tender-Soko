



import { defineType, defineField } from 'sanity';


export default defineType({
    name: 'subscribe',
    title: 'Subscribe',
    type: 'document',
    fields: [
        defineField({
            name: 'CardTitle',
            title: 'Card Title',
            type: 'string',
        }),
        defineField({
            name: 'CardAmount',
            title: 'Card Amount',
            type: 'string',
        }),
        defineField({
            name: 'CardDescription',
            title: 'Card Description',
            type: 'text',
        }),
        defineField({
            name: 'CardButton',
            title: 'Card Button',
            type: 'string',
        }),
        defineField({
            name: 'CardButtonLink',
            title: 'Card Button Link',
            type: 'string',
        }),


        defineField({
            name: 'CardTitle2',
            title: 'Card Title 2',
            type: 'string',
        }),
        
    ],
        // preview
        preview: {
            select: {
                title: 'CardTitle',
                subtitle: 'CardAmount',
            },
        },
});



