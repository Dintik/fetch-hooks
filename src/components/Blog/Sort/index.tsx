'use client'

// The code for this file was generated by AI
import { useRouter } from 'next/navigation'
import { SearchParamsType } from '@/types/blog'
import { useCreateQueryString } from '@/hooks/useCreateQueryString'
import '@/components/Blog/Sort/index.css'

interface BlogSortProps {
  orderby: SearchParamsType['orderby']
  order: SearchParamsType['order']
}

const BlogSort = ({ orderby, order }: BlogSortProps) => {
  const router = useRouter()
  const createQueryString = useCreateQueryString()

  const handleSort = (orderby: string) => {
    const newOrder = order === 'desc' ? 'asc' : 'desc'

    const queryString = createQueryString({
      orderby,
      order: newOrder
    })
    router.push(`/blog?${queryString}`)
  }

  return (
    <div className='blog-sort'>
      <button onClick={() => handleSort('date')}>
        By Date {orderby === 'date' && (order === 'desc' ? '↓' : '↑')}
      </button>
      <button onClick={() => handleSort('title')}>
        By Title {orderby === 'title' && (order === 'desc' ? '↓' : '↑')}
      </button>
    </div>
  )
}

export default BlogSort
