import type { Photo } from '../types/photo'
import { apiInstance } from './instance'

export const getPhotos = async ({ query }: { query: string }) => {
  const res = await apiInstance.get<Photo[]>(
    `/photos/random?count=9&query=${query}`
  )
  return res.data
}

export const getPhotoById = async (id: string) => {
  const res = await apiInstance.get<Photo>(`/photos/${id}`)
  return res.data
}

export const downloadPhoto = async (id: string) => {
  const res = await apiInstance.get<{
    url: string
  }>(`/photos/${id}/download`)
  return res.data
}
