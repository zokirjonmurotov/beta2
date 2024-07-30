import "./PostDetail.scss"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function PostDetail(){
    const [postData, setPostData] = useState([]);
    console.log(postData);
    const navigate = useNavigate()
    useEffect(()=>{
        async function getDetailData(){
            let response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
            let data = response.json()
            setPostData(data)
        }
        getDetailData()
    },[])
    return(
        <>
        {
            console.log('working')
        }
        <div style={{marginTop:50}} className="postdetail">
            <h1>DETAIL PAGE</h1>
        </div>
        </>
    )
}

export default PostDetail