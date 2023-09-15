import React, { useState } from 'react';
import Features from './Features';
import featureData from './featureData';

function Feature() {
  const [data, setData] = useState(featureData);

  const features = data.map((feature) => {
    return <Features key={feature.id} {...feature} />;
  });

  return (
    <div className="Feature bg-tertiaryMain py-10 relative z-10 shadow-3xl">
      <div className="container px-5 py-5 my-5 flex justify-center items-center flex-col text-center">
        <h2>What Is ICO Crypto-Currencies?</h2>
        <p className="my-4">
          The world first platform to reward investors and traders build on ICO.
        </p>
        <div className="features flex justify-center items-center flex-wrap lg:flex-nowrap gap-5">
          {features}
        </div>
      </div>
    </div>
  );
}

export default Feature;
