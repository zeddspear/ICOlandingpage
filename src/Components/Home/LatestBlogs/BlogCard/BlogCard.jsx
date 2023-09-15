import React from 'react';

function BlogCard({ ...blog }) {
  const {
    img,
    heading,
    headingMain,
    description,
    authorImg,
    authorName,
    postedDate,
    timeTakenRead,
  } = { ...blog };

  return (
    <div className="blog h-full max-w-[450px]  border border-t-lightBlueMain border-l-lightBlueMain border-r-purpleMain border-b-purpleMain rounded-[20px] overflow-hidden">
      <img className="h-[40%] xl:h-[40%] lg:h-[50%]" src={img} alt={heading} />
      <div className="h-[40%] xl:h-[60%] lg:h-[50%] p-3 md:p-5 text-start">
        <h4 className="text-interactiveMain">{heading}</h4>
        <h3 className="my-3">{headingMain}</h3>
        <p>{description}</p>
        <div className="blogStamp flex items-center gap-3 md:gap-5 overflow-hidden mt-6 mb-2">
          <div>
            <img
              className="w-12 h-12 rounded-full"
              src={authorImg}
              alt={authorName}
            />
          </div>
          <div>
            <h4 className="text-surface mb-2">{authorName}</h4>
            <ul className="flex items-center gap-2 md:gap-4">
              <li>
                <p>{postedDate}</p>
              </li>
              <li>
                <p>{`${timeTakenRead.toString()}`} min read</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
