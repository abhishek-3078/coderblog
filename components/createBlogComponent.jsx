import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function MyComponent() {
  const [value, setValue] = useState('');
  const [sent,setSent]=useState(false);
    const handleSubmit=async()=>{
        try{
          setSent(true);
            const res=await fetch("/api/postblog",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    blog:{
                        author:"Abhishek",
                        content:value,
                        title:document.getElementById('title').value,
                        slug:document.getElementById('title').value.trim().replaceAll(' ','-'),
                        metadesc:document.getElementById('meta').value,
                        author:document.getElementById('author').value
                    }
                })
            })
            const data=await res.json()
            console.log(data)
        }catch(e){
            console.log(e)
        }
        setSent(false)
    }

  return <div>
  <input type="text" placeholder='Title' id="title"/>
  <input type="text" placeholder='Meta description' id="meta" />
  <input type="text" placeholder='Author name' id="author" />
  <ReactQuill theme="snow" 
  modules={{  
    toolbar: {  
      container: [  
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }], 
        ['bold', 'italic', 'underline'],  
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],  
        [{ 'align': [] }],  
        ['link', 'image'],  
        ['clean'],  
        [{ 'color': [] }]  
      ] 
    }}}
    placeholder='type the blog here'
    value={value} 
  onChange={setValue} />
  <button className={sent?'posted-button':'post-button'}  onClick={handleSubmit} disabled={sent}> Post </button>
  </div>
}