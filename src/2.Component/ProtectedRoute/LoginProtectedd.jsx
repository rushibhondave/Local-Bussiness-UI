import { useEffect } from "react";
import { useNavigate } from "react-router";





function LoginProtectedd(props) {
  const {Componenut} = props  
  const navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/");
    }
  });

  return (
    <div>
      <Componenut />
    </div>
  );
}


export default LoginProtectedd;
