import 'react-router-dom'

export const ROUTES = {
  MAIN: '/',
  PHOTOS: '/photos',
  PHOTO: '/photos/:photoId',
  FAVORITE: 'favorite',
  NOT_FOUND: '*',
} as const

export type PathParams = {
  [ROUTES.PHOTO]: {
    photoId: string
  }
}

declare module 'react-router-dom' {
  interface Register {
    params: PathParams
  }
}
