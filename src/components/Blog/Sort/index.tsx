import '@/components/Blog/Sort/index.css'

interface BlogSortProps {
  searchParams: {
    orderby?: string
    order?: string
  }
  onSort: (orderby: string) => void
}

const BlogSort = ({ searchParams, onSort }: BlogSortProps) => {
  return (
    <div className='blog-sort'>
      <button onClick={() => onSort('date')}>
        By Date{' '}
        {searchParams.orderby === 'date' &&
          (searchParams.order === 'desc' ? '↓' : '↑')}
      </button>
      <button onClick={() => onSort('title')}>
        By Title{' '}
        {searchParams.orderby === 'title' &&
          (searchParams.order === 'desc' ? '↓' : '↑')}
      </button>
    </div>
  )
}

export default BlogSort
