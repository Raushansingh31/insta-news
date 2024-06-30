import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imgurl,newsurl} = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
        <img src={imgurl?imgurl:"https://www.foxsports.com/stories/nfl/malik-hooker-says-ceedee-lamb-should-paid-before-dak-prescott-micah-parsons"} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsurl} target="_blank" className="btn btn-sn btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
