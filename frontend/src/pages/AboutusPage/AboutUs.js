import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const AboutUs = () => {

    useEffect(() => {
        document.body.style.backgroundColor = '#FF0000';
        return () => {
          document.body.style.backgroundColor = '';
        };
      }, []);

  return (
    <div className="about-us container">
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h1><span className="big-text">We're bringing back</span><br/><br/><span className="highlight">perspective</span><span className="big-text"> to news</span></h1>
          <p className="mt-4">At Panorama, we build technology that improves the way users find truthful and reliable sources.</p>
          <button className="homepage_btn mt-3">Learn More</button>
        </div>
        <div className="col-md-6">
          <div className='aboutus-bg'></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
