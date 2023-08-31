





// company schema


import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'company',
    title: 'Company',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',

            type: 'text',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {

                source: 'title',
            },
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options:{
                hotspot:true,
            }


        }),
        defineField({
            name: 'website',
            title: 'Website',
            type: 'url',



        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'email',

        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',

        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'string',

        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{type: 'category'}],
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'string'}],
        }),
        defineField({
            name: 'social',
            title: 'Social',
            type: 'array',
            of: [
              {
                type: 'social',
              },
            ],
          }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [{type: 'image',
         options:{
                hotspot:true,
                required:false,
         }
        }],
        }),




    ],
    preview:{
        select:{
            title:'title',
            slug:'slug.current'
        }
    }
})


      

