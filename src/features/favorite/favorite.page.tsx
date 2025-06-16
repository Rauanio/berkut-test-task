import { useFavoritesStore } from './use-favorite-store'

export const FavoritePage = () => {
  const favorites = useFavoritesStore((state) => state.favorites)

  return (
    <div className="container mx-auto px-5">
      <h2 className="text-center text-4xl font-bold pt-10 pb-14">Избранное</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {favorites.map((photo) => (
          <img
            src={photo.urls.regular}
            className="rounded-lg max-h-80 w-full object-cover"
          />
        ))}
      </div>
    </div>
  )
}

export const Component = FavoritePage
