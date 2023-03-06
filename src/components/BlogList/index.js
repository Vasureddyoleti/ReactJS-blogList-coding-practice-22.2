// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="list-container">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogItemDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
