export default {
    title: 'Hero',
    name: 'homeHero',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            title: 'Heading',
            name: 'heading',
            type: 'string',
        },
        {
            title: 'Sub Heading',
            name: 'subHeading',
            type: 'string',
        },
        {
            title: 'Link',
            name: 'link',
            type: 'slug'
        },
        {
            title: 'Button Label',
            name: 'buttonLabel',
            type: 'string'
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        }
    ]
}