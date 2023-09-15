import React, { useEffect, useState } from 'react';

function ProgressCards({ date, heading, list, style, completed }) {
  // Styled Classes state
  const [styledClass, setStyledClass] = useState('');

  // Set styled class state on only first render of each div and card
  useEffect(() => {
    if (!style) {
      if (completed) {
        setStyledClass(
          'min-h-[200px] sm:min-h-[400px] w-[100%] sm:border-r-2 border-r-interactiveMain border-solid flex justify-center items-center lg:justify-end lg:items-start '
        );
      } else {
        setStyledClass(
          'min-h-[200px]  sm:min-h-[400px] w-[100%] sm:border-r border-r-interactiveMain border-dashed flex justify-center items-center lg:justify-end lg:items-start'
        );
      }
    } else {
      if (completed) {
        setStyledClass(
          'min-h-[200px]  sm:min-h-[400px] w-[100%] sm:border-l-2 border-l-interactiveMain border-solid flex justify-center items-center lg:justify-start lg:items-end'
        );
      } else {
        setStyledClass(
          'min-h-[200px]  sm:min-h-[400px] w-[100%] sm:border-l border-l-interactiveMain border-dashed flex justify-center items-center lg:justify-start lg:items-end'
        );
      }
    }
  }, []);

  return (
    <div className={styledClass}>
      <div
        className={
          !style
            ? 'w-full sm:flex justify-center items-center'
            : 'w-full  sm:flex justify-center items-center flex-row-reverse'
        }
      >
        <div
          className={
            completed
              ? 'progressCard completedProgress text-start flex flex-col justify-center items-stretch sm:block sm:min-w-[300px] p-2 sm:p-5 border border-t-lightBlueMain border-l-lightBlueMain border-r-purpleMain border-b-purpleMain'
              : 'progressCard text-start flex flex-col justify-center items-stretch sm:block sm:min-w-[300px] p-2 sm:p-5 border-t-lightBlueMain border border-l-lightBlueMain border-r-purpleMain border-b-purpleMain'
          }
        >
          <p>{date}</p>
          <h3>{heading}</h3>
          <ul className="mt-1 ml-3 p-3 list-disc">
            <li>
              <p>{list['1']}</p>
            </li>
            <li>
              <p>{list['2']}</p>
            </li>
          </ul>
        </div>
        <div className="horizontalLine w-[64px] mx-5 hidden sm:block">
          <div className="w-full h-[2px] bg-interactiveMain opacity-80"></div>
        </div>
        <div
          className={
            !style
              ? 'smallPointerCircle h-8 w-8  rounded-full -mr-[1.07rem] relative z-10 hidden sm:block'
              : 'smallPointerCircle h-8 w-8  rounded-full -ml-[1.05rem] relative z-10 hidden sm:block'
          }
        ></div>
      </div>
    </div>
  );
}

export default ProgressCards;
