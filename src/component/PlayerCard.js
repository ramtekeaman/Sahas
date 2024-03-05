import React, { useState } from 'react'

const PlayerCard = ({ image, name, description }) => {
    const [showInfo, setShowInfo] = useState(false);
  return (
    <div>
      <div className="team-item position-relative"
         onMouseEnter={() => setShowInfo(true)}
         onMouseLeave={() => setShowInfo(false)}>
      <div className="position-relative overflow-hidden rounded">
        <img className="img-fluid w-100" src={image} alt={name} style={{ height: "340px" }} />
      </div>
      {showInfo && (
        <div className="position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4 show_info"
             style={{ background: "rgba(34, 36, 41, 0.96)", width: "100%" }}>
          <h5 className="text-uppercase text-light">{name}</h5>
          <p style={{ maxHeight: "244px", width: "100%", overflow: "auto", scrollbarWidth: "none" }}>{description}</p>
        </div>
      )}
    </div>
    </div>
  )
}

export default PlayerCard
