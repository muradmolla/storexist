export interface GoogleBooksResponse {
  kind: string
  totalItems: number
  items: GoogleBook[]
}

export interface GoogleBook {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: VolumeInfo
  saleInfo: SaleInfo
  accessInfo: AccessInfo
  searchInfo: SearchInfo
}
export interface VolumeInfo {
  title: string
  authors: string[]
  publisher: string
  publishedDate: string
  description: string
  industryIdentifiers: IndustryIdentifier[]
  readingModes: ReadingModes
  pageCount: number
  printType: string
  categories: string[]
  averageRating: number
  ratingsCount: number
  maturityRating: string
  allowAnonLogging: boolean
  contentVersion: string
  panelizationSummary: PanelizationSummary
  imageLinks: ImageLinks
}
export interface SaleInfo {
  country: string
  saleability: string
  isEbook: boolean
  listPrice?: { amount: number; currencyCode: string }
  retailPrice?: { amount: number; currencyCode: string }
}
export interface AccessInfo {
  country: string
  viewability: string
  embeddable: boolean
  publicDomain: boolean
  textToSpeechPermission: string
  epub: Epub
  pdf: Pdf
  webReaderLink: string
  accessViewStatus: string
  quoteSharingAllowed: boolean
}
export interface SearchInfo {
  textSnippet: string
}
export interface IndustryIdentifier {
  type: string
  identifier: string
}
export interface ReadingModes {
  text: boolean
  image: boolean
}
export interface PanelizationSummary {
  containsEpubBubbles: boolean
  containsImageBubbles: boolean
}
export interface ImageLinks {
  smallThumbnail: string
  thumbnail: string
}

export interface Epub {
  isAvailable: boolean
  acsTokenLink: string
}
export interface Pdf {
  isAvailable: boolean
  acsTokenLink: string
}
