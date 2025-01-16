import Link from 'next/link'
import '@/components/Blog/Pagination/index.css'
interface BlogPaginationProps {
  totalPages: number
  currentPage: number
  createQueryString: (params: Record<string, string>) => string
}

const BlogPagination = ({
  totalPages,
  currentPage,
  createQueryString
}: BlogPaginationProps) => {
  return (
    <div className='blog-pagination'>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`/blog?${createQueryString({ page: page.toString() })}`}
          className={`blog-pagination__link ${
            page === currentPage ? 'active' : ''
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  )
}

export default BlogPagination
