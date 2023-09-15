import React from 'react';
import Timer from './Timer';

function Hero() {
  // We can fetch Date, Hours, Minutes and Seconds from server too
  const stopwatchOffset = new Date();
  stopwatchOffset.setDate(stopwatchOffset.getDate() + 300);
  stopwatchOffset.setHours(stopwatchOffset.getHours() + 16);
  stopwatchOffset.setMinutes(stopwatchOffset.getMinutes() + 24);
  stopwatchOffset.setSeconds(stopwatchOffset.getSeconds() + 32);

  return (
    <div className="pb-28 pt-20 bg-primaryMain relative z-10">
      <div className="container px-5 flex justify-center items-center flex-col">
        <div className="heroTop py-8 flex flex-col items-center">
          <h1 className="text-center">
            Join The Future Of ICOLand Crypto <br /> Trading Strategies
          </h1>
          <p className="text-center my-8">
            IcoCoin is a public blockchain protocol deploying a suite of
            algorithmic decentralized stablecoins which <br /> underpin a
            thriving ecosystem that brings DeFi to the masses.
          </p>
          <button className="btn btn-primary text-surface">
            Buy Token Now
          </button>
        </div>

        <div className="heroBottom w-full p-10 xl:w-10/12 grid lg:grid-cols-2 mt-10">
          <div className="px-2 lg:px-5 xl:px-10 mb-8 text-center lg:text-start lg:mb-0 mx-auto my-auto">
            <h2>50.000.000 HVR To Be Sold!</h2>
            <p className="mt-3">
              During Pre-Sale, get 5x tokens or 50.000 HVR per Ether. During
              regular sale, it will be 10.000 HVR per Ether.
            </p>
          </div>
          <Timer stopwatchOffset={stopwatchOffset} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
