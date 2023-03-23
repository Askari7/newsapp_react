import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,image,url,author,publishedAt,source}=this.props
    return (
      <div className='my-2'>
        <div className="card">
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <span class="badge bg-success">{source.name}</span>
                {/* <p className="card-text">{description}</p> */}
                <p className='card-text'><small className='text-muted'>By {!author? "unknown":author} on {new Date(publishedAt).toLocaleString()}</small></p>
                <a href={url} target='_blank' rel='noreferrer' className="btn btn-success">Read Full News</a>
            </div>
        </div> 

    </div>
    )
  }
}

export default NewsItem
