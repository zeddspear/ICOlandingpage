import React, { useState } from 'react';
import teamData from './teamData';
import TeamMember from './TeamMember/TeamMember';
import memberImg from '../../../assets/our-team/member-img.jpg';

function OurTeam() {
  const [data, setData] = useState(teamData);

  const teamMembers = data.map((member) => {
    return <TeamMember key={member.id} {...member} />;
  });

  return (
    <div className="py-10 bg-tertiaryMain">
      <div className="container px-5 mt-10 mb-5 mx-auto text-center">
        <h2>Our Team</h2>
        <p className="my-3">
          With help from our teams, contributors and investors these are the
          <br />
          milestones we are looking forward to achieve.
        </p>
        <div className="flex justify-evenly items-center flex-wrap lg:flex-nowrap gap-10 lg:gap-3 my-16">
          {teamMembers}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
