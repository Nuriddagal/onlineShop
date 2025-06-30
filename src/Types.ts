import type { Dispatch, SetStateAction } from "react"
import type { NavigateFunction } from "react-router-dom"
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
    "price": number,
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
export type ReviewInfo = {
    "rating": number,
    "comment": string,
    "date": string,
    "reviewerName": string,
    "reviewerEmail": Email
}
export type SvgStyle = {
    fill?: string
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
export type Basket ={
  basket: Product[] | [],
  counts: Counts
}
export type CardState = {
    product: Product,
    addTo: (product: Product) => void,
    removeFrom?: (product: Product) => void,
    deleteFrom?: (product: Product) => void,
    counts?: Counts
    setShowModal?: Dispatch<SetStateAction<boolean>>,
} 
export type Counts = {
   [key: string]: number,
   totalCount: number,
   totalPrice: number
}
export type BasketState = {
    basket: Product[],
    addTo: (product: Product) => void,
    removeFrom: (product: Product) => void,
    deleteFrom: (product: Product) => void,
    counts: Counts
} 
export type AppRouteProps = {
  productPage: ProductPageProps,
  basketState: BasketState,
  dashboard: CardState,
  dashboardId: number,
}

export type ProductPageProps = {
  visibleProducts: number,
  products: Product[],
  chosenFilter: string[],
  loadMoreRef: React.RefObject<HTMLDivElement | null> ,
  addTo: (product: Product) => void,
  setDashboardId: Dispatch<SetStateAction<string>>
}
export type ModalProps = {
    overlayRef: React.RefObject<HTMLDivElement | null>,
    modalRef: React.RefObject<HTMLDivElement | null>,
    setShowModal: Dispatch<SetStateAction<boolean>>
}
export type HeaderProps = {
  navigate: NavigateFunction,
  counts: Counts,
  setIsFilterOpen: Dispatch<SetStateAction<boolean>>
}
export type CategoryProps = {
    category: string,
    prefix: string
}
export type FilterProps = { 
  categorys: string[],
  chosenFilter: string[],
  isFilterOpen: boolean,
  setChosenFilter: Dispatch<SetStateAction<string[]>>
}