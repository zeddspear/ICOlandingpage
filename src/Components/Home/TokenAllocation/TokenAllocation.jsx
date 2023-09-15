import React from 'react';
import TokenAllocationCards from './TokenAllocationCards';

function TokenAllocation() {
  return (
    <div className="TokenAllocation py-10 bg-tertiaryMain">
      <div className="container px-5 flex justify-center items-center flex-col mt-5 md:mt-28 text-center">
        <h2>Token Allocation & Funds Distribution</h2>
        <p className="my-3">
          Join the industry leaders to discuss where the markets are heading. We
          <br />
          accept token payments.
        </p>
        <TokenAllocationCards />
      </div>
    </div>
  );
}

export default TokenAllocation;
