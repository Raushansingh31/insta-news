import React, { Component } from 'react'
import NewsItem from './NewsItem'
//import { toContainHTML } from '@testing-library/jest-dom/matchers';
//import spinner from './spinner';
import Spin from './Spin';
export class News extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page : 1,
      loading : false
    }
    document.title=`${this.props.category} -Instanews`;
  }
  async updateNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=03419839e6e944b0bc450e4d3e6e6b17&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.setState({loading : true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(50);
    this.setState({
      totalArticles: parseData.totalResults,
      articles: parseData.articles,
      loading : false
    })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  handlePrevClick = async () => {
    this.setState({ page: --this.state.page});
    this.updateNews();
  }
  handleNextClick = async () => {
    if( this.state.page +1 > Math.ceil(this.state.totalArticles/this.props.pagesize)){

    }else{
      this.setState({ page : ++this.state.page});
      this.updateNews();
  }
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center mt-3 pt-5 pb-4"> Top Headlines In {this.props.category}</h2>
          <div className="row">
            {this.state.loading && <Spin/>}
            {!this.state.loading && this.state.articles.map((element) => {
              return (<div className="col-md-3" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 50) : ""} description={element.description ? element.description.slice(0, 100) : ""} imgurl={element.urlToImage ? element.urlToImage : "https://www.foxsports.com/stories/nfl/malik-hooker-says-ceedee-lamb-should-paid-before-dak-prescott-micah-parsons"} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
          <button type="button" disabled={this.state.page<=1} class="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous
          </button>
          <button type="button" disabled={this.state.page +1 > Math.ceil(this.state.totalArticles/this.props.pagesize)} class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
        </div>
      </div>
    )
  }
}

export default News
