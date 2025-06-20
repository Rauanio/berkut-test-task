import { useFavoritesStore } from './use-favorite-store'
import type { Photo } from '@/shared/types/photo'

export const FavoriteButton = ({ photo }: { photo: Photo }) => {
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite)
  const isFavorite = useFavoritesStore((state) => state.isFavorite(photo?.id))

  return (
    <button
      onClick={() => toggleFavorite(photo)}
      className="bg-white p-2.5 rounded-lg shadow cursor-pointer"
    >
      <svg
        width="25"
        height="23"
        viewBox="0 0 25 23"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.4896 0C15.7166 0 13.4262 2.57568 12.5 3.79131C11.5738 2.57568 9.28345 0 6.5104 0C2.92056 0 0 3.30049 0 7.35679C0 9.56982 0.878418 11.6323 2.41597 13.0437C2.43833 13.0824 2.46582 13.118 2.49785 13.15L12.1323 22.7646C12.234 22.8658 12.3667 22.9167 12.5 22.9167C12.6333 22.9167 12.7665 22.8658 12.8683 22.7641L22.8231 12.8128L22.9258 12.7131C23.0072 12.6363 23.0876 12.5585 23.1776 12.4588C23.2152 12.4217 23.2462 12.38 23.2702 12.3347C24.3866 10.9675 25 9.2041 25 7.35679C25 3.30049 22.0795 0 18.4896 0Z"
          fill={isFavorite ? '#FFF200' : 'none'}
          stroke={isFavorite ? 'none' : 'black'}
        />
      </svg>
    </button>
  )
}
