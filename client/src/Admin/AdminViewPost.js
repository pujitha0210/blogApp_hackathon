
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const AdminViewPost = () => {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search
const [adminStatus, setAdminStatus] =useState({})

  useEffect(()=>{
    const adminlogin = async (inputs) => {
      const res = await axios.post("/auth/login", inputs);
      setAdminStatus(res);
    };

  }, [adminStatus])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }
  return (
    <>
    { adminStatus &&
    <div className="posts">

      <div className="posts">
      
      {posts.map((post) => (
        <div className="post" key={post.id}>
         <div className="img">
           <img src={`${post.img}`} alt="" style={{height:"300px"}}/>
         </div>
         <div className="content">
           <Link className="link" to={`/post/${post.id}`}>
             <h1>{post.title}</h1>
           </Link>
           <p>{getText(post.desc)}</p>
           <Link to={`/post/${post.id}`}>
           </Link>
         </div>
       </div>
     ))}
     </div>

   </div>
     
     }
    <div>welcome</div>
    
    </>
   
  );
};

export default AdminViewPost;

