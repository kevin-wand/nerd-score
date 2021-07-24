import api from './api-config'

export const getAllCategories = async () => {
  const resp = await api.get('/categories')
  return resp.data
}

export const getOneCategory = async (id) => {
  const resp = await api.get(`/categories/${id}`)
  return resp.data  
}