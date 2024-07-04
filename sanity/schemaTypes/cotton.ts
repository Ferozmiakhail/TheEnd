export default {
    name: 'cotton',
    title: 'Cotton',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      { 
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      { 
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        }
      },
      { 
        name: 'productcategory',
        title: 'Productcategory',
        type: 'string',
      },
      { 
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      { 
        name: 'Ldetails',
        title: 'Large Details',
        type: 'string',
      },
      { 
        name: 'Sdetails',
        title: 'Small Details',
        type: 'string',
      }
    ]
  }