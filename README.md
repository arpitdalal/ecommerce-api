# Demo E-commerce api
Demo api written in nodejs using express framework. It returns hard-coded Amazon products stored as array of objects.

## Features
- 3 endpoints:
  - /products - returns 10 products
  - /featured-products - returns 8 products
  - /best-sellers - returns 4 products
  - /error - simulates error response, returns error string
- Structure of the response:
  - Success:
    ```json
    {
      data: {
        products: [
          {
            id: number, // unique id
            name: string, // name of the product
            price: string, // price of the product
            description: string, // description of the product
            brand: string, // brand of the product
            image: string, // main image of the product
            link: string, // amazon link of the product
          },
          ...,
        ]
      },
      error: string // empty string if success
    }
    ```
  - Error:
    ```json
    {
      data: {
        products: null, // null products if error
      },
      error: string // error description as string
    }
    ```