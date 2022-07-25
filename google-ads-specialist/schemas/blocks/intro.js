export default {
    title: 'Introduction',
    name: 'intro',
    type: 'object',
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            title: 'Content',
            name: 'content',
            type: 'blockContent',
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
        },
        {
            title: 'Image Alt Tag',
            name: 'image_alt',
            type: 'string',
        }
    ]
}