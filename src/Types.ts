export type Products =  {
    products: Product[]
    total: number,
    skip: number,
    limit: number
}
export type Product = {
    "id": number,
    "title": string,
    "description": string,
    "category": string,
    "discountPercentage": number,
    "rating": number,
    "stock": number,
      "tags": string[],
      "brand": string,
      "sku": string,
      "weight": number,
      "dimensions": {
        "width": number,
        "height": number,
        "depth": number
      },
      "warrantyInformation": string,
      "shippingInformation": string,
      "availabilityStatus": string,
      "reviews": ReviewInfo[],
      "returnPolicy": string,
      "minimumOrderQuantity": number,
      "meta": MetaInfo,
      "images": string[],
      "thumbnail": string
    
}
type ReviewInfo = {
    "rating": number,
    "comment": string,
    "date": string,
    "reviewerName": string,
    "reviewerEmail": Email
}
type Email = `${string}@${string}.com`; 
type MetaInfo = {
    "createdAt": string,
    "updatedAt": string,
    "barcode": string,
    "qrCode": string
}

export type ProductsState = {
  data: Products | null,
  loading: boolean,
  error: string | null
}
export type Basket {
  basket: Product[] | []
}