import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: updatedData, isLoading: false})
  }

  getDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData
    return (
      <div className="blogDetailsContainer">
        <h2 className="heading">{title}</h2>
        <div className="authorInfoContainer">
          <img src={avatarUrl} alt="" className="avatar2" />
          <p className="authorName">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="mainImage" />
        <p className="description">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.getDetails()
        )}
      </>
    )
  }
}
export default BlogItemDetails
