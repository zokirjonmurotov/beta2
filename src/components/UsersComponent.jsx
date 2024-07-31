import React from 'react'
import { useNavigate } from 'react-router-dom';

function UsersComponent(props) {
  let navigate = useNavigate()
  function Navigation(){
   return navigate(`/Users/${props?.item?.id}`)
  }
  return (
    <div >
    <h2>Name: {props?.item?.name}</h2>
      {/* <p>{props?.item?.address}</p> */}
      <p>PhoneNumber 📞 : {props?.item?.phone}</p>
      <p>Your Website 📑 : {props?.item?.website}</p>
      <button onClick={Navigation}  style={{width:'160px', height:'50px', fontSize:'15px'}}>About this user👤</button>
    </div>
  )
}

export default UsersComponent;