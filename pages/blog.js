import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
import InfiniteScroll from 'react-infinite-scroll-component';
//step 1:collect all the files from blogdata
//step2: populate them inside the page

const blog = (props) => {
  // console.log(props)
  const [count,setcount]=useState(5);
  const [blogs,setBlogs]=useState(props.allBlogs)


  const fetchData=async ()=>{
    console.log("BLOGS:")
    let data= await fetch(`http://localhost:3000/api/blogs?count=${count+2}`)
    let allBlogs=await data.json()
  setBlogs(allBlogs.allblogs)
  setcount(count+2)
  }


  return (
    <main className={styles.main}>

<div id="scrollable" className={styles.scrollContainer}>
<InfiniteScroll
  dataLength={blogs.length} //This is important field to render the next data
  next={fetchData}
  hasMore={props.allCount>count}
  loader={<h4>Loading...</h4>}
  // scrollableTarget="scrollable"
  endMessage={
    <p style={{ textAlign: 'center',margin:'20px' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  
>
{blogs.map((blogItem)=>{
        return <div key={blogItem.slug} className={styles.blogItems}>
          <Link href={`/blogpost/${blogItem.slug}`}>
        <h3 className={styles.blogItemh3}>{blogItem.title}</h3></Link>
        <p>{blogItem.metadesc} </p>
        <Link href={`/blogpost/${blogItem.slug}`}>
            <button className={styles.btn}>Read More</button></Link>
        
      </div>
      })}
</InfiniteScroll>   
</div> 



    {/* <div className={styles.blogs}>
      {props.allBlogs.map((blogItem)=>{
        return <div key={blogItem.slug} className={styles.blogItems}>
          <Link href={`/blogpost/${blogItem.slug}`}>
        <h3 className={styles.blogItemh3}>{blogItem.title}</h3></Link>
        <p>{blogItem.metadesc.substr(0,150)} </p>
        <Link href={`/blogpost/${blogItem.slug}`}>
            <button className={styles.btn}>Read More</button></Link>
        
      </div>
      })}
          
        
          </div> */}

          </main>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  
  let data= await fetch('http://localhost:3000/api/blogs?count=3')
  let allBlogs=await data.json()
  let allCount = allBlogs.allCount
  allBlogs=allBlogs.allblogs
  // Pass data to the page via props
  return { props: {allBlogs,allCount}}
}
export default blog