export default {
    title: 'Services',
    name: 'services',
    type: 'document',
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string'
        },
        {
            title: 'URL',
            name: 'slug',
            type: 'slug',
            description: 'We recommend clicking generate. Changing URL may cause broken pages',
            options: {
              source: "title",
              slugify: (input) =>
              input.toLowerCase()
              .replace(/\s+/g, "-").slice(0, 200)
              //Remove special characters
              .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ""),
            validation: (Rule) => Rule.required(),
            },
        },
        {
            title: 'SVG Icon',
            name: 'svgIcon',
            type: 'text',
            description: 'Visit reshot.com and paste in the svg code you want'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'blockContent'
        },
        {
            title: 'Search Engine Optimization',
            name: 'seo',
            type: 'seo',
            validation: Rule => Rule.required().error('Required for search engines')
        }
    ]
}