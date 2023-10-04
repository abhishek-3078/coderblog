import { useRouter } from 'next/router'
import React, { useEffect ,useState} from 'react'
import styles from '../../styles/BlogPost.module.css'


const Slug = (props) => {
  const [blog,setBlog]=useState(props.myblog)
  const createMarkup=(c)=>{
    return {__html:c}
  }


  return (
    <div className={styles.container}>
      <main className={styles.main}>
    <h1>{blog && blog.title}</h1>
    <hr />
    {blog &&<div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      </main>

    </div>
    
  )
}


export async function getServerSideProps(context) {

  const slug=context.params.slug
  const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  const myblog= await res.json()
 
  // Pass data to the page via props
  return { props: { myblog } }
}

export default Slug