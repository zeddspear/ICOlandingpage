import React, { useEffect, useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

function AccordionQuestion({ ...item }) {
  const [clicked, setClicked] = useState(false);
  const { id, question, answer } = { ...item };

  useEffect(() => {
    setClicked(false);
  }, [question]);

  console.log(clicked);

  return (
    <div
      className={
        clicked
          ? 'question border border-interactiveMain rounded-xl w-auto sm:max-w-[600px] sm:min-w-[600px] px-4 md:px-8 py-8 brightness-200  transition-all duration-300'
          : 'question border border-interactiveMain rounded-xl w-auto  sm:max-w-[600px] sm:min-w-[600px] px-4 md:px-8 py-5 transition-all duration-300'
      }
    >
      <div
        className={
          !clicked
            ? 'wrap flex justify-between items-center mb-0 gap-3'
            : 'wrap flex justify-between items-center mb-7 gap-3'
        }
        onClick={() => {
          setClicked(!clicked);
        }}
      >
        <h3>{question}</h3>
        <span
          className={
            clicked
              ? 'cursor-pointer text-surface opacity-70 rotate-180 transition-all duration-300'
              : 'cursor-pointer text-surface opacity-70 transition-all duration-300'
          }
        >
          <RiArrowDropDownLine size={30} />
        </span>
      </div>
      <div
        className={
          clicked
            ? 'dropdown  opacity-100 block transition-opacity duration-500'
            : 'dropdown opacity-0 hidden'
        }
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default AccordionQuestion;
