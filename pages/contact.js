import React, { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {

  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [phone,setphone]=useState('')
  const [desc,setdesc]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(Object.fromEntries(new FormData(document.querySelector('.frm'))))

    fetch("http://localhost:3000/api/postcontact",{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({name,email,phone,desc})
    }).then(res=>res.json())
    .then(data=>{
      console.log('Success:',data)
      alert("Thanks for contacting us")
      setphone('')
      setemail('')
      setname('')
      setdesc('')
    }).catch(e=>console.log("ERROR:",e))
    
  }
  const handleChange=(e)=>{
    console.log(e)
    if(e.target.name=="name"){
      setname(e.target.value)
    }
    if(e.target.name=="email"){
      setemail(e.target.value)
    }
    if(e.target.name=="phone"){
      setphone(e.target.value)
    }
    if(e.target.name=="desc"){
      setdesc(e.target.value)
    }
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className="frm">
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formLabel}>
           Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
       

        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formLabel}>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            ariadescribedby="emailHelp"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" 
           className={styles.formLabel}>
            Phone
          </label>
          <input type="phone" 
          name="phone" className="form-control" id="phone" 
          value={phone} onChange={handleChange}/>
        </div>
          <label htmlFor="floatingTextarea">Comments</label>
        <div className={styles.mb3}>
          <textarea
            className="form-control"
            placeholder="Write your concern here"
            name="desc"
            id="floatingTextarea"
             value={desc}
             onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className={styles.btn} >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
