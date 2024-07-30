import "./Comments.scss"
import { useState, useEffect } from "react";

function Comments(){
    const [postData, setPostData] = useState([]);
    console.log(postData);
    useEffect(()=>{
        async function getCommentsData(){
            let response = await fetch('https://jsonplaceholder.typicode.com/comments')
            let data = response.json()
            setPostData(data)
        }
        getCommentsData()
    },[])
    return(
        <div className="comments"></div>
    )
}

export default Comments