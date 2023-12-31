import React, {Component} from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component
{
    static defaultProps = {
        country: 'in',
        pageSize:8,
        category:'general'
    }

    static propTypes={
        country: PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    constructor()
    {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount()
    {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b87687ad8f6484e9167c1dfceda6f84&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults, loading:false})
    }

    handlePrevClick = async ()=>
    {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b87687ad8f6484e9167c1dfceda6f84&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({page:this.state.page-1, articles: parsedData.articles, loading:false});
    }
    handleNextClick = async () =>
    {
        if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))
        {

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7b87687ad8f6484e9167c1dfceda6f84&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json();
            //this.setState({loading:false});
            console.log(parsedData);
            this.setState({page:this.state.page+1, articles: parsedData.articles, loading:false});
        }
    }
    render()
    {
        return(
            <div className="container my-3">
            
                <h2 className="text-center">News - Top HeadLines</h2>
                {this.state.loading && <Spinner/>}
               
                <div className="row">
                    {!this.state.loading && this.state.articles.map((elements)=>{
                        return  <div className="col-md-4" key={elements.url}>
                        <NewsItem
                            title={elements.title?elements.title.slice(0,75): ""} 
                            description={elements.description?elements.description.slice(0,88):""} 
                            imageUrl={elements.urlToImage}
                            newsUrl={elements.url}
                            author={elements.author}
                            date={elements.publishedAt}>     
                        </NewsItem>
                    </div>
                    })}                  
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}
