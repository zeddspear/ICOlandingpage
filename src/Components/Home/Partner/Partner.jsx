import React, { useState } from 'react';
import partnersData from './partnersData';

function Partner() {
  const [data, setData] = useState(partnersData);

  const partners = data.map((partner) => {
    return (
      <img
        className="mx-auto"
        key={partner.id}
        src={partner.img}
        alt={partner.name}
      />
    );
  });

  return (
    <div className="Partner py-8 bg-tertiaryMain">
      <div className="PartnerContainer container p-8 w-full rounded-xl text-center mx-auto border border-t-lightBlueMain border-l-lightBlueMain border-r-purpleMain border-b-purpleMain">
        <h2 className="mt-10 mb-5">Strategic Partners</h2>
        <p>
          Join the industry leaders to discuss where the markets are heading. We
          accept token <br /> payments.
        </p>
        <div className="w-full mt-20 px-5 mx-auto my-10 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-6 sm:grid-rows-6 lg:grid-rows-3 sm:gap-10 lg:gap-12 xl:gap-20 ">
          {partners}
        </div>
      </div>
    </div>
  );
}

export default Partner;
