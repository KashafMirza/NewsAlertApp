import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let { title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" >
        {/* agr news api me koi news ki pic nae h to usky lye ternary condition apply ki */}
          <img src={!imageUrl?"https://www.aljazeera.com/wp-content/uploads/2023/01/AP23026457881767.jpg?resize=1920%2C1440":imageUrl} className="card-img-top" alt="no-img" />
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}....</p>
            <a rel='noreferrer' href={newsUrl} target="_blank"  className="btn btn-sm btn-info">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
