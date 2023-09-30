import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
import LoadingBar from 'react-top-loading-bar';



export class news extends Component {

  static defaultProps = {
    county:"us",
    pageSize: 8,
    category: "general"
  }

  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalize=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  constructor(props){
    super(props);

    this.state={
      articles: [],
      loading: false,
      page:1,
      totalResults: 0,
      progress: 0, // Initialize progress

    }
      document.title = `News - ${this.capitalize(this.props.category)}`;
  }

  async updateNews(){
    try {
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec8ad838289948258835b4d8cb167efd&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let response = await fetch(url);
      let parsedData = await response.json();
      this.props.setProgress(40);
      this.setState({loading: false});
      this.setState({ articles: parsedData.articles });
      this.props.setProgress(100);
    } catch (error) {
      console.error("Error fetching data:", error);
      this.props.setProgress(100);
    }
  }

  async componentDidMount() {
    try {
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec8ad838289948258835b4d8cb167efd&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let response = await fetch(url);
      let parsedData = await response.json();
      this.props.setProgress(40);
      this.setState({loading: false});
      this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults});
      this.props.setProgress(100);
    } catch (error) {
      console.error("Error fetching data:", error);
      this.props.setProgress(100);
    }
  }

   handlePrev=async ()=>{
    // try {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec8ad838289948258835b4d8cb167efd&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    //   this.setState({loading: true});
    //   let response = await fetch(url);
    //   let parsedData = await response.json();
    //   this.setState({loading: false});
    //   this.setState({ articles: parsedData.articles });
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }

    this.setState({
      page: this.state.page-1,
    })
    this.updateNews();

  }

   handleNext= async ()=>{
  //   if (this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){
  // }
  // else{
  //   try {
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec8ad838289948258835b4d8cb167efd&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  //     this.setState({loading: true});
  //     let response = await fetch(url);
  //     let parsedData = await response.json();
  //     this.setState({loading: false});
  //     this.setState({ articles: parsedData.articles });
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }

    this.setState({
      page: this.state.page+1,
    })
    this.updateNews();
  }

  fetchMoreData = async () => {
    try {
      // Increment the page before making the API call
      const nextPage = this.state.page + 1;
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ec8ad838289948258835b4d8cb167efd&page=${nextPage}&pageSize=${this.props.pageSize}`;
  
      this.setState({ loading: true });
  
      let response = await fetch(url);
      let parsedData = await response.json();
  
      // Concatenate new articles with existing articles
      const updatedArticles = [...this.state.articles, ...parsedData.articles];
  
      this.setState({
        loading: false,
        articles: updatedArticles,
        totalResults: parsedData.totalResults,
        page: nextPage, // Update the page after successful fetch
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
  };
  
  
  

  render() {
    return (
      <div className='container my-4'>
        <LoadingBar color="#f11946" progress={this.state.progress} />
        <div style={{marginTop:'80px'}}>
        <h1  className= 'text-center my-4' >{`Top Headlines  - ${this.capitalize(this.props.category)}`}</h1>

        </div>
        <div style={{height:'60px'}}>
        {/* {this.state.loading && <Spinner/>} */}
        </div>
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className='row justify-items-center'>
        { this.state.articles.map((element) => {
        if (element.title !== "[Removed]") {
          return (
            <div key={element.url} className='col-lg-4 col-xl-3 col-md-6 col-sm-10 py-3'>
              <Newsitem className="my-4" title={element.title} description={element.description? element.description.slice(0,100):element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
            
          );
        } else {
          return null; // Render nothing if the title is "[Removed]"
        }
      })}
      </div>
      </div>
      </InfiniteScroll>


          
        </div>
    )
  }
}

export default news
