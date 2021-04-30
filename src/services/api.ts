const baseApi = 'https://607ef8b502a23c0017e8c7e1.mockapi.io/api/v1'

export const fetchRecipes = () => ({
  url: `${baseApi}/recipes`,
  method: 'GET',
})

export const fetchCategories = () => ({
  url: `${baseApi}/categories`,
  method: 'GET',
})
