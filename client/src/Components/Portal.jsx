import Stack from 'react-bootstrap/Stack';
import CollapsibleExample from './Navbar';
import { React, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Portal() {
  let navigate = useNavigate();
  const[id,setid]=useState("");
  const getData = async () => {
    console.log(localStorage.getItem('dataKey'));
    let token={
      token:localStorage.getItem('dataKey')
    }
    await axios.post('http://localhost:8080/auth/jwt',token).then(respond => {
            console.log(respond.data);
        }).catch(respond => {
          console.log("Session expired...");
          localStorage.removeItem("dataKey");
          return navigate("/");
        });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <CollapsibleExample/>
      <Stack gap={3}>
        <div className="bg-light border">First item</div>
        <div className="bg-light border">Second item</div>
        <div className="bg-light border">Third item</div>
      </Stack>
    </>
  );
}

export default Portal;