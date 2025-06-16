import { downloadPhoto } from '@/shared/api/photos'
import { useMutation } from '@tanstack/react-query'

export const useDownlaod = () => {
  const { mutate, data, isPending } = useMutation({
    mutationKey: ['download'],
    mutationFn: downloadPhoto,
    onSuccess: (data) => {
      const link = document.createElement('a')
      link.href = data.url
      link.download = 'unsplash-image.jpg'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
  })

  return {
    mutate,
    data,
    isPending,
  }
}
