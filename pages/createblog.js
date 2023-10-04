import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const CreateBlogComponent = dynamic(() => import('../components/createBlogComponent'), {
    ssr: false, // Set to false to prevent server-side rendering
  });
  
const CreateBlog = () => {
    
    return (
        <div>

            <CreateBlogComponent />
        </div>
    // <ReactQuill theme="snow" value={value} onChange={setValue} />
    );
}

export default CreateBlog