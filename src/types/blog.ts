// The code for this file was generated by AI

export interface WordPressPost {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  date: string
  slug: string
  featured_media: number
}

export interface Post {
  id: number
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  date: string
  slug: string
  featured_media: number
  featured_image?: {
    url: string
    alt: string
  }
}