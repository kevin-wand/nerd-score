import { Link } from 'react-router-dom'

export default function Categories(props) {
  const { categoryList } = props
  return (
    <div className='category-wrapper'>
      <div className='category-header'>Choose a category</div>
      <div className='category-container'>
        {categoryList.map((category) => (
          <div key={category.id} className='category-card'>
            <Link className='category-link' to={`/categories/${category.id}`}><div className='category-link'>{category.name}</div></Link>
          </div>
        ))}
      </div>
    </div>
  )
}
