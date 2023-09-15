import React from 'react';
import RoadmapPath from './RoadmapPath';

function Roadmap() {
  return (
    <div className="Roadmap bg-tertiaryMain py-8 relative z-0">
      <div className="container px-5 flex justify-center items-center flex-col mt-10 text-center">
        <h2>Road Map</h2>
        <p className="my-3">
          The use of crypto-currencies has become more widespread, and they are
          now <br /> increasingly accepted as a legitimate for transactions.
        </p>
        <RoadmapPath />
      </div>
    </div>
  );
}

export default Roadmap;
