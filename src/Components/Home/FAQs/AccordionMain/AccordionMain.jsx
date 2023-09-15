import React, { memo } from 'react';
import AccordionQuestion from './AccordionQuestion';

function AccordionMain({ accordionData }) {
  const QandA = accordionData.map((item) => {
    return <AccordionQuestion key={item.id} {...item} />;
  });

  return (
    <div className="accordion py-8 bg-tertiaryMain text-start">
      <div className="container flex justify-center items-center flex-col gap-4">
        {QandA}
      </div>
    </div>
  );
}

export default memo(AccordionMain);
