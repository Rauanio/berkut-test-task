import { ROUTES } from '@/shared/model/routes'
import { Link, useLocation } from 'react-router-dom'

export const Header = () => {
  const location = useLocation()

  return (
    <header className="bg-black shadow-sm py-6 px-5 ">
      <div className="container mx-auto flex items-center justify-between">
        <img src="/src/shared/assets/logo.svg" alt="logo" />
        <div className="flex items-center gap-5 xl:gap-9">
          {location.pathname !== ROUTES.PHOTOS && (
            <Link to={ROUTES.PHOTOS} className="flex items-center gap-2.5">
              <img src="/src/shared/assets/search.svg" alt="search" />
              <span className="text-white text-lg hidden xl:inline">Поиск</span>
            </Link>
          )}
          <Link to={ROUTES.FAVORITE} className="flex items-center gap-2.5">
            <img src="/src/shared/assets/heart.svg" alt="favorite" />
            <span className="text-white text-lg hidden xl:inline">
              Избранное
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
