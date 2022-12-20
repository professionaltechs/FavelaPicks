import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../authContext/AuthProvider';
import { axiosAuthInstance, axiosInstance } from '../../axios';
import { Footer } from '../../components/user/Footer';
import { NavBar } from '../../components/user/NavBar';


export const Success = () => {
    const {user} = useContext(UserContext);
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);

    const subscribeAPI = (id) => {
        axiosAuthInstance({
            method: "post",
            url: "api/user/subscribe",
            data: {
                membershipId: id
            }
          }).then((res) => {
            console.log(res)
            setCount((prevStat)=> prevStat + 1)
          }).catch(err => {
            console.log(err)
          })
    }
    useEffect(() => {
        console.log(user)
        const query = new URLSearchParams(window.location.search);
        console.log(query.get("id"));
        const membershipId = query.get("id");
    
        if (query.get("success")) {
            console.log("successs", count)
          setMessage("Order placed! You will receive an email confirmation.");
          if(count == 0){
            subscribeAPI(membershipId)
            // setCount((prevStat)=> prevStat + 1)
          }
        }
    
        if (query.get("canceled")) {
            console.log("faillllllll")
          setMessage(
            "Order canceled -- continue to shop around and checkout when you're ready."
          );
        }
      }, []);

    //   subscribeAPI(membershipId)
  return (
    <>
      <NavBar/>
      <h1>{message}</h1>
      <Footer/>
    </>
  )
}
