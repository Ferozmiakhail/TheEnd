export default {
    name: 'product',
    title: 'Product',
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
        name: 'imageC',
        title: 'ImageC',
        type: 'array',
        of: [{ type: 'image' }],
        options: {
          hotspot: true,
        }
      },
      {
        name: 'stringC',
        title: 'StringC',
        type: 'array',
        of: [{ type: 'string' }],
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
        name: 'price13',
        title: 'Price13',
        type: 'number',
      },
      { 
        name: 'price14',
        title: 'Price14',
        type: 'number',
      },
      { 
        name: 'price15',
        title: 'Price15',
        type: 'number',
      },
      { 
        name: 'price2',
        title: 'Price2',
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
      },
      { 
        name: 'datapay',
        title: 'datapay',
        type: 'string',
      }
    ]
  }
  
