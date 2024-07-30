import "./PostDetail.scss"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";


function PostDetail(){
    const [postData, setPostData] = useState([]);
    const {postId} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        async function getDetailData(){
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            let data = await response.json()
            setPostData(data)
        }   
        getDetailData()
    },[])

    const handleBack = () =>{
        navigate('/posts')
    }
    const handleComments = () =>{
        navigate(`/posts/${postId}/comments`)
    }
    return(
        <>
        <div style={{marginTop:100}} className="postdetail">
            <div className="card">
                <h1>"{postData?.title}"</h1>
                <h3>{postData?.body}</h3>
                <div className="btns">
                <Button name="Back.." buttonFn={handleBack}/>
                <Button name="Comments" buttonFn={handleComments}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default PostDetail