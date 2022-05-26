import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "./PlacesToVisit.css";
import machu from "../../Media/machu-picchu.jpg";
import llama from "../../Media/aboutus.jpg";

function PlacesToVisit() {
  return (
    <div className="bg-light">
          <h2 className='text-center display-5'><strong>Places to visit</strong></h2>
        <div className="container py-5">
            <AwesomeSlider>
                <div>
                    <img src={machu} alt="machuga" />
                </div>
                <div>
                    <img src={llama} alt="machuga" />
                </div>
            </AwesomeSlider>
        </div>
    </div>
  )
}

export default PlacesToVisit