import React from 'react';
import { Link } from 'react-router-dom';
import { FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';

function TeamMember({ ...member }) {
  const { img, name, position, socialLinks } = { ...member };

  return (
    <div className="teamMember p-5 lg:p-2 xl:p-5 rounded-xl text-center ">
      <img
        className="rounded-full w-[160px] h-[160px] sm:w-[220px] sm:h-[220px]"
        src={img}
        alt="memberimg"
      />
      <h3 className="mt-8 mb-3">{name}</h3>
      <p>{position}</p>
      <ul className="memberSocialLinks mt-5 flex justify-center items-center gap-5">
        <li>
          <Link>
            <FiLinkedin size={20} />
          </Link>
        </li>
        <li>
          <Link>
            <FiFacebook size={20} />
          </Link>
        </li>
        <li>
          <Link>
            <FiInstagram size={20} />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TeamMember;
