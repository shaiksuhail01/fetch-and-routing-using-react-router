import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = details

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <div className="itemContainer">
        <img src={imageUrl} alt="" className="mainImage2" />
        <div className="itemInfo">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="authorInfo">
            <img src={avatarUrl} className="avatar" alt="" />
            <p className="nameText">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
