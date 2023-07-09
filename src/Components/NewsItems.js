import React  from 'react'



const NewsItems = (props) => {



  let { title, description, imageUrl, newsUrl, author, date, source } = props
  return (
    <div className='my-3' >  

      <div className="card" style={{backgroundColor: props.mode=== 'dark'? 'darkgrey': 'white'}} >  
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}..... </h5> 
          <span class="badge rounded-pill bg-danger">{source}</span>  
          <p className="card-text">{description}.....</p>
          <p className="card-text"><small className="text-body-secondary" style={{ color: 'darkgoldenrod' }}>By {!author ? "Unkown" : author} on {new Date(date).toGMTString()} </small></p>
          <a href={newsUrl} target='_blank' className="btn btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItems
