import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function detail() {
  let { id } = useParams();
  let [usersDetail, setUsersDetail]=useState([])
  let navigate = useNavigate()
  function Navigation(){
    return navigate(-1)
  }
  useEffect(() => {
    if (id <= 10) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((res) => res.json())
        .then((data) => setUsersDetail(data));
    } else {
      <h1 style={{ marginTop: "100px" }}>This user is NotFound😕</h1>;
      {console.log('This user is NotFound😕')}
    }
  }, []);
  return (
    <div style={{marginTop:'200px'}}>
    <h2>User Title📄: {usersDetail?.title}</h2>
    {usersDetail?.completed==true?<h2>Completed: true✅</h2>:<h2>Completed: false❌</h2>}
    <button onClick={Navigation} >Back</button>
    </div>
    
  );
}

export default detail;
