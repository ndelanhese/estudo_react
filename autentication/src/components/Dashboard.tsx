import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";
import styles from '../styles/Home.module.scss';
export function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/me").then((response) => console.log(response)).catch(err => {
      console.log(err);
    });
  }, []);

  return(

  <h1 >Dashboard: {user?.email}</h1>
  
  );
}
