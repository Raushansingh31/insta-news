import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date, source } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
        <span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
              {source}
            </span>
          <img src={imgurl ? imgurl : "https://www.foxsports.com/stories/nfl/malik-hooker-says-ceedee-lamb-should-paid-before-dak-prescott-micah-parsons"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}..</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target="_blank" className="btn btn-sn btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
