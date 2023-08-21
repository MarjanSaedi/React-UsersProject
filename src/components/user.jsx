import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = (props) => {
    const [user, setUser]=useState({});
    const { id } = useParams();

    useEffect( () => {
        async function getData(){
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        setUser(response.data.data);}
        getData();
    });
    return ( 
        <>
        <img src={user.avatar} style={{borderRadius:'50%', width:'100px'}} alt=""/>
        <h4>{user.first_name} {user.last_name}</h4>
        <h5>{user.email}</h5>
        </>
     );
}
 
export default User;