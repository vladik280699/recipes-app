export interface Recipe {
  recipeId: number
  categoryId: number
  title: string
  photo_url: string
  photosArray: string[]
  time: string
  ingredients: any[]
  description: string
}
