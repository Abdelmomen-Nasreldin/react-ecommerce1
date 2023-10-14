import { useFetch } from '@/hooks/useFetch'
import { Category } from '@/types/category'

const Categories = () => {
  const { data, isLoading, isError, error } = useFetch<Category[]>('api/v1/categories')
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError && error) {
    return <span>Error: {error.message}</span>;
  }

  if (!data || !data.length) {
    return <span>No categories available</span>;
  }
  return (
    <div>
      {
        data.map(cat => {
          return (
            <p key={cat.name}>{cat.name}</p>
          )
        })
      }
    </div>
  )
}

export default Categories