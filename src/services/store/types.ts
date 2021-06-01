export interface BaseMeta {
  operationUuid: string
}

export interface Recipe {
  id: string
  categoryId: number
  title: string
  photo_url: string
  photosArray: string[]
  time: string
  ingredients: any[]
  description: string
}

export interface Category {
  id: number
  name: string
  photo_url: string
}
