import React, { Component } from 'react'
import NewsItems from '../NewsItems'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1    //page is a parameter
    }
  }
  //use async func to awaite some promises resolving //news articles ko updt kr skty using componentDidMount
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b4021d9a93824ccfa742a56e43b84456&page=1&pageSize=20";  //url for news fetch api
    //now to use fetch api
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({ articles: parseData.articles, totalResults: parseData.totalResults });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b4021d9a93824ccfa742a56e43b84456&page=${this.state.page - 1}&pageSize=20`;  //url for news fetch api
    //now to use fetch api
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=b4021d9a93824ccfa742a56e43b84456&page=${this.state.page + 1}&pageSize=20`;  //url for news fetch api
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles
      })
    }
  }


  render() {

    return (

      <div className='container my-3'>
        <h1 className='text-center'style={{margin:"35px"}}>NewsAlert! - Top Headlines </h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItems title={element.title ? element.title.slice(0, 43) : " "} description={element.description ? element.description.slice(0, 80) : " "} imageUrl={element.urlToImage} newsUrl={element.url} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type='button' className='btn btn-info' onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type='button' className='btn btn-info' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
export default News
