import React, { useEffect } from 'react'
import { Navigate, useNavigate } from "react-router";
function RegsiterProtected(props) {
  const { Compoo } = props;
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/Login");
    }
  });

  return <div>
    <Compoo/>

  </div>;
}


export default RegsiterProtected


