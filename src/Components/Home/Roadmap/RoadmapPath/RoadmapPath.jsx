import React, { useState } from 'react';
import roadmapData from '../roadmanData';
import ProgressCards from './ProgressCards';
import bgCircleLeft from '../../../../assets/roadmap-bg-circles/backdrop-circle-left.png';
import bgCircleRight from '../../../../assets/roadmap-bg-circles/backdrop-circle-right.png';

function RoadmapPath() {
  const [data, setData] = useState(roadmapData);

  const progressCards = data.map((item) => {
    return <ProgressCards key={item.id} {...item} />;
  });

  return (
    <>
      <div className="bgCirclesContainer w-screen z-[-1] relative">
        <img
          className="absolute w-[60%] sm:w-[50%] md:w-[40%] xl:w-auto left-0 top-[200px] opacity-50"
          src={bgCircleLeft}
          alt="bg-circle-left"
        />
        <img
          className="absolute w-[60%] sm:w-[50%] md:w-[40%] xl:w-auto right-0 top-[700px] opacity-50"
          src={bgCircleRight}
          alt="bg-circle-right"
        />
      </div>
      <div className="RoadmapPath my-5 sm:my-16 relative z-0">
        <div className="w-[100%] grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-0 sm:gap-5 lg:gap-0 lg:gap-y-2">
          {progressCards}
        </div>
      </div>
    </>
  );
}

export default RoadmapPath;
