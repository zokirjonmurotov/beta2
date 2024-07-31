import React, { useEffect, useState } from "react";
import UsersComponent from "../../components/UsersComponent";
import { useNavigate } from "react-router-dom";
import "./Users.css"
function Users() {
  let [usersData, setUsersData] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsersData(data));
  }, []);
  return (
    <div style={{ fontSize: "20px" }}>
      {/* {console.log(usersData)} */}
      <div className="parent">
        {usersData.map((item) => {
          return (
            <>
              <UsersComponent key={item?.id} item={item} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
