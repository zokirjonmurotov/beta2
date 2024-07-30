import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./Posts.scss"
import Button from "../../components/Button";
function Posts() {
  const [postData, setPostData] = useState([]);
  const navigate = useNavigate()
  useEffect(()=>{
    async function getPostData (){
      let response = await fetch('https://jsonplaceholder.typicode.com/posts')
      let data = await response.json()
      setPostData(data)
    }
    getPostData()
  }, [])


  return (
    <div className="posts">
      {
        postData.map((el, key)=>{
          const handleComments =()=>{
            navigate()
          }
          return (
            <div className="card" key={key}>
              <h2>{el.title}</h2>
              <Button name="More details.. " buttonFn={handleComments}/>
            </div>
          )
        })
      }
      <Outlet />
    </div>
  );
}

export default Posts;
