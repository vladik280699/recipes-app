const baseApi = 'https://607ef8b502a23c0017e8c7e1.mockapi.io/api/v1'

const getData = async (url: string) => {
  const res = await fetch(url);
  return await res.json();
}

export const fetchRecipes = () => getData(`${baseApi}/recipes`)