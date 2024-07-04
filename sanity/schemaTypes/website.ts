export default {
    name: 'website',
    title: 'Website',
    type: 'document',
    fields: [
      {
        name: 'logoimg',
        title: 'LogoImage',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
    ]
  }