import React, { useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'
const navbar = () => {
  const router=useRouter()
  const [active ,setactive]=useState(0);
  console.log(router.query)
  return (

    <nav className={styles.mainnav}>
          <ul className='navbar'>
            <li className={(router.pathname=='/')?'active':''}>
              <Link href="/" >Home</Link>
            </li>
            <li className={(router.pathname=='/blog')?'active':''}>
              <Link href="/blog" >Blog</Link>
            </li>
            
            <li className={(router.pathname=='/about')?'active':''} >
              <Link href="/about" >About</Link>
            </li>
            <li className={(router.pathname=='/createblog')?'active':''} >
              <Link href="/createblog" >Post</Link>
            </li>
            
            <li className={(router.pathname=='/contact')?'active':''}>
              <Link href="/contact"  >Contact</Link>
            </li>
          </ul>
        </nav>
  )
}

export default navbar