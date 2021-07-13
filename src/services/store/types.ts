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
  ingredients: [number, string]
  description: string
}

export interface Category {
  id: number
  name: string
  photo_url: string
}

export interface Ingredient {
  ingredientId: number
  name: string
  photo_url: string
  dose?: string
}
