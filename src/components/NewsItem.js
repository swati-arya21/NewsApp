import React, {Component} from 'react';

export default class NewsItem extends Component
{
      render()
      {
        let {title, description, imageUrl, newsUrl, author, date}= this.props;
        return (
            <div className="container my-3">               
                <div className="card" >
                    <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small class="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target= "_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        );
      }
}
