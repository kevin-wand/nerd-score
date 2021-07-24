import api from './api-config'

export const getAllPrompts = async () => {
  const resp = await api.get('/categories')
  return resp.data
}

export const getOnePrompt = async (id) => {
  const resp = await api.get(`/categories/${id}`)
  return resp.data
}

export const createPrompt = async (promptData) => {
  const resp = await api.post('/categories', { prompt: promptData })
  return resp.data
}

export const updatePrompt = async (id, promptData) => {
  const resp = await api.put(`/categories/${id}`, id, { prompt: promptData })
  return resp.data
}

export const deletePrompt = async (id) => {
  const resp = await api.delete(`/categories/${id}`)
  return resp
}