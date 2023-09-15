import React from 'react';

function Features({ icon, featureName, featureDescription }) {
  return (
    <div className="text-center flex flex-col justify-center items-center my-5 px-10 sm:px-36 lg:px-10">
      <div className="featureIconContainer">
        <img className="featureIcon" src={icon} alt={featureName} />
      </div>
      <h3>{featureName}</h3>
      <p className="my-3">{featureDescription}</p>
    </div>
  );
}

export default Features;
