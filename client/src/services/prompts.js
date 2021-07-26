import api from './api-config'

export const getAllPrompts = async (categoryId) => {
  const resp = await api.get(`/categories/${categoryId}/prompts`)
  return resp.data
}

export const getOnePrompt = async (categoryId, promptId) => {
  const resp = await api.get(`/categories/${categoryId}/prompts/${promptId}`)
  return resp.data
}

export const createPrompt = async (categoryId, promptData) => {
  const resp = await api.post(`/categories/${categoryId}/prompts`, { prompt: promptData })
  return resp.data
}

export const updatePrompt = async (categoryId, promptId, promptData) => {
  const resp = await api.put(`/categories/${categoryId}/prompts/${promptId}`, { prompt: promptData })
  return resp.data
}

export const deletePrompt = async (categoryId, promptId) => {
  const resp = await api.delete(`/categories/${categoryId}/prompts/${promptId}`)
  return resp
}