import type { Photo } from '@/shared/types/photo'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type FavoritesStore = {
  favorites: Photo[]
  toggleFavorite: (photo: Photo) => void
  isFavorite: (id: string) => boolean
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (photo) => {
        const { favorites } = get()
        const isAlreadyFavorite = favorites.some((fav) => fav.id === photo.id)

        set({
          favorites: isAlreadyFavorite
            ? favorites.filter((fav) => fav.id !== photo.id)
            : [...favorites, photo],
        })
      },
      isFavorite: (id) => get().favorites.some((fav) => fav.id === id),
    }),
    {
      name: 'favorites-storage', // ключ в localStorage
      partialize: (state) => ({ favorites: state.favorites }), // сохраняем только избранное
    }
  )
)
