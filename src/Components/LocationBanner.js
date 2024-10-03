import React from 'react';

const LocationBanner = ({ imageSrc, content }) => {
  return (
    <div id="loc" className="location-banner poppins-semibold">
      <div className="loc-banner-left-content">
        <div className="loc-banner-left-inner">
          <img src={imageSrc} alt="Location" className="location-image" />
          <p className="location-content">{content}</p>
        </div>
      </div>
      <div className="loc-banner-right-content">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.0082166837096!2d76.725821!3d30.633725999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe984a266207f%3A0xe18ddedbfca6ee23!2sMarbella%20Royce!5e0!3m2!1sen!2sin!4v1710349799431!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: '1px solid #ccc', borderRadius: '8px' }}
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationBanner;
