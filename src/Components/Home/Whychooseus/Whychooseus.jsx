import React, { useState } from 'react';
import Whychoosecards from './Whychoosecards';
import whychooseData from './whychooseusData';

function Whychooseus() {
  const [data, setData] = useState(whychooseData);

  const chooseCards = data.map((card) => {
    return <Whychoosecards key={card.id} {...card} />;
  });

  return (
    <div className="Whychooseus py-8 bg-tertiaryMain relative z-0">
      <div className="container px-5 flex justify-center items-center flex-col mt-20 text-center">
        <h2>Why Choose Our Token?</h2>
        <p className="my-3">
          The world first platform to reward investors and traders build on ICO.
        </p>
        <div className="chooseCardsContainer flex justify-center items-center flex-wrap xl:flex-nowrap gap-5 py-10">
          {chooseCards}
        </div>
      </div>
    </div>
  );
}

export default Whychooseus;
