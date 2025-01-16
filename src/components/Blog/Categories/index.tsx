import '@/components/Blog/Categories/index.css'

interface Category {
  id: number
  name: string
  count: number
}

interface BlogCategoriesProps {
  categories: Category[]
  selectedCategories: string[]
  onCategoryClick: (categoryId: number) => void
}

const BlogCategories = ({
  categories,
  selectedCategories,
  onCategoryClick
}: BlogCategoriesProps) => {
  return (
    <div className='blog-categories'>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryClick(category.id)}
          className={`blog-categories__item ${
            selectedCategories.includes(String(category.id)) ? 'active' : ''
          }`}
        >
          {category.name} ({category.count})
        </button>
      ))}
    </div>
  )
}

export default BlogCategories
