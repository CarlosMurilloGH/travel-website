import React from 'react';
import './Banner.css';


function Banner() {
  return (
    <div className="bannercontainer">
        <div className="infocontainer container">
            <h1 className="text-white"><span className="display-2"><strong>Discover the world</strong></span><br></br>
            <span className="display-2"><strong>with our guide.</strong></span></h1>
            <button className="btn btn-success py-2 mt-3">Start traveling</button>
        </div>
    </div>
  )
}

export default Banner