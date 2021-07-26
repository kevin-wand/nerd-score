import { Link } from 'react-router-dom'

export default function Categories(props) {
  const { categoryList } = props
  return (
    <div>
      <div>Choose a category</div>
      {categoryList.map((category) => (
        <div key={category.id}>
          <Link to={`/categories/${category.id}`}><div>{category.name}</div></Link>
        </div>
      ))}
    </div>
  )
}
