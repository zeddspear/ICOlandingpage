import React, { useState } from 'react';
import blogsData from './blogsData';
import BlogCard from './BlogCard/BlogCard';

function LatestBlogs() {
  const [data, setData] = useState(blogsData);

  const blogs = data.map((blog) => {
    return <BlogCard key={blog.id} {...blog} />;
  });

  return (
    <div className="Blogs py-10 bg-tertiaryMain">
      <div className="container text-center">
        <h2 className="mt-5">Latest Blog Posts</h2>
        <p className="mt-3 mb-8">
          Read, watch and absorb the secrets that we publish is our official
          blog.
        </p>
        <div className="flex items-center justify-center lg:justify-between gap-8 lg:gap-4 flex-wrap lg:flex-nowrap p-2">
          {blogs}
        </div>
      </div>
    </div>
  );
}

export default LatestBlogs;
