export interface Photo {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at: string | null
  width: number
  height: number
  color: string
  blur_hash: string
  description: string | null
  alt_description: string | undefined
  breadcrumbs: unknown[]
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    small_s3: string
    thumb: string
  }
  links: {
    self: string
    html: string
    download: string
    download_location: string
  }
  likes: number
  liked_by_user: boolean
  current_user_collections: unknown[]
  sponsorship: null
  topic_submissions: {
    people: {
      status: string
    }
  }
  asset_type: 'photo'
  alternative_slugs: {
    [locale: string]: string
  }
  user: {
    id: string
    username: string
    name: string
    first_name: string
    last_name?: string
    portfolio_url: string
    profile_image: {
      small: string
      medium: string
      large: string
    }
    links: {
      self: string
      html: string
      photos: string
      likes: string
      portfolio: string
    }
  }
}
