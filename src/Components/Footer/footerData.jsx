import {
  BsTwitter,
  BsFacebook,
  BsTelegram,
  BsYoutube,
  BsTiktok,
  BsDiscord,
} from 'react-icons/bs';

import { FaDiscord } from 'react-icons/fa';

const footerData = [
  {
    id: 1,
    linkName: 'Twitter',
    link: '#',
    icon: () => {
      return <BsTwitter />;
    },
  },
  {
    id: 2,
    linkName: 'Facebook',
    link: '#',
    icon: () => {
      return <BsFacebook />;
    },
  },
  {
    id: 3,
    linkName: 'Telegram',
    link: '#',
    icon: () => {
      return <BsTelegram />;
    },
  },
  {
    id: 4,
    linkName: 'Youtube',
    link: '#',
    icon: () => {
      return <BsYoutube />;
    },
  },
  {
    id: 5,
    linkName: 'Tiktok',
    link: '#',
    icon: () => {
      return <BsTiktok />;
    },
  },
  {
    id: 6,
    linkName: 'Discord',
    link: '#',
    icon: () => {
      return <BsDiscord />;
    },
  },
];

export default footerData;
