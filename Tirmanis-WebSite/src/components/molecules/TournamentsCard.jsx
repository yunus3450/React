import React from 'react'

const TournamentsCard = ({ url, src }) => {
  return (
    <div className="col-lg-3 col-md-6 tournament-card" >
          <div className="card">
            <a href={url}>
              <img src={src} className="card-img-top" alt="Tırmanış Serisi" />
            </a>
            <div className="card-body">
              <div>Tırmanış Serisi</div>
            </div>
          </div>
        </div>
  )
}

export default TournamentsCard
