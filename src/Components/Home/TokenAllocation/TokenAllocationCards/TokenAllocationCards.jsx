import React from 'react';
import CardChart from './CardChart';
import {
  distribution,
  fundingAllocation,
} from '../allocationNdistributionData';

function TokenAllocationCards() {
  return (
    <div className="w-full flex justify-center items-center flex-col mt-20 gap-10 lg:gap-0 lg:flex-row">
      {/* Chart 1 */}
      <CardChart data={distribution} />
      {/* Chart 2  */}
      <CardChart data={fundingAllocation} />
    </div>
  );
}

export default TokenAllocationCards;
