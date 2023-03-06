// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props

  const {title, description, publishedDate} = blogItemDetails

  return (
    <li className="list-item">
      <div className="title-date-container">
        <h1 className="title-heading">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
