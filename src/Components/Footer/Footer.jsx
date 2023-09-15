import React, { useState } from 'react';
import { IoIosMail } from 'react-icons/io';
import { AiFillPhone } from 'react-icons/ai';
import footerData from './footerData';

function Footer() {
  const [data, setData] = useState(footerData);

  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;

    setFeedback((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    // send form data or do what is needed
    alert('Message Sent!');

    setFeedback({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <div className="footer py-8 bg-primaryMain">
        <div className="container px-2 lg:px-32 py-10 grid grid-cols-1 xl:grid-cols-12">
          <div className="col-span-6 px-3 flex justify-start items-start lg:justify-center flex-col  lg:px-10">
            <h2>Contact Us</h2>
            <p className="mt-5 mb-10">
              We are always open and we welcome and questions you have for our
              team. If you wish to get in touch, please fill out the form below.
              Someone from our team will get back to you shortly
            </p>
            <div className="flex justify-center items-start flex-col gap-5 mt-10 break-words">
              <span className="text-sm font-normal text-surface flex justify-center items-center break-all gap-2">
                <IoIosMail className="text-interactiveMain" size={20} />
                Info.yourcompany@gmail.com
              </span>
              <span className="text-sm font-normal text-surface flex justify-center items-center break-words gap-2">
                <AiFillPhone size={20} className="text-interactiveMain" /> +345
                54689435
              </span>
              <ul className="flex justify-center items-center gap-2 sm:gap-5 mt-2">
                {data.map((item) => {
                  return <SocialIcons key={item.id} {...item} />;
                })}
              </ul>
            </div>
          </div>
          <div className="footerForm col-span-6 gap-3 mt-10 xl:mt-0 px-2 sm:px-8">
            <div className="flex justify-start lg:justify-center items-start flex-col xl:flex-row gap-8 2xl:-ml-6">
              <div className="flex flex-col gap-3 max-w-[250px]">
                <label htmlFor="name">Your Name</label>
                <input
                  className="w-full"
                  id="name"
                  type="text"
                  name="name"
                  value={feedback.name}
                  onChange={handleInputs}
                  placeholder="Type your name here"
                />
              </div>
              <div className="flex flex-col gap-3 max-w-[250px]">
                <label htmlFor="email">Your Email</label>
                <input
                  className="w-full"
                  id="email"
                  type="email"
                  name="email"
                  value={feedback.email}
                  onChange={handleInputs}
                  placeholder="Type your email here"
                />
              </div>
            </div>

            <div className="flex justify-start lg:justify-center items-start flex-col xl:flex-row my-8">
              <div className="flex flex-col gap-3 max-w-[800px]">
                <label htmlFor="message">Your Message</label>
                <textarea
                  className="resize-none w-full"
                  id="message"
                  name="message"
                  value={feedback.message}
                  rows={5}
                  cols={60}
                  placeholder="Leave your question or comment here"
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="flex justify-start xl:justify-center  items-center">
              <button
                className="btn btn-primary text-surface"
                onClick={submitForm}
              >
                SUBMIT YOUR MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primaryMain py-2">
        <div className="container px-2 lg:px-[160px] flex justify-center sm:justify-start items-center">
          <p>© 2022. All rights reserved by Avitex</p>
        </div>
      </div>
    </>
  );
}

const SocialIcons = ({ ...item }) => {
  const { link, icon } = { ...item };
  return (
    <>
      <li className="socialLink text-surface p-2 backdrop-brightness-150 rounded-md hover:scale-110 ">
        <a href={link}>{icon()}</a>
      </li>
    </>
  );
};

export default Footer;
