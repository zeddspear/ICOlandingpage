import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

function Whychoosecards({ chooseIcon, chooseName, chooseDescription }) {
  return (
    <div className="Whychoosecard min-h-[320px] sm:min-h-[290px] md:min-h-[320px] lg:min-h-[290px] xl:min-h-[360px] w-12/12 sm:w-9/12 md:w-6/12 mt-10 xl:w-full py-5 sm:py-0  px-3 lg:px-3 2xl:px-5 flex flex-col justify-center items-center rounded-xl hover:border border-t-lightBlueMain border-l-lightBlueMain border-r-purpleMain border-b-purpleMain ">
      <div className="Whychoosecardicon rotate-45 mt-[10px] sm:-mt-[80px] md:-mt-[55px] lg:-mt-[70px] xl:-mt-[65px] 2xl:-mt-[90px]">
        <img className="-rotate-45" src={chooseIcon} alt={chooseName} />
      </div>
      <h3 className="mt-8 mb-3 sm:mt-10 md:mt-10 lg:mt-12 2xl:mt-12">
        {chooseName}
      </h3>
      <p className="mt-1 mb-6">{chooseDescription}</p>
      <Link
        to="#"
        className="text-base text-surface flex justify-center items-center opacity-100 hover:brightness-75"
      >
        See details <FiArrowRight className="ml-1" />
      </Link>
    </div>
  );
}

export default Whychoosecards;
