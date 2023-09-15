import React from 'react';
import { VictoryPie, VictoryTooltip } from 'victory';

function CardChart({ data }) {
  const { name, chartData } = data;

  // Colors array for victory piechart
  const colorsArray = ['#1998CA', '#1CA151', '#DEAD2F', '#A00763', '#343EBF'];

  // Items name and % list mapping
  const chartLists = chartData.map((item) => {
    return (
      <li className="w-full" key={item.id}>
        <div className="flex items-center mx-0 md:mx-3 lg:mx-6 xl:mx-10 rounded-xl px-2 md:px-4 py-2">
          <div className="flex justify-center items-center gap-2 md:gap-3 ">
            <div className={`w-8 h-8 ${item.color} rounded`}></div>
            <p className="text-[10px] sm:text-sm md:text-base xl:text-lg">
              {item.x}
            </p>
          </div>
          <p className="opacity-100 text-[10px] sm:text-sm md:text-base xl:text-lg ml-auto">
            {item.y}%
          </p>
        </div>
      </li>
    );
  });

  return (
    <div className="w-full">
      <div className="chartContainerMain p-5  md:p-10 h-full w-12/12 sm:w-11/12 mx-auto rounded-3xl">
        <h2>{name}</h2>
        <div className="chartContainer my-5 flex justify-center">
          {/* Use of Victory Pie Chart */}
          <VictoryPie
            colorScale={colorsArray}
            data={chartData}
            height={230}
            labelComponent={<VictoryTooltip active={false} />}
            animate={{
              duration: 2000,
            }}
            innerRadius={100}
          ></VictoryPie>
        </div>
        <div className="chartList my-5 w-full">
          <ul className="w-full">{chartLists}</ul>
        </div>
      </div>
    </div>
  );
}

export default CardChart;
