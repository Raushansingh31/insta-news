import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { toContainHTML } from '@testing-library/jest-dom/matchers';

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      page : 1
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=03419839e6e944b0bc450e4d3e6e6b17"
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({ articles: parseData.articles, totalArticles: parseData.totalResults })
  }
  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=03419839e6e944b0bc450e4d3e6e6b17&page=${this.state.page-1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({
      page: this.state.page-1,
      articles: parseData.articles
    })
  }
  handleNextClick = async () => {
    if( this.state.page +1 > Math.ceil(this.state.totalArticles/20)){

    }else{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=03419839e6e944b0bc450e4d3e6e6b17&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json()
        this.setState({
          page: this.state.page+1,
          articles: parseData.articles
        })
  }
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2> my headline is that...</h2>
          this is news component
          <div className="row">
            {this.state.articles.map((element) => {
              return (<div className="col-md-3" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 100) : ""} imgurl={element.urlToImage ? element.urlToImage : "https://www.foxsports.com/stories/nfl/malik-hooker-says-ceedee-lamb-should-paid-before-dak-prescott-micah-parsons"} newsurl={element.url} />
              </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} class="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous
          </button>
          <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News
