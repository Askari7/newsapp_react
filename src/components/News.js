import React, { Component } from 'react'
import Loading from './Loading'
import NewsItem from './NewsItem'
import PropTypes  from 'prop-types'


export class News extends Component {

  static defaultProps={
    country:'us',
    pageSize:9,
    category:'sports',
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
    constructor(props) {
      super(props)
      this.state = {
         articles:[],
         loading:false,
         page:1,
      }
      document.title=`${this.props.category}-NewsMonkey`
    }
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c20b55c8b7b4cc185f7609bb4d913af&page=1&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
        
        let data= await fetch(url)
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false})
    }

    handlePrevClick= async()=>{

      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c20b55c8b7b4cc185f7609bb4d913af&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data= await fetch(url)
      let parsedData= await data.json()
      
      console.log(parsedData);

      this.setState({
        articles:parsedData.articles,
        page:this.state.page-1,
        loading:false,
      })
    }
    handleNextClick=async()=>{
      if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c20b55c8b7b4cc185f7609bb4d913af&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data= await fetch(url)
        let parsedData= await data.json()
  
        console.log(parsedData);
  
        this.setState({
          articles:parsedData.articles,
          page:this.state.page+1,
        loading:false,
        })
      }
    }
  render() {
    return (
      <div className='container'>
        <h1 className='text-center my-5'>NewsMonkey - Top {this.props.category} Headlines...</h1>
        {this.state.loading && <Loading/>}
        <div className="row">

        {!this.state.loading && this.state.articles.map((element)=>{

        return(
            <div className="col-4"key={element.url}>
                <NewsItem  title={element.title} description={element.description}
                 image={element.urlToImage} url={element.url} author={element.author} publishedAt={element.publishedAt} 
                 source={element.source}/>
                
                </div>
            )
        })}
    </div> 
    <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1}  type="button" className="btn btn-success"onClick={this.handlePrevClick}>&larr;previous</button>
        <button disabled={(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-success" onClick={this.handleNextClick}>next&rarr;</button>
        </div>    
    </div>
    )
  }
}
export default News