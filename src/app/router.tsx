import { createBrowserRouter, redirect } from 'react-router-dom'
import { ROUTES } from '../shared/model/routes'
import App from './App'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.PHOTOS,
        lazy: () => import('@/features/photos/photos.page'),
      },
      {
        path: ROUTES.PHOTO,
        lazy: () => import('@/features/photo/photo.page'),
      },
      {
        path: ROUTES.FAVORITE,
        lazy: () => import('@/features/favorite/favorite.page'),
      },
      {
        path: ROUTES.MAIN,
        loader: () => redirect(ROUTES.PHOTOS),
      },
    ],
  },
])
