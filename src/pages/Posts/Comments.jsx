import "./Comments.scss"
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function Comments(){
    const [postData, setPostData] = useState([]);
    const {postId} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        async function getCommentsData(){
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            let data = await response.json()
            setPostData(data)
        }
        getCommentsData()
    },[])
    const handleBack = () =>{
        navigate(`/posts/${postId}`)
    }
    return(
        <div className="comments">
            <div className="container" style={{marginTop:100}}>
            <Button name="⬅Back.." buttonFn={handleBack}/>
            {
                postData.map((el, key)=>{
                    return(
                        <div className="commentCard" key={key}>
                            <h2>{el.name}</h2>
                            <hr />
                            <p><span>{el.email}:</span> {el.body}</p>
                        </div>
                    )
                })
            }

            </div>
            
            
        </div>
    )
}

export default Comments