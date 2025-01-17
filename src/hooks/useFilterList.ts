import { SearchParamsType, WordPressPost } from '@/types/blog'
import { useFetchData } from '@/hooks/useFetchData'
import { defaultQueryParams } from '@/constants/queryParams'

export const useFilterList = (searchParams: SearchParamsType) => {
  const queryParams = {
    page: searchParams.page || defaultQueryParams.page,
    per_page: defaultQueryParams.per_page,
    orderby: searchParams.orderby || defaultQueryParams.orderby,
    order: searchParams.order || defaultQueryParams.order,
    categories: searchParams.categories || defaultQueryParams.categories
  }

  const params = new URLSearchParams(
    Object.entries(queryParams).filter(([, value]) => value)
  )

  const endpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT_WORDPRESS}/posts?${params}`
  const {
    data: posts,
    isLoading,
    headers
  } = useFetchData<WordPressPost[]>(endpoint)

  const total = headers?.get('X-WP-Total')
  const totalPages = headers?.get('X-WP-TotalPages')

  const pagination = {
    totalPosts: Number(total),
    totalPages: Number(totalPages),
    currentPage: Number(queryParams.page)
  }

  return { posts, pagination, isLoading }
}
