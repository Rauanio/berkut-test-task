import { getPhotos } from '@/shared/api/photos'
import { useDebouncedValue } from '@/shared/lib/react'
import { ROUTES } from '@/shared/model/routes'
import { Input } from '@/shared/ui/input'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { href, Link } from 'react-router-dom'

export const PhotosPage = () => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebouncedValue(query, 500)

  const { data, isPending, isError } = useQuery({
    queryKey: ['photos list', debouncedQuery],
    queryFn: () => getPhotos({ query: debouncedQuery }),
  })

  return (
    <>
      <div className="relative">
        <img
          className="w-full max-h-64 object-cover"
          src="/assets/bg.jpg"
          alt="bg"
        />
        <div className="absolute px-5 inset-0 flex items-center justify-center">
          <Input
            onChange={(e) => setQuery(e.target.value)}
            className=""
            type="text"
            placeholder="Поиск"
          />
        </div>
      </div>
      <div className="container mx-auto px-5 py-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {isError && <div>NOT FOUND !</div>}
        {!data && isPending ? (
          <>Loading...</>
        ) : (
          data?.map((photo) => (
            <Link key={photo.id} to={href(ROUTES.PHOTO, { photoId: photo.id })}>
              <img
                src={photo.urls.small}
                className="rounded-lg max-h-80 w-full object-cover"
                alt={photo.alt_description}
              />
            </Link>
          ))
        )}
      </div>
    </>
  )
}

export const Component = PhotosPage
