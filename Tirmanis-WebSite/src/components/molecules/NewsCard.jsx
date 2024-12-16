import React from 'react'
import { Link } from "react-router-dom";

const NewsCard = ({href,src,date,title,}) => (
  
    <div className="col-lg-4 col-md-6 tournament-card">
      
        <div className='card'>
        <Link to={href}>
            <img src={src}  className="img-fluid"/>
        </Link>
        </div>
        
        <div className="card-body">
            <div>{date}</div>
            <div>{title}</div>
        </div>
      
    </div>
)

export default NewsCard
